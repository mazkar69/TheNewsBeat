import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Pagination = () => {
    return (
        <Box className='container'>
            <div className="pagination">
                <NavLink className="page_link" to="/">&laquo;</NavLink>
                <NavLink className="page_link" to="/">1</NavLink>
                <NavLink className="page_link" to="/">2</NavLink>
                <NavLink className="page_link" to="/">3</NavLink>
                <NavLink className="page_link" to="/">4</NavLink>
                <NavLink className="page_link" to="/">5</NavLink>
                <NavLink className="page_link" to="/">&raquo;</NavLink>
            </div>
        </Box>
    )
}


const Box = styled.div`
margin-top: 3rem !important;
.pagination{
    max-width: 400px;
    margin: auto;
    /* border: 1px solid red; */
    text-align: center;
}
.page_link{
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  font-size: .8rem;
  &:hover{
      background-color: #ddd;
  }
}

.active {
  background-color: dodgerblue;
  color: white;
}



`


export default Pagination