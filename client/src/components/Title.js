import React from 'react'
import styled from 'styled-components';

//imorting icon
// import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const Title = ({title}) => {
    return (
        <Box className='container'>
            <h3>{title}</h3>
            {/* <div className="nav_btn">
                <div className="backword">
                    <AiOutlineLeft />
                </div>
                <div className="forword">
                    <AiOutlineRight />
                </div>
            </div> */}
        </Box>
    )
}

const Box = styled.section`
background-color: white;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
margin: 2rem auto;  


.nav_btn{
display: flex;
align-items: center;
gap: .5rem;
justify-content: space-between;
}

.backword{
    border: 1px solid gray;
    padding: 5px;
    cursor: pointer;
}

.forword{
    border: 1px solid gray;
    padding: 5px;
    cursor: pointer;


}

`
export default Title;