
import React from "react";
import playStore from "../../../image/playstore.png";
import appStore from "../../../image/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
  
        <div className="midFooter">
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first priority</p>
  
          <p>Copyrights 2023 &copy; Le Chi Dung</p>
        </div>
  
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="http://instagram.com/meabhisingh">Instagram</a>
          <a href="http://youtube.com/6packprogramemr">Youtube</a>
          <a href="https://www.facebook.com/chidung.le.501?locale=vi_VN">Facebook</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;