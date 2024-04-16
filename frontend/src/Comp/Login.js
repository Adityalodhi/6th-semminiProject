import React from 'react'
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')
    }
    else {
      alert("please Enter Connected details");
    }
  };
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
  },[])

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-field">
          <input type="text" placeholder="Enter email" value={email} onChange={handleemailChange} />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLogin}>Login</button>
        <div>
          <p>Don't have an account? <a href="/signup">Create one</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login
