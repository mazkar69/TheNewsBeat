import React from 'react'
import styled from 'styled-components';

const Copyright = () => {
    return (
        <Box className='container'>

            <p>© Copyright 2022, All Rights Reserved</p>
            <span><strong>Designed By Bhartiya Tech It SolutionsⒿ</strong></span>


        </Box>
    )
}

const Box = styled.div`
padding: 2rem 0rem 2rem 0rem;
display: flex;

justify-content: space-between;

span{
    font-size: .8rem;
}


@media (max-width:600px) {
    flex-direction: column;
    align-items: center;
    justify-content: cente;
    gap: .8rem;
    
}

`

export default Copyright;