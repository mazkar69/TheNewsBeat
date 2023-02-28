import React from 'react'
import styled from 'styled-components'


// Importing img
import logo from "../../images/logo.png";
import slogan from  "../../images/slider.jpg";

const Slogan = () => {
  return (
    <Box className='container'>
        <div className="logo">
             <img src={logo} alt="Logo" />
        </div>
        <div className="slogan">
            <img className='slogan' src={slogan} alt="" />
        </div>
        <div className="weather">
            <span>13</span>
            <p>Weather</p>
        </div>
    </Box>
    
  )
}


const Box = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
padding: 1rem;

.slogan{
    width: 80%;
    text-align: center;
}

.weather{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media(max-width:700px) {
    .weather{
        display:none;
    }
    .logo{
        display:none;
    }
    .slogan{
    width: 100%;
    text-align: center;
    }
}

`


export default Slogan