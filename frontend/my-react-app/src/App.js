import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js"
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []); // Chú ý rằng useEffect nằm trong component App
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  
  );
}

export default App;
