import React, { useEffect, useState } from 'react'
import Slider from './miscellaneous/Slider';
import NewsBox from './NewsBox';
// import NewsInteam from './NewsIteam';
import Title from './Title';
import styled from 'styled-components';

const InternationalNews = () => {
  const [News, setNews] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {

        // const url = "api/national";
        const url = "api?category=world";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setNews(data);
      } catch (e) {
        console.log("Error is" + e);
      }
    }
    fetchData();
  }, [])


  return (
    <Section>
      <Title title="International" />
      <Slider data={News} tag="international" />
    </Section>
  )
}

const Section = styled.section`

margin-top: 1rem 0rem;

`

export default InternationalNews;