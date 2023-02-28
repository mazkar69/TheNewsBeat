import React, { useState,useEffect } from 'react'
// import styled from 'styled-components'
import NewsBox from './NewsBox'
import Slider from './miscellaneous/Slider'
import styled from 'styled-components'
import Title from './Title'

const Entertainment = () => {

  const [News,setNews] = useState([])

  useEffect(()=>{

    const fetchData = async()=>{

      try{

        const url = "/api?category=entertainment";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setNews(data);
      }catch(e){
        console.log("Error is" + e);
      }
    }
    fetchData();
  },[])


  return (
    <Section>
      <Title title="Entertainment" />
      <Slider data={News} tag="entertainment" />
    </Section>
  )
}

const Section = styled.section`
margin: 1rem 0rem;

`

export default Entertainment