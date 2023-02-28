import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/profile.png'
const CommentBox = ({comment}) => {
    const formatDate = (str)=>{
        const d = new Date(str);
        // console.log(d)  //This is the object not string
        return d.toString().slice(4,21);
      }
    return (
        <Div className="comment">
        
            <div className="comment-box">
                <img src={avatar} alt="avatar" />
                <div className="data">
                    <div className="info">
                        <span className='name'>{comment.name}</span>
                        <span className='date'>{formatDate(comment.publishedAt)}</span>
                    </div>
                    <p className='comment_msg'>
                       {comment.msg}
                    </p>
                </div>
            </div>

        </Div>


    )
}

const Div = styled.div`


.comment-box{
    display: flex;
    
    align-items: center;
    /* justify-content: center; */
    gap: 1rem;
    img{
        width: 10%;
    }
    .data{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
        .info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .8rem;

            .name{
                color: rgb(116, 116, 116);
            }
            .date{
                color: rgb(116, 116, 116);
                
            }
        }
        p{
            background-color: white;
            padding: 8px;
            border-radius: 5px;
        }
    }

}

`


export default CommentBox