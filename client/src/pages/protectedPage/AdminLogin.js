import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  
  useEffect(()=>{
    const key = sessionStorage.getItem('x4976gtylCC')
    if(key){
      navigate('/admin/dashboard')
    }
  },[navigate])


  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const url = '/admin/login';

      const result = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, password })
      })

      if(result.status === 200)
      {
        const {token} = await result.json();
        // console.log(token)
        sessionStorage.setItem('x4976gtylCC',token);
        navigate("/admin/dashboard");

      }
      else{
        console.log("Some Error occur");
      }

    } catch (e) {
      console.log("Some errror occur");
    }
  }
  return (
    <Div className='container'>
      <div className="login-wrapper">
        <form onSubmit={loginHandler} className="form">
          <h2>Admin Login</h2>
          <div className="input-group">
            <input type="password" name="userId" id="loginUser" required
              value={userId}
              onChange={(e) => { setUserId(e.target.value) }}
            />
            <label htmlFor="loginUser">User Name</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id="loginPassword"
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <label htmlFor="loginPassword">Password</label>
          </div>
          <input type="submit" value="Login" className="submit-btn" />
        </form>
      </div>
    </Div>
  )
}

const Div = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.login-wrapper{
  width: 25rem;
}
.form {
  position: relative;
  width: 100%;
  
  max-width: 40rem;
  padding: 80px 40px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #fff;
 
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
}
.form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  transform: skewX(-26deg);
  transform-origin: bottom left;
  border-radius: 10px;
  pointer-events: none;
}
.form img {
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}
.form h2 {
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  color: white;
}
.form .input-group {
  position: relative;
}
.form .input-group input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: inherit;
}
.form .input-group label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.3s ease-out;
}
.form .input-group input:focus + label,
.form .input-group input:valid + label {
  transform: translateY(-18px);
  color: white;
  font-size: 0.8rem;
}
.submit-btn {
  display: block;
  margin-left: auto;
  border: none;
  outline: none;
  background: #ff652f;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.forgot-pw {
  color: inherit;
}

#forgot-pw {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 1;
  background: #fff;
  opacity: 0;
  transition: 0.6s;
}
#forgot-pw:target {
  height: 100%;
  opacity: 1;
}
.close {
  position: absolute;
  right: 1.5rem;
  top: 0.5rem;
  font-size: 2rem;
  font-weight: 900;
  text-decoration: none;
  color: inherit;
}


`

export default AdminLogin