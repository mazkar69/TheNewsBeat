import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const NewsCard = ({news}) => {
    const formatDate = (str)=>{
        const d = new Date(str);
        // console.log(d)  //This is the object not string
        return d.toString().slice(4,21);
      }
    return (
        
        <Div>
            <Link to={`/latest/${news.slug}`}>
            <div className="uppar">
                <div className="title">
                    <h6>{news.title}</h6>
                </div>
                <picture>
                    <img src={news.urlToImage}/>
                </picture>
            </div>
            <div className="date">
                <p>{formatDate(news.publishedAt)}</p>
            </div>
            </Link>
        </Div>
    )
}

const Div = styled.div`
padding: 5px 1rem;
border-radius: 5px;
/* border: 1px solid gray; */
box-shadow: 3px 4px 9px 0px rgba(178,178,178,0.75);
-webkit-box-shadow: 3px 4px 9px 0px rgba(178,178,178,0.75);
-moz-box-shadow: 3px 4px 9px 0px rgba(178,178,178,0.75);

.uppar{
    display: flex;
    gap: .7rem;
    align-items: center;
    justify-content: space-between;
    padding: 0rem .2rem;
    h6{
        font-size: 1rem;
        color: black;
    }


}
picture{
    max-width: 30%;
    img{
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

}
.date{
    padding: 0rem .5rem;
}

@media (max-width:600px) {
    h6{
        font-size: .8rem !important;
    }
    picture{
    max-width: 35%;
    img{
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

}
    
}

`

export default NewsCard