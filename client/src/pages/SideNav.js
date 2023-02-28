import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo2.png'
import {BiWorld} from 'react-icons/bi'
import slogan from '../images/slider.jpg'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
//icon
import { MdOutlineCancel,MdOutlineLiveTv, MdOutlineSportsCricket, MdOutlineCoronavirus, MdNotes, MdVideocam, MdMovie, MdOutlineFeaturedPlayList } from 'react-icons/md'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube,AiFillTwitterSquare} from 'react-icons/ai'
const SideNav = () => {
    const {hide} = useGlobalContext();
    return (
        <Div>
            <nav>
                 <img src={logo} alt="" />
                <MdOutlineCancel className='icon' onClick={hide} />
            </nav>
            <div className="link_container">


                <div className="title">
                    <span>SELECT LANGUAGE</span>
                </div>
                <div className="language">
                    <input type="radio" name="lang"/><span>English</span>
                    <input type="radio" name="lang" checked/><span>Hindi</span>
                </div>

                <div className="title">
                    <span>MORE LINKS</span>
                </div>
                <div className="links">
                    <div className="left box">
                        <div className="link"><MdOutlineLiveTv className='icon' /> <a href="">Live TV</a></div>
                        <div className="link"><MdOutlineSportsCricket className='icon' /> <a href="">Cricket</a></div>
                        <div className="link"><MdNotes className='icon' /> <a href="">Latest</a></div>
                        <div className="link"><MdOutlineCoronavirus className='icon' /> <a href="">CronaVirus</a></div>
                    </div>
                    <div className="right box">
                        <div className="link"><MdVideocam className='icon' /> <a href="">Video</a></div>
                        <div className="link"><MdMovie className='icon' /> <a href="">Movies</a></div>
                        <div className="link"><MdOutlineFeaturedPlayList className='icon' /> <a href="">Offbeat</a></div>
                        <div className="link"><BiWorld className='icon' /> <a href="">World</a></div>

                    </div>
                </div>


                <div className="title">
                    <span>FOLLOW US ON</span>
                </div>
                <div className="links">
                    <div className="left box">
                        <div className="link"><AiFillFacebook className='icon' /> <a href="https://www.facebook.com/people/Jagto-Bharat/100087329033299/" target="_blank">Facebook</a></div>
                        <div className="link"><AiFillInstagram className='icon' /> <a href="https://www.instagram.com/jagto.bharat//" target="_blank">Instagram</a></div>
                        
                        
                    </div>
                    <div className="right box">
                        <div className="link"><AiFillYoutube className='icon' /> <a href='https://www.youtube.com/@jagtobharat' target="_blank">Youtube</a></div>
                        <div className="link"><AiFillTwitterSquare className='icon' />   <a href='https://twitter.com/JagtoB' target="_blank">Twitter</a></div>


                    </div>
                </div>




                <div className="slogan">
                    <img src={slogan} alt="" />
                </div>

               
                

            </div>
        </Div>
    )
}

const Div = styled.div`

width: 40%;
min-height: 100vh;
position: fixed;
border-right: 1px solid silver;
background-color: rgb(248,248,255);
top: 0;
left: 0;
/* overflow:scroll; */
z-index: 99999999999999999;

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem 2rem;
    /* border: 1px solid gray; */
    border-bottom: 1px solid gray;

}
.icon{
    font-size: 1.5rem;
}

.link_container{
    max-width: 90%;
    /* border: 1px solid green; */
    margin: 1rem auto;
}
.title{
    margin-top: 2rem;
    border-bottom: 1px solid gray;
    span{
        font-size: .8rem;
        /* color: gray; */
    }
}

.language{
    display: flex;
    gap: 1rem;
    margin: .5rem;

    span{
        font-size: 1rem;
    }
}
.links{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}
.box{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.left{
    padding-right: 4rem;
    border-right: 1px solid black;
}
.right{
    padding-left: 1rem;
    padding-right: 4rem;
}
.link{
    display: flex;
    
    /* justify-content: center; */
    margin:.5rem 0rem;
    align-items: center;
    gap: .5rem;
    a{
        font-size: 1rem;
        color: black;
    }
}

.slogan img{
    margin-top: 2rem;
    width: 100%;
}



@media (max-width:1600px) {
    width: 30%;
    
}
@media (max-width:1000px) {
    width: 50%;
    
}
@media (max-width:800px) {
    width: 60%;
    
}
@media (max-width:600px) {
    width: 70%;
    
}
@media (max-width:500px) {
    width: 100%;
    
}

`



export default SideNav