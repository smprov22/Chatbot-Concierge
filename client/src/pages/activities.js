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
                    <Col size="md-12">
                        <h6 className="descriptionsLeft">Kids</h6>
                        <h6 className="descriptionsRight">Kids</h6>
                        <p>Kid Friendly?</p>
                        <SliderBar />
                    </Col> 
                </Row>  
                <Row> 
                    <Col size="md-12">
                            <h6 className="descriptionsLeft">Kids</h6>
                            <h6 className="descriptionsRight">All day</h6>
                            <p>Duration?</p>
                            <SliderBar />
                    </Col> 
                </Row> 
                <Row> 
                    <Col size="md-12">
                            <h6 className="descriptionsLeft">Kids</h6>
                            <h6 className="descriptionsRight">Outdoorsy</h6>
                            <p>Location?</p>
                            <SliderBar />
                    </Col> 
                </Row> 
                <Row> 
                    <Col size="md-12">
                            <h6 className="descriptionsLeft">Kids</h6>
                            <h6 className="descriptionsRight">Let's Get Physical</h6>
                            <p>Activity Level?</p>
                            <SliderBar />
                    </Col> 
                </Row> 
                <Row> 
                    <Col size="md-12">
                            <h6 className="descriptionsLeft">Kids</h6>
                            <h6 className="descriptionsRight">Stacks on Deck</h6>
                            <p>Price?</p>
                            <SliderBar />
                            
                    </Col> 
                </Row>     
           </Container>
        )
    }
}






export default Activities