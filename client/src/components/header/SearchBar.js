import React from 'react'
import styled from 'styled-components';
import {MdOutlineCancel} from 'react-icons/md'
import { IoMdRocket } from 'react-icons/io';
import { useGlobalContext } from '../../context';
const SearchBar = () => {
    const {setShowSearch} = useGlobalContext();
    return (
        <Div>
            <div className="search-container">
                <MdOutlineCancel className='icon' onClick={()=>setShowSearch(false)}/>
                <input type="search"  placeholder='Place Category' onBlur={()=>setShowSearch(false)}/>
                <button>Go</button>
            </div>
        </Div>
    )
}

export default SearchBar;
const Div = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
top: 0px;
left: 0px;
right: 0px;

display: flex;
justify-content: center ;


.search-container{
    position: relative;
    background-color: white;
    opacity: 11;
    z-index: 123;
    height: 5rem;
    max-width: 25rem;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(50px);
    box-shadow: 0 0 10px  1000px rgba(0, 0, 0, .5);
    padding:3rem;
    
    input{
        outline: none;
        border: 1px solid gray;
        font-size: 1rem;
        padding: .5rem 1rem;
        border-radius: 5px 0px 0px 5px ;
        /* width: 80%; */
    }
    button{
        border: none;
        background-color :#57bd84;
        border: 1px solid gray;
        border-left: none;
        font-size: 1rem;
        padding: .5rem 1rem;
        border-radius: 0px 5px 5px 0px;
    }
    .icon{
        position:absolute;
        color: black;
        right: 2px;
        top: 2px;
        font-size: 20px;
    }

    
}



`
