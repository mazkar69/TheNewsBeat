import React from 'react'
import logo from '../../images/logo2.png'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';

const SideNav = () => {
    const navigate = useNavigate();
    const LogoutHandler = () => {

        sessionStorage.clear('x4976gtylCC');
        navigate('/admin/login')

    }
    return (
        <Div className="sidenav">
            <div className="logo">
                <img src={logo} alt="" />
                {/* <!-- <h2>Dashboard</h2> --> */}

            </div>
            <div className="general">
                <span className="title">General</span>
                <div className="links">
                    <NavLink to="allPost">All Post</NavLink>
                    <NavLink to="createPost">Add Post</NavLink>
                    {/* <a href="/">Update</a><a href="/">Delete</a> */}
                </div>
            </div>
            <div className="general">
                <span className="title">AddOn</span>
                <div className="links">
                    <NavLink to="/">Inbox</NavLink>
                    <NavLink to="/">Comments</NavLink>
                    <NavLink to="/">Add Category</NavLink>
                </div>
            </div>
            <div className="logout">
                <BiLogOut className="icon" title='Logout' onClick={LogoutHandler} />
            </div>

        </Div>
    )
}


const Div = styled.div`

    width: 300px;
    padding: 1rem;
    /* border: 1px solid green; */
    /* overflow-y: scroll; */
    /* border-right: 1px solid gray; */
    background-color: white;
    box-shadow: 1px 1px 10px gray;
    /* background-color: rgb(248,248,255); */
    /* background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); */
    /* background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%); */

    max-height: 100vh;
    position: relative;

.logout{
    position: absolute;
    left: 10%;
    bottom: 2%;
    cursor: pointer;
    .icon{
        font-size: 2rem;
        color: blueviolet;
    }
}


.sidenav::-webkit-scrollbar {
    width: 4px;
    border-radius: 2rem;
  }

  .sidenav::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.3);
  }

  .sidenav::-webkit-scrollbar-track {
    background-color: gray;
  }

/* logo */
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid gray;

}
.logo img{
    width: 60%;
}
.btn{
    display: flex;
    gap: 1.5rem;
}
.logo button{
    border: 2px solid black;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: .5rem;
    transition:all .2s linear;
 

}

.logo button:hover{
    background:black;
    color: white;

}

.title{
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin: 1rem;

}
.general{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    
}
.links{
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.links a{
    font-size: 1.1rem;
    box-shadow: 1px 1px 5px gray;
    padding: .5rem 1rem;
    text-align: center;
    color: black;
    background-color: white;
    border-radius: 0rem;

}
.links a:hover{
    background-color: darkcyan;
    color: white;

}




`
export default SideNav