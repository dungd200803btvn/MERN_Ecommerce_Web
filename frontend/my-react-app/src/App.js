import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js"
import { useEffect, useState } from "react";
import ProductDetails from "./component/Product/ProductDetails";

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
      <Route exact path="/product/:id" component={ProductDetails} />
      
      <Footer />
    </Router>
  
  );
}

export default App;
