import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { SelectColor } from "../../features/configuratorSclice";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  // Assurez-vous que les styles Bootstrap sont importÃ©s
import Blanc from '../../assetes/images/configurateur/couleurs/selection/blanc.jpg';
import Bleu from '../../assetes/images/configurateur/couleurs/selection/bleu.jpg';
import Noir from '../../assetes/images/configurateur/couleurs/selection/noir.jpg';
import LegendeBlanc1 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg';
import LegendeBlanc2 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg';
import LegendeBlanc3 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg';
import LegendeBlanc4 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';
import LegendeBleu1 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg';
import LegendeBleu2 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg';
import LegendeBleu3 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg';
import LegendeBleu4 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg';
import LegendeNoir1 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg';
import LegendeNoir2 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg';
import LegendeNoir3 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg';
import LegendeNoir4 from '../../assetes/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg';

function ColorChange() {
    const dispatch = useDispatch();
    const selectedModel = useSelector(state => state.CarConfig.MyCar.version);
    const changeColor = useSelector(state => state.CarConfig.MyCar.color) || 'Blanc Opaque';  // Default value

    const colorImages = {
        'Blanc Opaque': [LegendeBlanc1, LegendeBlanc2, LegendeBlanc3, LegendeBlanc4],
        'Bleu Alpine': [LegendeBleu1, LegendeBleu2, LegendeBleu3, LegendeBleu4],
        'Noir Profond': [LegendeNoir1, LegendeNoir2, LegendeNoir3, LegendeNoir4],
    };

    const handleColorSelect = (color) => {
        dispatch(SelectColor({ color }));
    };

    console.log("Selected Model:", selectedModel);
    console.log("Change Color:", changeColor);
    console.log("Color Images:", colorImages[changeColor]);

    return (
        <>
            <section id="configuration">
                {colorImages[changeColor] && colorImages[changeColor].length > 0 ? (
                    <Carousel fade>
                        {colorImages[changeColor].map((image, index) => (
                            <Carousel.Item key={index}>
                                <img src={image} alt={`${selectedModel} ${changeColor} ${index + 1}`} />
                                <Carousel.Caption>
                                    <h3>{`${selectedModel} - ${changeColor}`}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : (
                    <p>Aucune image disponible pour cette couleur.</p>
                )}

                <Button onClick={() => handleColorSelect('Blanc Opaque')}>Select Blanc</Button>
                <img src={Blanc} alt="Blanc Alpine" style={{ width: "10em" }} />
                
                <Button onClick={() => handleColorSelect('Bleu Alpine')}>Select Bleu</Button>
                <img src={Bleu} alt="Bleu Alpine" style={{ width: "10em" }} />
                <Button onClick={() => handleColorSelect('Noir Profond')}>Select Noir</Button>
                <img src={Noir} alt="Noir Alpine" style={{ width: "10em" }} />
            </section>
        </>
    );
}

export default ColorChange;