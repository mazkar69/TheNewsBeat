import React from 'react'
import styled from 'styled-components'
import CourseCard from '../components/miscellaneous/CourseCard';
const Course = () => {
  return (
    <Div className='container'>

        <div className='title'>
            <h3>Our Course</h3>
        </div>
        
        <div className="course-area">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>

        </div>
    </Div>
  )
}

const Div = styled.div`


.course-area{

    display: grid;
    grid-template-columns: 1fr  1fr 1fr;
    gap: 2.5rem;
    margin: 1rem 0rem;
    padding: 1rem;
    
    

}

.title{
    margin-top: 2rem;
   h3{
    font-size: 1.5rem;
   }
}

@media (max-width:1100px) {
    .course-area{


    display: grid;
    grid-template-columns:1fr 1fr;
    gap: 2.5rem;
    margin: 1rem 0rem;
    padding: 1rem;
    
    }
    
}
@media (max-width:700px) {

    .course-area{
    max-width: 30rem;
    margin:auto !important;    
    align-items: center;

    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin: 1rem 0rem;
    padding: 1rem;
    
    }

    
}

`
export default Course