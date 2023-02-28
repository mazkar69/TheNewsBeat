
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";


import { Autoplay, Pagination, Navigation } from "swiper";
import NewsInteam from "../NewsIteam";
import styled from "styled-components";

export default function Slider({ data, tag }) {


  return (
    <Div className="container">
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper slider"
      >
        {data.map((elem) => {
          return (<SwiperSlide key={elem._id}> <NewsInteam news={elem} tag={tag}  /> </SwiperSlide>)
        })}

      </Swiper>
    </Div>
  );
}


const Div  = styled.div`

.slider{
  /* border: 2px solid chocolate; */
  padding: 1rem;
  max-width: 100%;
}

`