import React from 'react'
// import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const auth = localStorage.getItem("user");

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
        {auth ? (
          <div>
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZSk1vE5qU6JHiIIqaIfZF_kmKSMW4X08lgOZ_pHMdg&s"
              alt="logo"
            />
            <ul className='nav-ul'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">ContactUS</Link></li>
              <li><Link to="/update">Update Product</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link className='leftNav' onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
          </div>
        ) : (
          <ul className='logNav'>
          </ul>
        )}
      </div>
      
    );
}

export default Navbar
