import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/Content-Writer.jpg'
const CourseCard = () => {
    return (
        <Div>
            <img className="img" src={img1} alt="" />
            <h4>TV Journalism</h4>
            <div className="details">
                <div className="info">
                    <div className="mini-section">
                        <h6>Eligibility</h6>
                        <span>Undergraduate</span>
                    </div>
                    <div className="mini-section">
                         <h6>Course ID</h6>
                         <span>TVJC</span>

                    </div>
    
                    <div className="mini-section">
                        <h6>Duration</h6>
                        <span>One year</span>
                    </div>

                </div>

                <a className='btn' href="">Apply Now</a>
            </div>

        </Div>
    )
}


const Div = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
img{
    width: 100%;
    height: auto;
    border-radius: .5rem;
}
.details{
    display: flex;
    flex-direction: column;

}
.info{
    display: flex;
    justify-content: space-between;



    .mini-section{
        padding: 12px;
        /* border: 1px solid pink; */

        h6{
            font-size: 1rem;
            color: rgb(69 69 69);
        }
        span{
            font-size: 15px;
        }
        &:nth-child(2){
            border-left: 1px solid black;
            border-right: 1px solid black;
            
        }
    }


}
.btn{
    color: white;
    text-align: center;
    padding: 8px;
    border-radius: 5px;
    background-color:rgb(101, 26, 26);

    &:hover{
        background-color:rgb(58, 18, 18);
    }
}
`

export default CourseCard