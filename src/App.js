import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Hair By Holt</title>
      </Helmet>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/showcase" element={<Showcase/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  );

  function NoMatch(props) {
    return (
      <h3>
          No match for <code>{props.location.pathname}</code>
      </h3>
    );
  }
}

export default App;
