import React, { useState } from 'react'
import styled from "styled-components"
import Dropdown from '../miscellaneous/Dropdown'
import { HiMenu } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
    // console.log(toggle)
    const [toggle, setToggle] = useState(true)

    if (toggle) {
        var flag = " max-height: 30px;"
    }
    else{
        flag = "";
    }

    const Nav = styled.nav`
    background-color: black;
    /* position: sticky;
    top: 0%;
    left: 0%;
    right: 0%;
    z-index: 9999999; */
    color: white;
    padding: .5rem 0rem;
    
    transition: all 2s linear;
    
    .menu{
        display: none;
    }
    .menu-icon{
        font-size: 2rem;
        
    }
    
    ul{
        display: flex;
        align-items: center;
        /* max-height: 30px; */
        gap: 2rem;
        flex-wrap: wrap;
        padding: 2px;
        
    
    }
    li{
        list-style: none;
        font-size: 1rem;
        padding: 0.5rem rem;
    
    }
    .link{
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
    .hide{
        max-height: 30px;
    
    }
    
    
    
    @media(max-width:700px)
    {
        overflow: hidden;
       ${flag}
    
        .menu{
            display: block;
        }
        ul{
            flex-direction: column;
           padding-left: 3rem;
           align-items: start;
            
        }
    }
    
    
    
    `

    return (
        <Nav>
            <div className="container">
                <ul className=''>
                    <div className="menu">
                        <HiMenu className='menu-icon' onClick={(e)=>setToggle(!toggle)} />
                    </div>
                    <li>
                        <NavLink className="link" to="/" onClick={()=>setToggle(!toggle)}> Home</NavLink>
                    </li>
                    <li>
                        <Dropdown text="National" />
                    </li>
                    <li>
                        <NavLink className="link" to="/polities" onClick={()=>setToggle(!toggle)}> Politics</NavLink>
                    </li>
                    <li>
                    <li>
                        <NavLink className="link" to="/international" onClick={()=>setToggle(!toggle)}> International</NavLink>
                    </li>
                    </li>
                    <li>
                        <NavLink className="link" to="/business" onClick={()=>setToggle(!toggle)}> Business</NavLink>
                    </li>
                    <li>
                        <Dropdown text="Sport" />
                    </li>
                    <li>
                        <Dropdown text="Entertainment" />
                    </li>
                    <li>
                        <NavLink className="link" to="/technology" onClick={()=>setToggle(!toggle)}> Technology</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/courses" onClick={()=>setToggle(!toggle)}> Learn With Us</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/contact" onClick={()=>setToggle(!toggle)}> Contact Us</NavLink>
                    </li>
                </ul>
            </div>

        </Nav>
    )
}


export default Navbar;