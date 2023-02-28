import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { MdAccessTimeFilled } from "react-icons/md"

const NewsInteam = ({ news, tag }) => {
  // console.log("This is" + props)
  // console.log(data)

  const formatDate = (str)=>{
    const d = new Date(str);
    // console.log(d)  //This is the object not string
    return d.toString().slice(4,21);
  }
  return (
    <Box>
      <Link to={`/${tag}/${news.slug}`} className="item">
        <div className="news_img">
          <img src={news.urlToImage} alt="" />
        </div>
        <div className="new_data">
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </div>
        <div className="date_info">
          <p><span><MdAccessTimeFilled /> {formatDate(news.publishedAt)}</span></p>
        </div>

      </Link>

    </Box >
  )
}


const Box = styled.div`

.item{
  cursor: pointer;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  gap: 1rem;


}

.news_img {
  overflow: hidden;
  /* width: 200px; */
  img{
    width: 100%;
    border-radius:8px;
    transition: all .5s linear;
    &:hover{
      
    transform: scale(1.1);                                          
    }
  }

  
}

.new_data{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.date_info{
  display: flex;
  align-items: center;

  span{
    display: flex;
    gap: .5rem;
    padding: 0rem .5rem;
  }
}


`





export default NewsInteam;