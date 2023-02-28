import React from 'react'
import styled from 'styled-components'
import { MdLocationOn, MdPhone } from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { SiMinutemailer } from 'react-icons/si'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        sub:"",
        msg:""
    })

    const submitHandler = async(event) => {
        event.preventDefault();
        console.log(data);
        const url = "/api/contact"
        const result = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(data)

        })
        if(result.status === 200)
        {
            
            toast.success("Message Sent")
            setData({
                name:"",
                email:"",
                sub:"",
                msg:""
            })

        }
        else{
            toast.error("Something went wrong!")
        }

    }

    const inputHandler = (event)=>{
        const fieldName = event.target.name;
        const value = event.target.value;

        setData({...data,[fieldName]:value});
    }
    return (

        <Div className='container'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                className='tost'
            />


            <div className="main_box">
                <div className="form_container">

                    <h3>Contact Us</h3>
                    <form onSubmit={submitHandler} className='contact_form'>

                        <input type="text" name='name' value={data.name} placeholder='Name'  onChange={(e)=>{
                            inputHandler(e);
                        }}/>
                        <input type="email" name='email' value={data.email} placeholder='Email'  onChange={(e)=>{
                            inputHandler(e);
                        }}/>
                        <input type="text" name='sub' value={data.sub} placeholder='Subject'   onChange={(e)=>{
                            inputHandler(e);
                        }}/>
                        <textarea name="msg" id="msg" value={data.msg} placeholder='Message'  onChange={(e)=>{
                            inputHandler(e);
                        }}></textarea>
                        <button>Submit</button>
                    </form>
                </div>
                <div className="info_container">
                    <div className="top">
                        <h3>Contact information</h3>
                        <p>We're open for any suggestion or just to have a chat</p>
                    </div>
                    <div className="info">
                        <div className="box">
                            <MdLocationOn className='icon' />
                            <div className="address">
                                <p> <strong>Address : </strong>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>

                        </div>
                        <div className="box">
                            <MdPhone className='icon' />
                            <div className="address">
                                <p> <strong>Phone : </strong>+ 1235 2355 98</p>
                            </div>

                        </div>
                        <div className="box">
                            <SiMinutemailer className='icon' />
                            <div className="address">
                                <p> <strong>Email : </strong>info@yoursite.com</p>
                            </div>

                        </div>
                        <div className="box">
                            <GiEarthAmerica className='icon' />
                            <div className="address">
                                <p> <strong>Website : </strong>www.bhartiyaairways.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}


const Div = styled.div`
/* border: 1px solid red; */
.tost{
    font-size: 1rem;
    z-index: 99999999999999999999999;
}
.main_box{
    max-width: 60rem;
    margin: auto;
    box-shadow: 1px 1px 2px gray;
    display: grid;
    border-radius:1rem;
    overflow: hidden;
    grid-template-columns:1fr 1fr;
}
.form_container{
    display: grid;
    flex-direction: column;
    gap: 1.5rem;
    /* background: #272a34; */
    background-color: white;
    color: white;
    padding: 2rem;
    h3{
        
        font-size: 1.5rem;
    }
}
.contact_form{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input{
        background: none;
        color: gray;
        border: none;
        padding: .5rem;
        outline: none;
        font-size: 1.1rem;
        
        border-bottom:1px solid gray;
    }
    textarea{
        background: none;
        color: gray;
        border: none;
        padding: .5rem;
        min-height: 150px;
        resize: vertical;

        outline: none;
        font-size: 1.1rem;
        border-bottom:1px solid gray;
    }

    button{
        max-width: 200px;
        color: white;
        font-size: 1.2rem;
        background-color: #203d73;
        border: none;
        padding: .5rem;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #2b4980;
        }
    }

}

.info_container{
    background-color:#1c1e25;
    padding: 2rem;
    /* background-color: whitesmoke; */
    .top{
        display: flex;
        flex-direction:column;
        gap: 1rem;
    }
    h3{
        color: white;
        font-size: 1.2rem;
        font-weight: 300;
      
    }
    p{
        color: #666666;
        font-size: 1rem;
    }
    .info{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .box{
        display: flex;
        gap: 1.5rem;
        /* justify-content: center; */
        /* align-items: center; */
        padding: .5rem 1rem ;
        .icon{
            font-size: 2rem;
            color: white;
        }
        strong{
            color: white;
            font-size: 1rem;
        }
    }
}   


@media (max-width:700px) {

    .main_box{
    grid-template-columns:1fr;
    margin: 0rem .5rem;
}
}
`

export default Contact