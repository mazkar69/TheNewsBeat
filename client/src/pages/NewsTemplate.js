import React, { useState ,useEffect} from 'react'
import NewsInteam from '../components/NewsIteam';
import styled from 'styled-components';

// import SliderSmall from '../components/SliderSmall'
import { useParams } from 'react-router-dom';
import Pagination from '../components/miscellaneous/Pagination';
import TabNav from '../components/miscellaneous/TabNav';


import {useGlobalContext} from '../context';

// import { useLocation } from 'react-router-dom';

const NewsTemplate = () => {
  // const { pathname } = useLocation();
  const {setProgress} = useGlobalContext();

  const params = useParams();

  const { tag } = params;


  const [News,setNews] = useState([])

  useEffect(()=>{

    const fetchData = async()=>{

      try{
        setProgress(10);
        const url = `/api?category=${tag}`;
        const response = await fetch(url);
        setProgress(50);
        const data = await response.json();
        setProgress(90);

        // console.log(data)
        setNews(data);
        setProgress(100);


      }catch(e){
        console.log("Error is" + e);
      }
    }
    fetchData();
    // console.log("i am in")
  },[tag])

  // console.log(News);

  return (
    <Section>
      <div className="container">

        <div className="main_news box">
          <h3>{tag} News</h3>
          <div className="news-box">
            {
              News.map((elem)=>{
                return <NewsInteam news={elem} tag={tag} key={elem._id}/>
              })
            }
          </div>
          <Pagination />
        </div>
        <TabNav />

      </div>





    </Section>
  )
}

const Section = styled.section`



max-width: 100%;
padding: 2rem 0rem;

.container{
  /* max-width: 80rem !important; */
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 2rem;

}

.box{
  /* border: 1px solid tomato; */
  padding: 1rem;
}


.newsArea{
  max-width: 100%;
  min-height: 300px;
  padding: 5px;
  margin: 1rem 0rem;
  border: 2px solid gray;
  overflow: hidden;
}

.news-box{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  gap: 2rem;
}

.ad{
  width: 100%;
  margin-top: 2rem;
  /* border: 1px solid red; */
  img{
    width: 100%;
  }
}

@media (max-width:1000px) {
  .container{
    gap: 1rem;
  grid-template-columns: 3fr 2fr;


}
}

@media (max-width:800px) {
  .container{
    max-width: 40rem;
    gap: 2rem;
    grid-template-columns: 1fr;
  }


}

@media (max-width:450px) {
  .container{
    
    max-width: 25rem;

  }
  .news-box{
  grid-template-columns: 1fr ;
  margin-top: 1rem;

}
  
}


  


`
/*
<div className="side_news box">
          <h3>Tranding News</h3>
          <div className="newsArea">
           
           <SliderSmall />
          </div>
        </div>
*/
export default NewsTemplate;