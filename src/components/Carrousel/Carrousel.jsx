import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Intersection } from '@splidejs/splide-extension-intersection';
import characters from "./characters.json"
import destinos from "./destinos.json"
import "./styles.css"
const Carrousel = () => {

    const options = {
        type: "loop",
        perPage: 1,
        autoplay: "play",
        interval: 2000,
        pauseOnHover: false,
        arrows:false,
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

                <Splide tag="section" options={options} className="section_carrousel" >
                    {destinos[0].destinationImg.map((image, i) => {
                        return (
                            <SplideSlide key={i}>
                                <article className="character_card">
                                    <img src={image} alt="destinationimage" />
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