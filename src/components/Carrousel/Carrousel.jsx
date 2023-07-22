import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Intersection } from '@splidejs/splide-extension-intersection';
import characters from "./characters.json"
import "./styles.css"
const Carrousel = () => {

    const options = {
        type: "loop",
        perPage: 1,
        autoplay: "play",
        interval: 1000,
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: true,
            },
        }
    }
    return (
        <>

            <div className="carrousel">
                <div className="encima"></div>
                <Splide tag="section" options={options} className="section_carrousel" >
                    {characters.map((character, i) => {
                        return (
                            <SplideSlide key={i}>
                                <article className="character_card">
                                    <img src={character.imagen} alt="characterimage" />
                                    <h3>{character.nombre}</h3>
                                </article>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </>
    )
}

export default Carrousel;