import React from 'react'
import "./style.css";
import ipad from './ipad3.png'


const Cinemagraph = () => {
    return (
        <div className= "containerIpad">
      <img src={ipad} className="ipad" alt="ipad" />
      <div className="flx-embed">
      <div className="cineDiv">
        <img src="https://joetowey.files.wordpress.com/2015/07/ferry-takeoff-landing.gif" frameBorder="0" allowFullScreen allow='autoplay' id="cinemagraph">
          </img> 
          </div>
          </div>
  
        // </div>
      )
    }
  
  export default Cinemagraph;