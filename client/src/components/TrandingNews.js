import React, { useEffect, useState } from 'react'
import NewsBox from './NewsBox';
import NewsInteam from './NewsIteam';
import styled from 'styled-components'
import Title from './Title';


const TrandingNews = () => {


  
  const [News,setNews] = useState([])

  useEffect(()=>{

    const fetchData = async()=>{

      try{
        // const url = "api/tags?name=tranding";
        const url = "/api?sortBy=tranding&lim=3";
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
      <Title title="Tranding News"/>
      <NewsBox>
        {
            News.map((elem)=>{
              return <NewsInteam key={elem._id} news={elem} tag="tranding"/>
            })
        }
      </NewsBox>
    </Section>

  )
}
const Section = styled.section`

margin: 1rem 0rem;



`
export default TrandingNews;