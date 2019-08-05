import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import '../components/Slider/style.css'
import '../pages/activities.css'


class Activities extends Component {

    state = {
        answers: [
           { id: 'fdsd', title: 'Why is the sky blue?' },
           { id: 'adsf', title: 'Who invented pizza?' },
           { id: 'afdsf', title: 'Is green tea overrated?' },
        ],
           displayAnswers: false
   }
    render() {
        return (
        <div className ="Wrapper">
            <Container>
                <Row>
                    <Col size="md-3">
                       <h1 className="titleQ">WHAT TYPE OF ACTIVITY SHOULD WE PLAN?</h1> 
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
            </Container>
         </div>
        )
    }
}






export default Activities