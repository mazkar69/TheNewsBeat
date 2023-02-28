import React from 'react'
import NewsBox from './NewsBox'
import NewsInteam from './NewsIteam'
import Title from './Title'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
const NationalNews = () => {

  
  const [News,setNews] = useState([])

  useEffect(()=>{

    const fetchData = async()=>{

      try{
        // const url = "api/national?lim=3";
        const url = "api?category=national&lim=3";
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

  // console.log(News);
 
  return (
    <Section>
      <Title title="National News"/>
      <NewsBox>
        {
            News.map((elem)=>{
              return <NewsInteam key={elem._id} news={elem} tag="national"/>
            })
        }
      </NewsBox>
    </Section>

  )
}

const Section = styled.section`
margin: 1rem 0rem;

`

export default NationalNews