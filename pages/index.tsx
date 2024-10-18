import { ReactElement } from "react";

import Head from "next/head";
import Image from "next/image";

import eat from "@/assets/eat.svg";
import logo from "@/assets/logo.svg";
import loud from "@/assets/loud.svg";
import ways from "@/assets/ways.svg";
import brain from "@/assets/brain.svg";
import balance from "@/assets/balance.svg";
import mockery from "@/assets/mockery.svg";
import documents from "@/assets/documents.svg";
import characterOne from "@/assets/character-one.svg";
import groupOnChairs from "@/assets/group-on-chairs.svg";
import groupWithBlocks from "@/assets/group-with-blocks.svg";

export default function Home(): ReactElement {
    return (
        <>
            <Head>
                <title>June | Association d&apos;Aide aux Jeunes</title>
                <meta name="description" content="Description de June" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="home">
                <header>
                    <nav className="container">
                        <Image src={logo} alt="June" />
                        <div className="actions">
                            <a className="button-secondary">Se connecter</a>
                            <a className="button-primary">S&apos;inscrire</a>
                        </div>
                    </nav>
                </header>
                <main>
                    <section className="first">
                        <div className="container">
                            <h1>Ne reste pas seul·e face à tes problématiques</h1>
                            <p>
                                June offre aux jeunes de 13 à 25 ans et leurs parents, un soutien moral et émotionnel,
                                des thérapies et une prise en charge des situations de détresse, des conseils légaux et
                                administratifs.
                            </p>
                            <div className="actions">
                                <a className="button-primary">S&apos;inscrire</a>
                                <a className="button-secondary">En savoir plus</a>
                            </div>
                        </div>
                        <Image src={groupOnChairs} alt="Groupe de personnes sur des chaises" />
                    </section>

                    <section className="second">
                        <ul className="container">
                            <li>
                                <Image src={balance} alt="Balance" />
                                <span>Conseils juridiques</span>
                            </li>
                            <li>
                                <Image src={brain} alt="Cerveaux" />
                                <span>Suivi psychologique</span>
                            </li>
                            <li>
                                <Image src={documents} alt="Documents" />
                                <span>Démarches administratives</span>
                            </li>
                            <li>
                                <Image src={ways} alt="Directions" />
                                <span>Orientation</span>
                            </li>
                            <li>
                                <Image src={eat} alt="Couverts" />
                                <span>Troubles alimentaires</span>
                            </li>
                            <li>
                                <Image src={loud} alt="Harcèlement" />
                                <span>Harcèlement</span>
                            </li>
                            <li>
                                <Image src={mockery} alt="Discrimination" />
                                <span>Discrimination</span>
                            </li>
                        </ul>
                    </section>

                    <section className="third">
                        <div className="container">
                            <h2>Qu’est-ce que June fait pour moi ?</h2>
                            <div className="columns">
                                <div className="left">
                                    <Image src={groupWithBlocks} alt="Groupe de personnes avec des blocks" />
                                </div>

                                <div className="right">
                                    <div>
                                        <h3>10 rendez-vous gratuits/an</h3>
                                        <p>
                                            Nous proposons aux jeunes de 13 à 25 ans et leurs parents 10 rendez-vous
                                            gratuits avec nos bénévoles. Besoin de plus de temps ? Avec nos cotisations
                                            personnalisés, deviens adhérent et bénéficie de rendez-vous illimités.
                                        </p>
                                    </div>

                                    <div>
                                        <h3>Services variés</h3>
                                        <p>
                                            Nos bénévoles aux compétences variées proposent un accompagnement complet.
                                            Universitaires ou diplômés bien rodés, leur quotidien c&apos;est
                                            d&apos;aider les jeunes.
                                        </p>
                                        <ul>
                                            <li>Avocat</li>
                                            <li>Juriste</li>
                                            <li>Médiateur Familial</li>
                                            <li>Éducateur</li>
                                            <li>Assistant Social</li>
                                            <li>Médecin</li>
                                            <li>Infirmier</li>
                                            <li>Psychologue</li>
                                            <li>Psychiatre</li>
                                            <li>Sage Femme</li>
                                            <li>Sophrologue</li>
                                            <li>...</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3>Une communauté solidaire</h3>
                                        <p>
                                            June c’est aussi une communauté bienveillante présente à tout moment sur{" "}
                                            <a>Discord</a> pour partager et échanger.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="fourth">
                        <div className="container">
                            <h2>+1000 accompagnements déjà réalisés</h2>
                            <ul>
                                {Array.from({ length: 4 }, (_, key) => (
                                    <li key={key}>
                                        <figure>
                                            <Image src={characterOne} alt="Personnage desinné" />
                                            <figcaption>Adèle, 19 ans</figcaption>
                                        </figure>
                                        <p>
                                            “J&apos;étais victime de harcèlement scolaire. Je me sentais tellement
                                            seule. Grâce aux consultations en ligne avec un psychologue et à la
                                            communauté de June, j&apos;ai pu parler à des gens qui me comprenaient et
                                            qui ne me jugeaient pas.”
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
