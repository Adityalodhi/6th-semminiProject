import React from 'react'
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleCreateAccount = async () => {
      // Your create account logic here
      let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type' : 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));

        // if(result){
        //     navigate('/')
        // }
    }
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    },[])
  
    return (
      <div className="create-account-container">
        <div className="create-account-box">
          <h2>Create Account</h2>
          <div className="input-field">
            <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange} />
          </div>
          <div className="input-field">
            <input type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleCreateAccount}>Create Account</button>
          <div>
            <p>Already have an account? <a href="/login">Login here</a></p>
          </div>
        </div>
      </div>
  )
}

export default Signup
