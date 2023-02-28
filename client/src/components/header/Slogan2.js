import React from 'react'
import styled from 'styled-components'
import { HiMenuAlt1, HiSearch } from 'react-icons/hi'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import logo from "../../images/logoo.png";
import SearchBar from './SearchBar'
import { useGlobalContext } from '../../context'


const Slogan2 = () => {
    const { showSearch, setShowSearch, show } = useGlobalContext();

    return (
        <Box className='container'>

            {showSearch && <SearchBar />}
            <div className="logo">
                <HiMenuAlt1 className='icon menu' onClick={show} />
                <picture>
                    <img src={logo} alt="Logo" />

                </picture>
            </div>

            <div className="search">

                <a href="https://www.facebook.com/people/Jagto-Bharat/100087329033299/" target="_blank"><IoLogoFacebook className='icon social facebook' /></a>

                <a href="https://www.instagram.com/jagto.bharat//" target="_blank"><AiFillInstagram className='icon social instagram' /></a>


                <a href='https://www.linkedin.com/company/jagtobharat/' target="_blank"><AiFillLinkedin className='icon social linkedin' /></a>
                <a href='https://www.youtube.com/@jagtobharat' target="_blank"><AiFillYoutube className='icon social youtube' /></a>
                <a href='https://twitter.com/JagtoB' target="_blank"><AiFillTwitterCircle className='icon social twitter' /></a>
                <HiSearch className='icon search' onClick={() => {
                    setShowSearch(true)
                }} />
            </div>
        </Box>

    )
}


const Box = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 0rem .5rem;

.logo{
    display: flex;
    /* gap: 1rem; */
    align-items: center;
    /* justify-content: center; */
}
.logo picture {
    width: 20%;
    
}
.logo img{
    width: 200%;
    height: auto;
}
.icon{
    font-size: 1.8rem;
}
.search{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
}
/* color on social media icon */
.facebook{
    color: #3b5998;
}
.instagram{
    color:#C32AA3;
}
.linkedin{
    color:#007bb6;
}
.twitter{
    color: #0084b4;
}
.youtube{
    color:#FF0000;
}



@media(max-width:700px) {

    .social{
        display: none;
    }
}
@media(max-width:600px) {

    /* padding: 0.5rem; */
    .logo picture{
        width: 35%;
    }
}
@media(max-width:450px) {

    padding: 0.5rem;
    .logo picture{
        width: 40%;
    }
}

`


export default Slogan2