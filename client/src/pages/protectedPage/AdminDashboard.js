import React from 'react'
import styled from 'styled-components'
import SideNav from './SideNav'
import { Outlet,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AdminDashboard = () => {

const navigate = useNavigate();

useEffect(()=>{
  const key = sessionStorage.getItem('x4976gtylCC');
  if(!key){
    navigate('/admin/login')
  }
},[navigate])

  return (
    <Div className="main">
      <SideNav />
      <Outlet />
    </Div>
  )
}

const Div = styled.div`

  min-width: 100vw;
  min-height: 100vh;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: min-content 1fr;
  overflow-y: hidden;


  .content{
    /* border: 1px solid darkblue; */
    max-height: 100vh;
    overflow-y: scroll;
    padding: 2rem;
    background-color: white;
}
`

export default AdminDashboard