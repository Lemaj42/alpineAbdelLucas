import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SelectModel, AddPrice } from "../../features/configuratorSclice";
import Carousel from 'react-bootstrap/Carousel';
import './version.css';
import Pure1 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg'
import Pure2 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg'
import Pure3 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg'
import Pure4 from '../../assetes/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg'
import Legend1 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg'
import Legend2 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg'
import Legend3 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg'
import Legend4 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg'

function SelectVersion() {
    const dispatch = useDispatch();
    const voiture = useSelector((state) => state.CarConfig.version);

    const selectLegend = () => {
        dispatch(SelectModel({ model: voiture[1].name }));
        dispatch(AddPrice({ prix: voiture[1].price }));

    };

    const selectPure = () => {
        dispatch(SelectModel({ model: voiture[0].name }));
        dispatch(AddPrice({ prix: voiture[0].price }));

    };

    console.log(voiture);


    return (
        <section className="d-flex">
            <div className="col-6">
                <h3 className="NomModele">{voiture[0].name} {voiture[0].price} €</h3>


                <Carousel fade className="caroussel">

                    {[Pure1, Pure2, Pure3, Pure4].map((imgSrc, index) => (
                        <Carousel.Item key={index}>
                            <img src={imgSrc} alt={`Pure Model Slide ${index + 1}`} height={'600px'} />
                            <Carousel.Caption>
                                <h3>{`Slide ${index + 1}`}</h3>
                                <p>Some placeholder text for slide {index + 1}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div>
                    <h3>Pure</h3>
                </div>
                <Button onClick={() => { selectPure(); AddPrice() }}>Select Pure</Button>
            </div>
            <div className="col-6">
                <h3 className="NomModele">{voiture[1].name} {voiture[1].price} €</h3>


                <Carousel fade className="caroussel">
                    {[Legend1, Legend2, Legend3, Legend4].map((imgSrc, index) => (
                        <Carousel.Item key={index}>
                            <img src={imgSrc} alt={`Legend Model Slide ${index + 1}`} height={'600px'} />
                            <Carousel.Caption>
                                <h3>{`Slide ${index + 1}`}</h3>
                                <p>Some placeholder text for slide {index + 1}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Button onClick={() => { selectLegend(); AddPrice() }}>Select Legend</Button>
            </div>
        </section>
    );
}

export default SelectVersion;