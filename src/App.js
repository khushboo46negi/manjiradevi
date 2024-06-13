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
import Engineer from './Component/Engineer/Engineer';
import School1 from './Component/Engineer/School1';
import Mechanic from './Component/Engineer/Mechanic';
import Cse from './Component/Engineer/Cse';
import School2 from './Component/Science/School2';

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
    <Route path='engineer' element={<Engineer/>}/>
    <Route path='school1' element={<School1/>}/>
    <Route path='mechanic' element={<Mechanic/>}/>
    <Route path='cse' element={<Cse/>}/>
    <Route path='school2' element={<School2/>}/>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
      </div>
  );
}

export default App;