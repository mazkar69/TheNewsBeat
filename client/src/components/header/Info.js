import React from 'react'
import styled from "styled-components";

//Importing icons
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'

const Info = () => {

    return (
        <Infoo>
            <div className="title">
                Breaking News
            </div>
            <div className="breking_news">
                <marquee>

                    मेट्रो पिलर गिरने से ढाई साल के बच्चे और उसकी माँ की मौत
                </marquee>
            </div>
            <div className="social">
                <div className="icons">
                    <AiFillFacebook className='icon' />
                    <AiFillInstagram className='icon'/>
                    <AiFillLinkedin className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillTwitterCircle className='icon'/>
                    <button className='btn_1'>Hindi <RiArrowDropDownLine className='icon'/></button>
                </div>
            </div>
        </Infoo>
    )
}

const Infoo = styled.nav`

display: flex;
justify-content: space-between;
padding: 0 5rem;
background-color: black;
color: white;
align-items: center;
height: 35px;


.title{
    background-color: red;
    height: 100%;
    background-color: rgb(179, 32, 32);
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0rem 1rem; */
    min-width: 150px;

}
.breking_news{
    flex-basis:100%;
    /* border: 1px solid red; */
}

.icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}


.btn_1{
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    padding: .3rem 2rem;
    margin: 15px 0px;
}

@media (max-width:700px) {
padding: 0rem;

    .icons{
        display: none;
   
    }
    .title{
        font-size: 1rem;
    }

    
}
`
export default Info;