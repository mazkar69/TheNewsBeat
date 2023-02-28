
import styled from 'styled-components';
import TabNav from '../components/miscellaneous/TabNav';
import { FaUserAlt } from 'react-icons/fa'
import { MdAccessTimeFilled } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import CommentBox from '../components/miscellaneous/CommentBox';
import { useEffect, useState } from 'react';
import {useGlobalContext} from '../context';

const NewsDescription = () => {
    const { tag, slug } = useParams();
    const [fullNews, setFullNews] = useState({});
    // const [newsId, setNewsId] = useState(_id);
    const [comments, setComments] = useState([]);
    const [flag, setFlag] = useState(true);      //flag is the depencies for fetching comment. Once  the user send the new commet we make this change this flad the then all the comment will fethched again bcoz this is the dependencis.
    const {setProgress} = useGlobalContext();

    //State for comment form
    const [data, setData] = useState({
        name: "",
        email: "",
        msg: ""
    })



    //This useEffect will fetch the single news with the id
    useEffect(() => {


        const fetchData = async () => {
            setProgress(10);
            const url = `/api/${tag}/${slug}`;

            const response = await fetch(url);
            setProgress(50);
            const news = await response.json()
            setProgress(90);
            setFullNews(news);
            setProgress(100);


        }
        fetchData();

    }, [slug])

    //This use Effect will fetch all the comment from the news
    useEffect(() => {
        const url = `/api/comment/get`
        const fetchComment = async () => {

            const comments = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({slug }),
            })

            //After finind all the comments of a news. Here i am storing in the state
            // console.log(await comments.json());
            setComments(await comments.json());

        }
        fetchComment();
    }, [slug, flag]);


    //To get the for value in the state.
    const commentformHandler = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }


    //When comment form will submit 
    const submitHandler = async (event) => {
        event.preventDefault();
        // console.log(data);
        // const url = "api/comment/upload";
        const url = "/api/comment/upload";
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, slug }),
        })
        // console.log(result.status)
        if (result.status === 200) {
            setData({
                name: "",
                email: "",
                msg: ""
            });
            setFlag(!flag);
            // alert("Success Comment posted")

        }
        else {
            alert("Comment not posted")
        }

    }

    const formatDate = (str)=>{
        const d = new Date(str);
        // console.log(d)  //This is the object not string
        return d.toString().slice(4,21);
      }
    return (
        <Section>
            <div className="container">

                <div className="news_description box">
                    <h2 className='title'>{fullNews.title}</h2>
                    <div className="info">
                        <img src={logo} alt="logo" />
                        <p className='details'> <FaUserAlt />{fullNews.author}  <MdAccessTimeFilled /> <span>{formatDate(fullNews.publishedAt)}</span></p>

                    </div>
                    <img className='img' src={fullNews.urlToImage} alt="" />
                    <div className="description">
                        <p className='para_description' dangerouslySetInnerHTML={{__html: fullNews.content}}>
                            {/* {fullNews.content} */}
                        </p>
                        


                    </div>


                </div>
                <TabNav />

            </div>

            <div className='comment-form'>
                <h3>Leave An Opnion</h3>

                <form onSubmit={submitHandler}>
                    <input type="text" required placeholder='Full Name' value={data.name} name="name" onChange={(e) => { commentformHandler(e); }} />
                    <input type="emial" required placeholder='Email' name="email" value={data.email} onChange={(e) => { commentformHandler(e); }} />
                    <textarea name="msg" required placeholder='Tell us about your opinion' value={data.msg} onChange={(e) => { commentformHandler(e); }}>
                    </textarea>
                    <button className='btn' type='submit'>Comment</button>
                </form>

                <p>Comments({comments.length})</p>
                {
                    comments.map((com) => {
                        return <CommentBox key={com._id} comment={com}></CommentBox>
                    })
                }
                {/* <CommentBox/>
                <CommentBox/>
                <CommentBox/> */}

            </div>

        </Section>
    )
}

const Section = styled.section`


margin: 0rem .5rem;
max-width: 100%;
padding: 2rem 0rem;

.container{
  /* max-width: 80rem !important; */
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 2rem;

}

.box{
    padding: 1rem;
}
.details{
    font-size: 1rem !important;
}
.info{
    display: flex;
    justify-content: space-between;
    align-items: end;
    img{
        width: 22%;
    }
    p{
        display: flex;
        gap: .5rem;
    }
}
.news_description{
    border:1px solid  rgb(221, 221, 221);
    background-color: white;
    display: flex;
    flex-direction:column;
    gap: 2rem;
}
.title{
    font-size: 2rem;
}

.img{
    width: 100%;
    height: auto;
}
.description{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.para_description{
    font-size: 1.2rem;
    line-height: 1.5;
    word-spacing: 2px;
    
}
.comment-form{
    max-width: 50rem;
    margin: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input{
        
        padding: 1rem;
        font-size: 1rem;
        outline: none;
        border: 1px solid rgb(116, 116, 116);
        color: rgb(116, 116, 116);
    }
    textarea{
        color: rgb(116, 116, 116);
        height: 200px;
        outline: none;
        font-size: 1rem;
        padding: 1rem;
        resize: none;
    }
    
    form{
        min-width: 100% ;
        margin: auto;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
    
        textarea{
            grid-column: 1/-1;
        }
        .btn{
        max-width:200px;
        background-color:rgb(81 41 243);
        color: white;
        padding: .5rem;
        font-size: 1.2rem;
        border: none;
        cursor: pointer;


    }
    }

}


@media (max-width:1100px) {

    .container{
  /* max-width: 80rem !important; */
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;

}
.news_description{
    border:1px solid  rgb(221, 221, 221);
    background-color: white;
    display: flex;
    flex-direction:column;
    gap: 1rem;
    margin: 0rem .5rem;
}

.title{
    font-size: 1.5rem;
}
.para_description{
font-size: 1rem;
}


}
@media (max-width:800px) {
padding: 1rem 0rem;
.container{
  max-width: 40rem !important;
  grid-template-columns:1fr;
  gap: 1.2rem;

}
.details{
    font-size: 12px !important;
}


.title{
    font-size: 1.5rem;
}
.para_description{
font-size: 1rem;
}

.comment-form{

    input{
        font-size: 15px;
    }
    textarea{
        font-size: 15px;
    }

    form{

        grid-template-columns:1fr;
        textarea{
            grid-column: 1/-1;
        }
    }

}

}




`

export default NewsDescription