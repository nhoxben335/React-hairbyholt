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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet"></link>
        <title>Hair By Holt</title>
      </Helmet>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/services" element={<Services/>}/> */}
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
