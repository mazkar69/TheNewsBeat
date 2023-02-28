import React from 'react'
import styled from 'styled-components';
import NewsIteam from '../miscellaneous/NewsIteam';
import NewsGrid from './NewsGrid';
// import Slider from './Slider';
import SliderSmall from '../SliderSmall'
import Title from '../Title';

import { useState,useEffect } from 'react';
import { set } from 'mongoose';
const Hero = () => {

  const [topNews,setTopNews] = useState([]);

  useEffect(()=>{

    const fetchNews = async()=>{
      const url = "/api?sortBy=top";
      const response = await fetch(url);
      setTopNews(await response.json());

    }
    fetchNews();
  },[])
  // console.log(topNews)
  return (
    <Section>
      <div className="container">
        {/* <div className="video hero_box"> */}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vqu4z34wENw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <Slider/> */}
        {/* </div> */}
        <NewsGrid />
        <div className="top_news hero_box">
          <h3 className='title'>Top News</h3>
          <div className="marque">
            <ul>
              {
                topNews.map((news)=>{
                  return <NewsIteam key={news._id} news={news}/>
                })
              }
             
            </ul>
          </div>

          {/* video */}
          <div className="video_container">
            <h3 className='title'>Videos</h3>
            <SliderSmall/>
          </div>
        </div>
      </div>

    </Section>
  )
}

const Section = styled.section`


max-width: 100%;
padding: 2rem;

.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}



.hero_box{
  /* border: 1px solid black; */
  border-radius: 8px;
  /* min-height: 400px; */
  /* max-height: 400px; */
  padding: 1rem;
  background-color: white;
  overflow: hidden;

}


.title{
  /* font-size: 1rem; */
  padding: 1rem 0rem;
}

.marque{
  /* min-height: 600px; */
  max-height: 450px;
  overflow: hidden;
  
}

.top_news ul{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: scrolling 15s linear infinite;
  margin-top: 1rem;
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
}

.video_container{
  /* border: 1px solid red; */
  height: 25rem;
  margin-top: 2rem;
  padding: .5rem;
  color:black;
}

iframe{
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
}

/* Animation */
@keyframes scrolling {
  0%{
    
  }
  50%{
    transform: translateY(-400px);
  }
  100%{

  }
  
}


//media Queries

@media (max-width:900px)
{
  .container{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  .top_news{
    grid-row: 1/1;
  }
}

}
@media (max-width:600px)
{
  padding: 1rem;
  .hero_box{
  /* border: 1px solid black; */

  padding: 0rem;


}

}

`

export default Hero;