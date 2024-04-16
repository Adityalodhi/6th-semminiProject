// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Comp/Login';
import Signup from './Comp/Signup';
import Home from './Comp/Home';
import PrivateComponent from './Comp/PrivateComponent';
import Navbar from './Comp/Navbar';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={< PrivateComponent/>} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
