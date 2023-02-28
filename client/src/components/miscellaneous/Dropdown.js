import React from 'react'
import styled from 'styled-components'
import {MdArrowDropDown} from 'react-icons/md'

const Dropdown = ({ text }) => {
    return (
        <Span className='dropdown'>
            <button className="dropbtn">{text}<MdArrowDropDown className='icon'/></button>
            <div className="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
            </div>
        </Span>
    )
}

const Span = styled.span`

position: relative;
display: inline-block;


.dropbtn {

background: none;
color:white;
font-size: 16px;
border: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 1.3rem;
  /* background-color: #f1f1f1; */
  background-color:  rgb(28, 24, 24);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10000;
  transition: all 2s linear;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color:  rgb(46, 12, 12);}

&:hover .dropdown-content {display: block;}




`

export default Dropdown