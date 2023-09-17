import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg"
import "./Home.css";
import ProductCard from "./ProductCard.js";
const product = {
    name: "Blue Tshirt",
    images: [{url:"https://s7d1.scene7.com/is/image/zumiez/366935"}],
    price: "30USD",
    _id: "abc",
   
}
const Home = () =>{
    return(
            <Fragment>
                <div className="banner">
                    <p>Welcome to Ecommerce</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>

                    <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                    </a>
                </div>
                <h2 className="homeHeading">Featured Products</h2>

                <div className="container" id="container">
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                    <ProductCard product={product}/>
                </div>
            </Fragment>


    );
}

export default Home;