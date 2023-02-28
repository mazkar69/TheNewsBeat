import React from 'react'
import Navbar2 from './Navbar2'
import Slogan2 from './Slogan2'
import styled from 'styled-components'
const Header = () => {
  return (
    <Box>
        <Slogan2/>
        <Navbar2/>
    </Box>
  )
}

const Box = styled.div`
  background-color: rgb(248,248,255);
position: sticky;
top: 0px;
left: 0px;
right: 0px;
width: 100%;
z-index: 99999999;

`
export default Header