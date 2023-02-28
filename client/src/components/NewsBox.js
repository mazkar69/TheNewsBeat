import React from 'react'
import styled from 'styled-components'
const NewsBox = ({children}) => {
  return (
    <Box className="container">
        {children}        
    </Box>
  )
}

//By default some style appy in NewsBox because it have container class. so max width is also set
const Box = styled.section`
/* border: 1px solid red; */
position: relative;
background: white;
border-radius: 8px;
padding: 1rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2.5rem;
margin: 2rem auto;


@media (max-width:700px) {
  grid-template-columns: 1fr 1fr;
  
}

@media (max-width:450px) {
  grid-template-columns: 1fr;
  
}



`

export default NewsBox; 