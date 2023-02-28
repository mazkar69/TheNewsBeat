import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { CommonLink } from '../../styles/components'
import { AiOutlineHome } from 'react-icons/ai'
import LoadingBar from 'react-top-loading-bar'
import { useGlobalContext } from '../../context'

const Navbar2 = () => {
  const { progress } = useGlobalContext();
  return (
    <Section>

      <nav className='container'>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={2}
        // onLoaderFinished={() => setProgress(0)}
        />
        <CommonLink to="/"><AiOutlineHome className='icon' /></CommonLink>
        <ul>
          <li><NavLink className="navlink" to="/national"> National</NavLink></li>
          <li><NavLink className="navlink" to="/politics"> Politics</NavLink></li>
          <li><NavLink className="navlink" to="/crime"> Crime</NavLink></li>
          <li><NavLink className="navlink" to="/business"> Business</NavLink></li>
          <li><NavLink className="navlink" to="/education"> Education</NavLink></li>
          <li><NavLink className="navlink" to="/entertainment"> Entertainment</NavLink></li>
          <li><NavLink className="navlink" to="/sport"> Sport</NavLink></li>
          <li><NavLink className="navlink" to="/cities"> Delhi/NCR</NavLink></li>
          <li><NavLink className="navlink" to="/world"> World</NavLink></li>
          <li><NavLink className="navlink" to="/tech">Tech</NavLink></li>
          <li><NavLink className="navlink" to="/stroies"> Stroies</NavLink></li>
          <li><NavLink className="navlink" to="/contact"> Contact</NavLink></li>
        </ul>
      </nav>


    </Section>
  )
}



const Section = styled.section`
margin-bottom: 1rem;
background-color: rgb(248,248,255);

padding: 5px 0px;
/* -webkit-box-shadow: 0px 2px 5px 0px rgba(148,148,148,1);
-moz-box-shadow: 0px 2px 5px 0px rgba(148,148,148,1); */
box-shadow: 0px 2px 4px 0px rgba(148,148,148,1);

.container{
  padding-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.icon{
  font-size: 2.3rem !important;
  padding: 0rem 8px;
  cursor: pointer;

}

ul{
  display: flex;
  gap: 1rem;
  padding:  0px 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
}
}

li{
  font-size: 13px;
  font-weight: bold;
  padding: 0rem .5rem;
  border-left: 1px solid rgb(189, 189, 189);
  .navlink{
    color: black;
    &:hover{
      text-decoration: underline;
    }
  }

}


.active{
  /* text-decoration: underline; */
  color: blue !important;
}

@media (max-width:700px) {
  padding: 0rem 0rem;
  .icon{
    font-size:2rem;
  }
  
}

`

export default Navbar2