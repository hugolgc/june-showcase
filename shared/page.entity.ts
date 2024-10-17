export class Page {
    public constructor(
        public readonly title: string,
        public readonly html: string,
        public readonly css: string,
    ) {}

    public get headTitle(): string {
        return `June Association d'aide aux Jeunes | ${this.title}`;
    }
}
