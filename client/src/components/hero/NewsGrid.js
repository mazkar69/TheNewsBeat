import React from 'react'
import styled from 'styled-components';
import NewsCard from './NewsCard';
import NewsCardLg from './NewsCardLg';
import Title from '../Title';

import { useState,useEffect } from 'react';

const NewsGrid = () => {
    const [latestNews,setLatestNews] = useState([{}]);

    //This useEffect will run to fetch the latest news  and show in the grid.
    useEffect(()=>{

            // This funtion will call the api and save the news in the state.
            const fetchNews = async()=>{
                const url = '/api?lim=4'
                const newsResponse = await fetch(url);
                setLatestNews(await newsResponse.json())
            }
            fetchNews();
    },[])
    // console.log(latestNews);
    return (
        <Div>
            <Title title="Latest News"/>
            <div className="news_box">
                <NewsCardLg news={latestNews[0]} />
                {
                    latestNews.slice(1).map((news)=>{
                        return <NewsCard className="card1" news={news} key={news._id} />
                    })
                }
                {/* <NewsCard className="card1" news={latestNews[1]}/>
                <NewsCard className="card"  news={latestNews[2]}/>
                <NewsCard className="card" news={latestNews[3]} /> */}
            </div>
        </Div>
    )
}

const Div = styled.div`
        background-color: white;
        /* padding: 1rem; */
    .news_box{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }



`

export default NewsGrid;