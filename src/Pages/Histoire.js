import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './CSS/Histoire.css';
import AlpineHistoire1 from '../assetes/images/Histoire/AlpineHistoire1.jpg';
import AlpineHistoire2 from '../assetes/images/Histoire/AlpineHistoire2.jpg';
import AlpineHistoire3 from '../assetes/images/Histoire/AlpineHistoire3.jpg';
import A110_PE_1 from '../assetes/images/sources-homepage/galerie/A110_PE_1.jpg';
import A110_PE_7 from '../assetes/images/sources-homepage/galerie/A110_PE_7.jpg';
import A110_PE_9 from '../assetes/images/sources-homepage/galerie/A110_PE_9.jpg';

function History() {
    return <>
        <section className="BgSection">
            <div className="imgHis">
                <h2 className="h2Tittre">ORIGINE DE LA MARQUE</h2>
            </div>
            <div class="m-5 container-fluid h-180">
                <div class="row h-70 justify-content-center align-items-center">
                    <div class="col-md-5 col-12 ms-3">
                        <h3 className="h3his">JEAN RÉDÉLÉ, LE FONDATEUR.</h3>
                        <p>Jean Rédélé est né le 17 mai 1922 dans une famille passionnée de sport automobile. Après avoir brillamment réussi ses études, il prend à 24 ans les rênes d’une concession Renault à Dieppe, sa ville natale. Il perfectionne ses compétences d’ingénieur et de pilote dans le monde de la course, bien conscient que le sport automobile permet de démontrer les capacités de ses véhicules — une approche qui ouvrira la voie à des voitures de sport très spéciales.</p>
                    </div>
                    <div class="col-md-4 col-12 text-center px-0" id="borderEX">
                        <img src={AlpineHistoire1} alt="AlpineHistoire1" style={{ maxWidth: '60%' }} />
                    </div>
                </div>
            </div>
            <div class="m-5 container-fluid h-150">
                <div class="row h-70 justify-content-center align-items-center">
                    <div class="col-md-4 col-12 text-center px-0" id="borderEX">
                        <img src={AlpineHistoire2} alt="AlpineHistoire2" style={{ maxWidth: '60%' }} />
                    </div>
                    <div class="col-md-5 col-12 ms-3">
                        <h3 className="h3his">DES DÉBUTS MODESTES</h3>
                        <p>La Renault 4CV est souvent considérée comme la voiture familiale d’après-guerre par excellence, mais Jean Rédélé a pressenti qu’elle avait davantage de potentiel et a transcendé les performances du groupe motopropulseur grâce sa boîte de vitesses à cinq rapports. Il court dans les Alpes et sur le terrain éprouvant des Mille Miglia au volant d’une 4CV, remportant de nombreuses victoires. Les modèles suivants porteront le nom de l’endroit où il a pris le plus de plaisir à perfectionner son art : les sinueuses routes alpines.</p>
                    </div>
                </div>
            </div>
            <div class="m-5 container-fluid h-150">
                <div class="row h-70 justify-content-center align-items-center">
                    <div class="col-md-5 col-12 ms-3">
                        <h3 className="h3his">LA PHILOSOPHIE D’ALPINE</h3>
                        <p>« C’est ce sentiment de contrôle fascinant que je souhaitais que les clients ressentent au volant de la voiture que je voulais construire », déclare Jean Rédélé. Il créé sa propre voiture de sport en habillant la mécanique de la 4CV d’une carrosserie légère en aluminium : 60Kg sont gagnés par rapport à la version originale. Cette recherche de légèreté restera un élément central des modèles

                            Alpine. La marque voit officiellement le jour en juin 1955 dans la ville natale de Jean Rédélé, à Dieppe, où elles sont encore construites aujourd’hui.</p>
                    </div>
                    <div class="col-md-4 col-12 text-center px-0" id="borderEX">
                        <img src={AlpineHistoire3} alt="AlpineHistoire3" style={{ maxWidth: '60%' }} />
                    </div>
                </div>
            </div>
            <div class="m-5 container-fluid h-150">
                <div class="row h-70 justify-content-center align-items-center">
                    <div class="CarouHis col-md-4">
                        <Carousel>
                            <Carousel.Item>
                                <img className="imgCar" src={A110_PE_1} alt="A110_PE_1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgCar" src={A110_PE_7} alt="A110_PE_7" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgCar" src={A110_PE_9} alt="A110_PE_9" />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="col-md-5 col-12 ms-3">
                        <h3 className="h3his">LE RETOUR D’UNE ICÔNE</h3>
                        <p>L’Alpine A110 revient en force sur le devant de la scène en 2017 ; l’esprit pionnier de Jean Rédélé s’est réincarné dans une voiture alliant un groupe motopropulseur réglé avec expertise à une carrosserie fine et légère, pour bousculer la hiérarchie des voitures de sport. Plusieurs fois primée, elle est appréciée par les critiques automobiles comme par les fans d’Alpine, anciens et nouveaux. Encore plus captivante à conduire que ses homonymes, l’A110 fait le lien entre le passé, le présent et l’avenir d’Alpine.</p>
                    </div>
                </div>
            </div>
        </section>

    </>

}
export default History