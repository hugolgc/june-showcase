# syntax=docker/dockerfile:1

# Stage 1: Build the application
FROM node:20.18.0 AS builder
WORKDIR /app

# Installer libc6-compat si nécessaire
RUN apt-get update && apt-get install -y libc6-compat

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Installer les dépendances
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copier l'intégralité du projet
COPY . .

# Build le projet Next.js
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Stage 2: Préparer l'image pour l'environnement de production
FROM node:20.18.0 AS runner
WORKDIR /app

ENV NODE_ENV=production

# Installer libc6-compat si nécessaire
RUN apt-get update && apt-get install -y libc6-compat

# Créer un utilisateur non root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier uniquement les fichiers nécessaires à l'exécution de l'application
COPY --from=builder /app/.next/ ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Utiliser l'utilisateur non root
USER nextjs

# Exposer le port
EXPOSE 3000

# Démarrer l'application avec next start
ENV PORT=3000
CMD ["npx", "next", "start"]
