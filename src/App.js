import { useState } from 'react';
import './App.css';

import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Component/About/About';
import Program from './Component/Program/Program';
import Contact from './Component/Contact/Contact';
import OurSchool from './Component/OurSchool/OurSchool';
import Addmission from './Component/Admission/Admission';
import Academics from './Component/Academics/Academics';
import Research from './Component/Research/Research';
import Layout from './Component/Layout/Layout';
import Lifemanjira from './Component/Lifemanjira/Lifemanjira';
import Vision from './Component/About/vision';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='about' element ={<About/>}/>
    <Route path='vision' element={<Vision/>}/>
    <Route path='Program' element={<Program/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='school' element={<OurSchool/>}/>
    <Route path='admission' element={<Addmission/>}/>
    <Route path='academics' element={<Academics/>}/>
    <Route path='research' element={<Research/>}/>
    <Route path='layout' element={<Layout/>}/>
    <Route path='lifemanjira' element={<Lifemanjira/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      </div>
  );
}

export default App;