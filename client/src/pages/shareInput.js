import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import {Container, Row, Col} from '../components/Grid'
import { SubmitBtn } from '../components/Button/button'
import '../components/Slider/style.css'
import '../pages/activities.css'
import FormInput from '../components/FormInput';
import Forum from '../components/Forum'
import '../components/Forum'


class ShareInput extends Component {
    render() {
        return (
        <div className ="Wrapper">
        <Container>
            <Row>
                <Col size="md-3">
                   <h1 className="titleQ">SHARE SOMETHING WITH OTHER GUESTS?</h1> 
                   <FormInput />
                </Col>
                <Col size="md-2">
                    <h6 className="descriptionsRight">Kids</h6><br></br>
                    <h6 className="descriptionsRight">An hour</h6><br></br>
                    <h6 className="descriptionsRight">Indoors</h6><br></br>
                    <h6 className="descriptionsRight">Sloth</h6><br></br>
                    <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
                </Col>

                <Col size="md-5">
                    <p>Kid Friendly?</p>
                    <SliderBar />
                    <p>Duration?</p>
                    <SliderBar />
                    <p>Location?</p>
                    <SliderBar />
                    <p>Activity Level?</p>
                    <SliderBar />
                    <p>Price?</p>
                    <SliderBar />
                    <SubmitBtn />
                </Col>
                <Col size="md-2">
                    <h6 className="descriptionsLeft">Cocktails</h6><br></br>
                    <h6 className="descriptionsLeft">All day</h6><br></br>
                    <h6 className="descriptionsLeft">Outdoors</h6><br></br>
                    <h6 className="descriptionsLeft">Cheetah</h6><br></br>
                    <h6 className="descriptionsLeft">Living Large</h6><br></br>
                </Col>
    
            </Row>
            <Forum/>
        </Container>
     </div>
    )
}
}






export default ShareInput