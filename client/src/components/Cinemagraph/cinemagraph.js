import React from 'react'
import "./style.css";
import ipad from './ipad3.png'


const Cinemagraph = () => {
    return (
        <div className= "containerIpad">
      <img src={ipad} className="ipad" width="800" height="600" alt="ipad" />
      <div className="flx-embed">
      <div className="cineDiv">
        {/* <iframe src="https://images.squarespace-cdn.com/content/v1/51c748abe4b0c275d0aa86bf/1519577354952-08TNJ0KLBH5KUWUGU945/ke17ZwdGBToddI8pDm48kPQXnCelw_ZHZHJ0S_zUYJFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyNwX1LwSyygiAUvLkdvd06aTywZWHJZvTFXmZ1EWjDNXW-iOY3h16vp-WNE8aWbRI/Armani-Central-Park-6151.gif?format=2500w" frameBorder="0" allowFullScreen allow='autoplay'> */}
          {/* </iframe> */}
          </div>
          </div>
  
        </div>
      )
    }
  
  export default Cinemagraph;