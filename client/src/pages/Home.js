import React from 'react'
import Hero from '../components/hero/Hero'
import TrandingNews from '../components/TrandingNews'
import Entertainment from '../components/Entertainment'
import NationalNews from '../components/NationalNews'
import InternationalNews from '../components/InternationalNews'
import BreakingNews from '../components/header/BreakingNews'


const Home = () => {

  return (
    <>

    <BreakingNews/>
    <Hero />

      <TrandingNews />

      <Entertainment />

      <NationalNews />

      <InternationalNews />


    </>
  )
}

export default Home