import React from 'react';
import "../../App.css";
import "./contact.css";
import gif from "../../images/gif.gif";
import emailjs,{ init }  from 'emailjs-com';


export default  function Contact()
            {   
               
             
              function sendEmail(e) {
                e.preventDefault();
                (function () {init("user_q9pQK8hWU7TUYzSeDJm7K");})();
                emailjs.sendForm('service_g5xlwoo', 'template_c4f11th', e.target,"user_q9pQK8hWU7TUYzSeDJm7K")
                  .then((result) => {
                      console.log(result.text);
                      alert("Message sent");
                  }, (error) => {
                      console.log(error.text);
                      alert("Message not sent");
                  });
              }
     return(
        <div> 
        <div className="container">
  <div >
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src={gif} alt="contact"/>
    </div>
    <div className="column">
      <form onSubmit={sendEmail}>
        <label >First Name</label>
        <input type="text" id="fname" name="user_name" placeholder="Your name.."/>
        <label >Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label >Email</label>
        <input type="text" id="email" name="user_email" placeholder="Your email.."/>
        <label >Subject</label>
        <textarea id="subject" name="message" placeholder="Write something.."></textarea>
        <input  type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
        </div> 
     );
}
