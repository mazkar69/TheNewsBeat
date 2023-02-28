// This News item is for the tab news, In the descriptin of news  we have tab news on there we use this.

import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const NewsItem = ({data}) => {
    // console.log(data)


    return (
        <Box to={`/news/${data.slug}`} className="item" >
            <div className="title">
                <p>{data.title}
                </p>
            </div>
            <div className="img">
                <img src={data.urlToImage} alt="img" />
            </div>
        </Box>
    )
}

const Box = styled(Link)`
margin-top: 1.5rem;
border-bottom: 1px solid gray;
display: flex;
gap: 1rem;

p{
    font-size: 15px;
}

.img{
    max-width: 30%;
    img{
        width: 100%;
        /* height: 100%; */
    }

}


`

export default NewsItem