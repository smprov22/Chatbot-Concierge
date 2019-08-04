import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import {Container, Row, Col} from '../components/Grid'
import '../components/Slider/style.css'
import '../pages/activities.css'


class Activities extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-3">
                        <h6 className="descriptionsLeft">Kids</h6>
                    </Col> 
                    
                    <Col size="md-5">
                        <p>Kid Friendly?</p>
                        <SliderBar />
                    </Col> 
                    <Col size="md-3">
                        <h6 className="descriptionsRight">Cocktails</h6>
                    </Col> 
                </Row>  
                 <Row>
                    <Col size="md-3">
                        <h6 className="descriptionsLeft">An hour</h6>
                    </Col> 
                    
                    <Col size="md-5">
                        <p>Duration?</p>
                        <SliderBar />
                    </Col> 
                    <Col size="md-3">
                        <h6 className="descriptionsRight">All day</h6>
                    </Col> 
                </Row>  
                <Row>
                    <Col size="md-3">
                        <h6 className="descriptionsLeft">Outdoors</h6>
                    </Col> 
                    
                    <Col size="md-5">
                        <p>Location?</p>
                        <SliderBar />
                    </Col> 
                    <Col size="md-3">
                        <h6 className="descriptionsRight">Indoors</h6>
                    </Col> 
                </Row>
                <Row>
                    <Col size="md-3">
                        <h6 className="descriptionsLeft">Sloth</h6>
                    </Col> 
                    
                    <Col size="md-5">
                        <p>Activity Level?</p>
                        <SliderBar />
                    </Col> 
                    <Col size="md-3">
                        <h6 className="descriptionsRight">Cheetah</h6>
                    </Col> 
                </Row> 
                <Row>
                    <Col size="md-3">
                        <h6 className="descriptionsLeft">Budget Friendly</h6>
                    </Col> 
                    
                    <Col size="md-5">
                        <p>Price?</p>
                        <SliderBar />
                    </Col> 
                    <Col size="md-3">
                        <h6 className="descriptionsRight">Living Large</h6>
                    </Col> 
                </Row>     
              
           </Container>
        )
    }
}






export default Activities