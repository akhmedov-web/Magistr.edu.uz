import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/src/modal";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Account from "./pages/Account"
import FullInfo from './components/Account/FullIinfo';
import Application from './pages/Application'

export default function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <div className="row"><Navbar/></div>
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/account" element={<Account/>}>
      <Route path="" element={<Application/>}></Route>
      <Route path="full-info" element={<FullInfo/>}></Route>
      </Route>
      
    </Routes>
    <div className="row"><Footer/></div>
    </BrowserRouter>
    </div>
  )
}
