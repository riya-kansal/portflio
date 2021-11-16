import React from 'react';
import { Button } from './button';
import "./herosection.css";
import "../App.css";
import v1 from "../video/.v1.mp4.icloud"
function HeroSection(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) 
        newWindow.opener = null
      }
    return(
        <div className ="hero-container">
        <video src={v1} autoPlay loop muted/>
        <h1>I am Riya Kansal</h1>
        <p>For over a year, I have lived in home; hiding in the room, alone in the world. Until now.
            </p><p>
             I am a developer. And this is my story...HAHAHHA..LOL..(tvd fan here)</p>
         <div className="hero-btns"  >
             <Button className="btns" 
             buttonStyle="btn--outline" 
             buttonSize="btn--large"
                childs= "Button 1">
                 </Button>
       
             <Button className="btns" 
             buttonStyle="btn--primary" 
             buttonSize="btn--large"
                 childs="button 2"
                 > 
                
                 </Button>
                 <br/><br/>
                 <br/><br/>
                 
                 <br/><br/>
                 

                 <center>
                 <a  href="#!" role="button"
  ><i class="fab fa-facebook-f fa-3x"onClick={() => openInNewTab('https://www.facebook.com/riya.kansal.37')} ></i
></a>


<a  href="#!" role="button"
  ><i class="fab fa-twitter fa-3x" onClick={() => alert("Account Deactivated")}></i
></a>


<a  href="#!" role="button"
  ><i class="fab fa-linkedin fa-3x" onClick={() => openInNewTab('https://www.linkedin.com/in/riya-kansal-572667150')}></i
></a>


<a  href="#!" role="button"
  ><i class="fab fa-instagram fa-3x" onClick={() => openInNewTab('https://www.instagram.com/_riyakansal_/?r=nametag')}></i></a> 
       </center> </div> 
    </div> 
    );
    
}
export default  HeroSection;