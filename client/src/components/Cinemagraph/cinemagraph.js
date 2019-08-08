import React from 'react'
import "./style.css";
import ipad from './ipad3.png'


const Cinemagraph = () => {
    return (
        <div className= "containerIpad">
      <img src={ipad} className="ipad" width="800" height="600" alt="ipad" />
      <div className="flx-embed">
      <div className="cineDiv">
        <iframe src="https://images.squarespace-cdn.com/content/v1/51c748abe4b0c275d0aa86bf/1519645783264-ECNCAJZKVLNZAP82HFIN/ke17ZwdGBToddI8pDm48kPJxGQsohBSs8bp2ELvWmc5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHQyw57o5sqAaic1K5Jcyld6VNOq7nAsKAchA6sloAmg/dirk-980.gif" frameborder="0" allowfullscreen allow='autoplay'>
          </iframe>
          </div>
          </div>
  
        </div>
      )
    }
  
  export default Cinemagraph;