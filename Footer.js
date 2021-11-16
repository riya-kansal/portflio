import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    function  callMedia(){
    console.log("clicked");
}
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
  return (
      <>
      
    <div className='footer-container'>
  {   /*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'childs="Subscribe"/>
          </form>
        </div>
  </section>*/}
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Riya Kansal
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Riya © 2021</small>
          <div class='social-icons'>
            <div onClick={callMedia}>
            <span id = "icon" className="fa fa fa-facebook"></span>
            </div>
            
              <i className='fab fa-instagram fa-3x' onClick={() => openInNewTab('https://www.instagram.com/_riyakansal_/?r=nametag')} />
            
              <i className='fab fa-facebook fa-3x' onClick={() => openInNewTab('https://www.facebook.com/riya.kansal.37')} />
            
              <i className='fab fa-twitter fa-3x' onClick={() => alert("Account Deactivated")} />
            
              <i className='fab fa-linkedin fa-3x'onClick={() => openInNewTab('https://www.linkedin.com/in/riya-kansal-572667150')}  />
           
          </div>
        </div>
      </section>
    </div>
    </>
  );
}