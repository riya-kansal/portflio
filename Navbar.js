import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './button';
import "./Navbar.css";
function Navbar ()
{
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>  setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton=()=>
    {
        if(window.innerWidth<=960){
            setButton(false);
        }
        else
        {
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton);
    
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                 <Link to="/" className="navbar_logo">
                     Riya Kansal
                     <i className="fab fa-typo3"/>
                     </Link>  
                     <div className="menu-icon" onClick={handleClick}>
                         <i className={click?"fas fa-times":"fas fa-bars"}/>
                    </div>
                    <ul className={click?"nav-menu active":"nav-menu"}>
                        <li className="nav-items">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/work' className="nav-links" onClick={closeMobileMenu}>
                                Work
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                               About
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                        
                        </li>
                        </ul>
{/*{button && <Button buttonStyle='btn--primary'childs="Sign Up" ></Button>}*/}
               </div>
           </nav>
        </>
    );
    
}
export default Navbar;