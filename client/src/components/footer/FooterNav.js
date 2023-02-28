import React from 'react'
import styled from 'styled-components';
import {AiOutlineHome,} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'
import {MdOndemandVideo} from 'react-icons/md'
import {BsCameraVideo} from 'react-icons/bs';

import { Link } from 'react-router-dom';

const FooterNav = () => {
  return (
    <Section>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"><AiOutlineHome className='nav_icon'/></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"><BsCameraVideo className='nav_icon'/></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' hto="/"><MdOndemandVideo className='nav_icon'/></Link>
                </li>

                <li className='nav-item'>
                
                    <Link className='nav-link' to="/"><HiMenu className='nav_icon'/></Link>
                </li>

            </ul>

    </Section>
  )
}

const Section = styled.section`
a{
    color: white;
}
background-color:rgb(81 41 243);
padding: .5rem 1rem;
max-width: 100%;
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
z-index: 10000;
border-radius: 1rem 1rem 0rem 0rem;
display: none;

.nav-list{
    display: flex;
    justify-content: space-between;
    padding: .2rem 1rem;
}

.nav_icon{
    font-size: 1.8rem;
}
@media (max-width:700px) {
    display: block;
    
}
`


export default FooterNav;
