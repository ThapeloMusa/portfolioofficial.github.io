import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (
   <div className="header-wraper">
    <div className="main-info">
        {/*<h1> Hi! I am Thapelo Nghayo, a software engineer enthusiast</h1>*/}
        <Typed
         className="typed-text"
         strings={["Hi! I am Thapelo Nghayo","Welcome To My Portfolio","","Feel Free To nevigate Through It", "I develop websites for startups companies","","Hit the button below to know more about me"]}
         typeSpeed={60}
         backSpeed={60}
         loop
        />
        <a href="#about" className="btn-main-offer">Learn More About me</a>
    </div>
   </div>
  )
}

export default Header;
