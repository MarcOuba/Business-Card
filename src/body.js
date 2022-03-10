import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactUs from "./contact";


export default  function Body(){
   
    return(
       <div>
        <div className="HeaderContainer">
            
            <div>
            <img src={require('./marc.jpeg')} alt="profile pict" />
        <h2 > Marc Ouba</h2>
        <h5 className="frontend">Senior Frontend Developer</h5> 
        <small>MarcOuba.website</small>
       <button class="btn_email" onClick={ContactMe}><span class="emailLogo">&#9993;</span>Email</button>
        
        </div>
        </div>
       
        <main>
        <h3>About:</h3>
<p className="aboutText">Hello, i am from lebanon and i am a senior front-end engineer.
    I am studying computer science in the American University of Technology.
     I speak fluent english ,fluent french and fluent arabic.
      I need 1 more year to finish my BS degree and i am meanwhile
       looking for a job to empower my CV and make a living.</p>
       <h3>Languages:</h3>
       <ul className="languages">
     <li>Html</li>
     <li>Css</li>        
     <li>JavaScript</li> 
     <li>C#</li>   
     <li>(Library) React.js</li>
     <li>(Version Control System) Git</li>
     <li>And more are coming up because i learn fast :)</li>  

       </ul>
        </main>
        </div>
    )
}
const ContactMe=()=>{reactDom.render(
    <BrowserRouter><ContactUs /></BrowserRouter>,document.getElementById("root"))
}