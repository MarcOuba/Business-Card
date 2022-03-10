import reactDom from "react-dom";
import React from 'react';
import Body from "./body";
import Footer from "./footer";
import "./index.css";




export default function Page(){
   return(
      <div className="pageContainer">
         
      <Body />
      <Footer />
      </div>
   )
}
reactDom.render(<Page />,document.getElementById('root'));