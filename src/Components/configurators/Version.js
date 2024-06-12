import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SelectModel } from "../../features/configuratorSclice";
import Carousel from 'react-bootstrap/Carousel';
import Pure1 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg'
import Pure2 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg'
import Pure3 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg'
import Pure4 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg'
import Legend1 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg'
import Legend2 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg'
import Legend3 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg'
import Legend4 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg'


function SelectVersion() {

    const dispatch = useDispatch()
    const voiture = useSelector(state => state.CarConfig.version)
    const Mycar = useSelector(state => state.CarConfig.Mycar)

    const SelectLegend = () => {
        dispatch(SelectModel({ model: voiture[1].name }))
        console.log(Mycar)
    }

    const SelectPure = () => {
        dispatch(SelectModel({ model: voiture[0].name }))
        console.log(Mycar)

    }


    const loadState = () => {

        console.log(voiture)
    }

    return (
        <>
            <section id="configuration">


                <Carousel fade>
                    <Carousel.Item>
                        <img src={Pure1} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Pure2} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Pure3} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item>
                        <img src={Pure4} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Button onClick={SelectPure}> Select Pure </Button>


                <Carousel fade>
                    <Carousel.Item>
                        <img src={Legend1} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Legend2} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Legend3} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item>
                        <img src={Legend4} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Button onClick={SelectLegend}> Select Legend </Button>


                <Button onClick={loadState}> view version </Button>


            </section>
        </>
    )
};
export default SelectVersion
