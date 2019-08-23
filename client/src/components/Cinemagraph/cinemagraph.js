import React from 'react'
import "./style.css";
import ipad from './ipad3.png'
import {Row, Col} from "../Grid/index"


const Cinemagraph = () => {
    return (
      <Row className="wrapAll">
        <Col size="12">
        <div className= "containerIpad">
          <div className="imgDiv">
          <img src={ipad} className="ipad " alt="ipad" />
          </div>
              <div className="cineDiv">
                 <img src="https://joetowey.files.wordpress.com/2015/07/ferry-takeoff-landing.gif" frameBorder="0" allowFullScreen allow='autoplay'className="" id="cinemagraph" alt="cine">
                </img> 
          </div>
        </div>
        </Col>
      </Row>
      )
    }
  
  export default Cinemagraph;