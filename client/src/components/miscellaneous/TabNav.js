import React, { useEffect } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import { useState } from 'react'
import ad_img from '../../images/ad.jpg'

const TabNav = () => {

  const [activeTab, setActiveTab] = useState([1, 0, 0])
  const [popularNews, setPopularNews] = useState([])
  const [latestNews, setLatestNews] = useState([])
  const [topNews, setTopNews] = useState([])



  const tabHandler = (event) => {
    const flag = [0, 0, 0]
    const index = Number(event.target.id);
    flag[index] = 1;
    setActiveTab(flag);
    // console.log(flag)

  }

  useEffect(() => {

    const fetchData = async () => {
      const url = '/api?sortBy=popular';
      const result = await fetch(url);
      const newses = await result.json();
      // console.log(newses);
      setPopularNews(newses);

    }
    fetchData();
  }, [])

  useEffect(() => {
    // console.log("use effecct in tab run")
    const fetchData = async () => {
      const url = '/api/?lim=6';
      const result = await fetch(url);
      const newses = await result.json();
      setLatestNews(newses)

    }
    fetchData();
  }, [])

  useEffect(() => {
    // console.log("use effecct in tab run")
    const fetchData = async () => {
      const url = '/api?sortBy=top';
      const result = await fetch(url);
      const newses = await result.json();
      setTopNews(newses);

    }
    fetchData();
  }, [])

  let news = [];
  const [p, l, t] = activeTab;

  if (p) {
    news = popularNews;
  }
  if (l) {
    news = latestNews;

  }
  if (t) {
    news = topNews;
  }



  // console.log(news);
  return (
    <Div className="side-tab-nav box">
      <div className="tabs">
        <ul>
          <li className={activeTab[0] && "active"} id='0' onClick={tabHandler}>Popular News</li>
          <li className={activeTab[1] && "active"} id='1' onClick={tabHandler}>Latest News</li>
          <li className={activeTab[2] && "active"} id='2' onClick={tabHandler}>Top News</li>

        </ul>
      </div>
      <div className="news_boxs">
        {
          news.map((elem) => {
            return <NewsItem key={elem._id} data={elem} />
          })
        }


      </div>

      <div className="ad">
        <a href="https://www.bhartiyaairways.com/" target="_blank">
          <img src={ad_img} alt="" />
        </a>
      </div>
    </Div>
  )
}

const Div = styled.div`

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



/* ----------------- */
.tabs{
  background-color: #f2f2f2;
  /* height: 100%; */

  .active{
    background-color: white;
  }

  ul{
    display: flex;
    gap: 5px;
    justify-content: space-between;

    border-bottom: 1px solid gray;

    li{
      border: 1px solid grey;
      padding: .5rem;
      border-radius: 4px 4px 0px 0px;
      color: black;
      font-size: .8rem;
     cursor: pointer;

      
      
    }
  }
}

@media (max-width:800px) {
  /* border: 2px solid green; */
  max-width: 30rem;
  margin: auto;

  
}
`

export default TabNav