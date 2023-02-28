
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import NewsInteam from "./NewsIteam";

 function SliderSmall() {
  return (
    <Box>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/gEJGqb_zXIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide className="slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZjlDl7Vgj7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide className="slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/mdzBsAeI0AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>


        {/* <SwiperSlide className="slide"><NewsInteam/></SwiperSlide>
        <SwiperSlide className="slide"><NewsInteam/></SwiperSlide>
        <SwiperSlide className="slide"><NewsInteam/></SwiperSlide> */}

        
      </Swiper>
    </Box>
  );
}

const Box = styled.div`

/* border: 1px solid black; */
/* max-width: 100% !important; */

.mySwiper{
  /* max-width: 400px !important; */
  /* min-height: 350px !important; */
}
.slide{
  /* border: 1px solid chocolate; */
  /* min-width: 500px; */
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center ;



}

`


export default SliderSmall;