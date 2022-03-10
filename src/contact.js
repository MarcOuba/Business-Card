
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Page from ".";
import emailjs from "emailjs-com"





export default function ContactUs(){
  
    function sendEmail (e) {
      e.preventDefault();
  
      emailjs.sendForm('service_30tkl2a', 'template_rk2h1gp', e.target,'user_aZTb8OZFySMJp4OKHSjPz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
   document.getElementById("thankYou").style.visibility="visible";
    }
  
    return(
        <div className="ContactPage">
        <div>
            <div>
            <form onSubmit={sendEmail}>
                    <div>
                        <div >
                            <input type="text" placeholder="Name" name="name"/>
                        </div>
                        <div >
                            <input type="email" placeholder="Email Address" name="email"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" name="subject"/>
                        </div>
                        <div >
                            <textarea id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div >
                            <input class="btn_sendMessage" type="submit"  value="Send Message"></input>
                        </div>
                    </div>
           
                  <h2 id="thankYou">Email sent. Thank You!</h2>
                 


                </form>
            </div>
        </div>

        <button className="btn_returnHome" onClick={ReturnHome}>Home Page</button>
        </div>
    )
    
  }

const ReturnHome=()=>{
    reactDom.render(<BrowserRouter><Page /></BrowserRouter>,document.getElementById("root"))
}