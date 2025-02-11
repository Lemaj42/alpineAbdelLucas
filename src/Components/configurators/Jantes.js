import { useSelector, useDispatch } from "react-redux";
import './couleur.css';
import { Button } from "react-bootstrap";
import { SelectJante } from "../../features/configuratorSclice";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanteLegende from '../../assetes/images/configurateur/jantes/selection/jante-legende.jpg';
import JanteSerac from '../../assetes/images/configurateur/jantes/selection/jante-serac.jpg';
import JanteStandard from '../../assetes/images/configurateur/jantes/selection/jante-standard.jpg';
import JanteLegendeBlanc from '../../assetes/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';
import JanteSeracBlanc from '../../assetes/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import JanteStandardBlanc from '../../assetes/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import JanteLegendeBleu from '../../assetes/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg';
import JanteSeracBleu from '../../assetes/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg';
import JanteStandardBleu from '../../assetes/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg';
import JanteLegendeNoir from '../../assetes/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg';
import JanteSeracNoir from '../../assetes/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import JanteStandardNoir from '../../assetes/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';

function Jantes() {
    const dispatch = useDispatch();
    const myModel = useSelector(state => state.CarConfig.MyCar);
    console.log(myModel);

    const changeJante = myModel.jantes || 'Standard';

    const janteImages = {
        'Standard': [JanteStandardBlanc, JanteStandardBleu, JanteStandardNoir],
        'Serac': [JanteSeracBlanc, JanteSeracBleu, JanteSeracNoir],
        'Legende': [JanteLegendeBlanc, JanteLegendeBleu, JanteLegendeNoir],
    };

    let selectedImages = [];
    switch (myModel.color) {
        case "Bleu Alpine":
            selectedImages = {
                'Standard': [JanteStandardBleu],
                'Serac': [JanteSeracBleu],
                'Legende': [JanteLegendeBleu],
            };
            break;
        case "Noir Profond":
            selectedImages = {
                'Standard': [JanteStandardNoir],
                'Serac': [JanteSeracNoir],
                'Legende': [JanteLegendeNoir],
            };
            break;
        default:
            selectedImages = {
                'Standard': [JanteStandardBlanc],
                'Serac': [JanteSeracBlanc],
                'Legende': [JanteLegendeBlanc],
            };
            break;
    }

    const handleJanteSelect = (jantes) => {
        dispatch(SelectJante({ jantes }));
    };

    return (
        <>
            <section id="configuration">
                {selectedImages[changeJante] && selectedImages[changeJante].length > 0 ? (
                    <div>
                        {selectedImages[changeJante].map((image, index) => (
                            <div key={index}>
                                <h3 className="NomModele">{myModel.version}</h3>
                                <img src={image} alt={`${myModel.version} ${changeJante} ${index + 1}`} />
                                <h3>{`${myModel.version} - ${changeJante}`}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Aucune image disponible pour cette couleur.</p>
                )}
            </section >
            <section id="selection">
                <h2>Choisissez vos jantes</h2>
                <div className="selection" style={{ color: 'black' }}>
                    <Button variant="outline-light" onClick={() => handleJanteSelect('Standard')} style={{ backgroundColor: "#005A9C" }}>Jante Standard</Button>
                    <img src={JanteStandard} alt="Jante Standard" style={{ width: "10em" }} />
                    <Button variant="outline-light" onClick={() => handleJanteSelect('Serac')} style={{ backgroundColor: "#005A9C" }}>Jante Serac</Button>
                    <img src={JanteSerac} alt="Jante Serac" style={{ width: "10em" }} />
                    <Button variant="outline-light" onClick={() => handleJanteSelect('Legende')} style={{ backgroundColor: "#005A9C" }}>Jante Legende</Button>
                    <img src={JanteLegende} alt="Jante Legende" style={{ width: "10em" }} />
                </div>
            </section>
        </>
    );
}

export default Jantes;
