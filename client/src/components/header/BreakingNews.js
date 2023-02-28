import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdOutlineBorderHorizontal } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const BreakingNews = () => {
    const [breakingNews,setBreakingNews] = useState([{}]);


    useEffect(()=>{
        const fetchBreakingNews = async()=>{
            const url = "/api?sortBy=breakingNews";

            const BreakingNews = await fetch(url);
            setBreakingNews(await BreakingNews.json());

        }
        fetchBreakingNews();

    },[])

    return (
        <Box className='container'>
            <span className="breaking-news-title delay-animated slidein">
                BREAKING NEWS
            </span>
            <marquee behavior="" direction=""><A to={`/breaking/${breakingNews[0].slug}`}>{breakingNews[0].title}</A></marquee>
        </Box>
    )
}


const A = styled(Link)`

color:black;
&:hover{
    text-decoration: underline;
}

`
const Box = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
font-size:  1rem;
border-bottom:1px solid #b3b3b3;


.breaking-news-title{
    background-color: #660000;
    color: white;
    width: 200px;
    padding:.5rem ;
    text-align: center;
    
}

@media (max-width:600px) {

font-size:  13px;



.breaking-news-title{

    width: 250px;
    padding:.3rem ;

    
}
    
}


`



export default BreakingNews