import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



export default  function Footer(){
    return(
        <div className="footerContainer">
        
<a href="https://www.linkedin.com/in/marc-ouba-4544691b9/" class="fa fa-linkedin">
    <FontAwesomeIcon icon={faLinkedin} />
</a>
<a href="https://www.facebook.com/marc.ouba.58/" class="fa fa-facebook">
    <FontAwesomeIcon icon={faFacebook} />
</a>
<a href="https://www.instagram.com/marc_ouba/" class="fa fa-instagram">
    <FontAwesomeIcon icon={faInstagram} />
</a>

        
        </div>
    )
}