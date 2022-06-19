
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//import Particles from "react-particles-js";
import Navbar from './components/Navbar';
//import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Motivation from './components/Motivation';
import Footer from "./components/Footer";



import Header from "./components/Header";

function App() {
  return (
   <>
    
    {/*<Particles
    params={{particles:
    {Number:{ 
      value:30,
      density:{
        enable: true,
        value_area:900
    }
  }
}
}
}
/>*/}
    <Navbar/>
     <Home/>
    <Header/>
    <About/>
    <Experience/>
    <Motivation/>
    <Footer/>
    </>
    );
}

export default App;
