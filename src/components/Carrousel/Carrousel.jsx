//Importamos la librería de splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";

//Importamos intersection, el cual debe servir para que las fotos pasen automáticamente
import { Intersection } from '@splidejs/splide-extension-intersection';
import destinos from "./destinos.json"
import "./styles.css"
const Carrousel = () => {

    const [destinations, setDestinations] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('');
      const res = await response.json();
      setDestinations(res);
  }
  useEffect(() => {

    getDataAPI();
  },[]);

    const options = {
        type: "slide",
        perPage: 1,
        autoplay: "play",
        interval: 2000,
        pauseOnHover: false,
        rewind:true,
        rewindByDrag: true,
        rewindSpeed: 1500,
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
                    {destinations.map((destination, i) => {
                        return (
                            <SplideSlide key={i}>
                                <article className="destination_card">
                                    <img src={destination.destinationImg[0]} alt="destinationimage" />
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