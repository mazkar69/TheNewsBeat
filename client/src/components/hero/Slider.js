
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import styled from "styled-components";

export default function Slider() {

    return (
        <Box>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
      
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slide">
                    <iframe width="560" height="600" src="https://www.youtube.com/embed/vqu4z34wENw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <iframe width="560" height="350" src="https://www.youtube.com/embed/huxhqphtDrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YxWlaYCA8MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>

            </Swiper>
        </Box>
    );
}


const Box = styled.div`

.swiper{

min-height: 100% !important;
}



.slide{
    height: 400px !important;
    overflow: hidden;
}
/* iframe{
    min-height: 100%;
} */




.mySwiper{
    min-height: 400px !important;
}


`