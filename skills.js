import React from 'react';
import reactjs from "../images/reactjs.png";
import css from "../images/css.png";
import mongo from "../images/mongo.jpeg";
import node from "../images/node.png";
import html from "../images/html.png";
import ds from "../images/ds.jpeg";
import express from "../images/express.png";
import java from "../images/java.png";
import cpp from "../images/cpp.png";
import mysql from "../images/mysql.png";
import "./skills.css";
export const Skills=()=>{
  
  return(
      <>
      <h1 className='skill'>Skills</h1>
      <div className='skills'>
 
    <img src={reactjs} alt="react" />
    

  
  
    <img src={css} alt="css" />
 
    <img src={mongo} alt="Mongo" />
  
    <img src={node} alt="node" />
  
    <img src={html} alt="html" />
  
         
       
     
     </div>
     <div className='skills'>
  
    <img src={ds} alt="ds" />
  
  
    <img src={express} alt="express" />
 
    <img src={java} alt="java" />
  
    <img src={cpp} alt="cpp" />
  
    <img src={mysql} alt="mysql" />
  
         
       
     
     </div>
     </>
      
  );

}