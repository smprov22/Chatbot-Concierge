import React, { Component } from '../../node_modules/react'
// import { Redirect } from '../../node_modules/react-router-dom'
// import axios from '../../node_modules/axios'
import API from '../utils/api'
// import ReactDOM from '../../node_modules/react-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { Container, Row, Col } from '../components/Grid'
import { SubmitBtn } from '../components/Button/button'
import '../components/Slider/style.css'
import '../pages/activities.css'
import FormInput from '../components/FormInput';
import Forum from '../components/Forum'
import '../components/Forum'
import CitySearch from "../components/CitySearch/citysearch"


class ShareInput extends Component {

    constructor() {
        super()

        this.state = {
            events: [],
            approved: true,
            title: "",
            ages: 1,
            duration: 1,
            location: 1,
            activityLevel: 1,
            price: 1,
            description: ""
        }
    }

    handleEventSubmit = () => {

        alert('Thank you! Your activity was submitted for review.');

        const event = this.state

        console.log(event)

        API.saveSubmission({
            title: event.title,
            ages: event.ages,
            duration: event.duration,
            location: event.location,
            activityLevel: event.activityLevel,
            price: event.price,
            description: event.description
        });
    };


    render() {
        return (
            <div className="Wrapper">
                <Container>
                    <Row>
                    <Col size="md-1"></Col>
                        <Col size="md-3">
                            <h1 className="titleQ animated bounceInLeft slow">SHARE AN ACTIVITY WITH HOTEL GUESTS</h1>
                        </Col>
                        <Col size="md-1">
                            <h6 className="descriptionsRight"></h6><br></br>
                            <h6 className="descriptionsRight">Kids</h6><br></br>
                            <h6 className="descriptionsRight">An hour</h6><br></br>
                            <h6 className="descriptionsRight">Indoors</h6><br></br>
                            <h6 className="descriptionsRight">Sloth</h6><br></br>
                            <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
                        </Col>
                        <Col size="md-5">
                        <CitySearch />
                            <p className="questions">Kid Friendly?</p>
                            <Slider
                                min={0}
                                max={2}
                                value={this.state.ages}
                                orientation="horizontal"
                                onChange={(value) => { this.setState({ ages: value }) }}
                            />
                            <p className="questions">Duration?</p>
                            <Slider
                                min={0}
                                max={2}
                                value={this.state.duration}
                                orientation="horizontal"
                                onChange={(value) => { this.setState({ duration: value }) }}
                            />
                            <p className="questions">Location?</p>
                            <Slider
                                min={0}
                                max={2}
                                value={this.state.location}
                                orientation="horizontal"
                                onChange={(value) => { this.setState({ location: value }) }}
                            />
                            <p className="questions">Activity Level?</p>
                            <Slider
                                min={0}
                                max={2}
                                value={this.state.activityLevel}
                                orientation="horizontal"
                                onChange={(value) => { this.setState({ activityLevel: value }) }}
                            />
                            <p className="questions">Price?</p>
                            <Slider
                                min={0}
                                max={2}
                                value={this.state.price}
                                orientation="horizontal"
                                onChange={(value) => { this.setState({ price: value }) }}
                            /><br></br><br></br>
                                <form>
                                <label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={this.state.title}
                                        onChange={(event) => { this.setState({ title: event.target.value }) }}
                                    />
                                    <br />
                                    <textarea
                                        className="form-control "
                                        placeholder="Description"
                                        type="text"
                                        description={this.state.description}
                                        onChange={(event) => { this.setState({ description: event.target.value }) }}
                                    />
                                </label>
                            </form>
                            <SubmitBtn onClick={() => this.handleEventSubmit()} />
                        </Col>
                        <Col size="md-2">
                            <h6 className="descriptionsLeft"></h6><br></br>
                            <h6 className="descriptionsLeft">Cocktails</h6><br></br>
                            <h6 className="descriptionsLeft">All day</h6><br></br>
                            <h6 className="descriptionsLeft">Outdoors</h6><br></br>
                            <h6 className="descriptionsLeft">Cheetah</h6><br></br>
                            <h6 className="descriptionsLeft">Living Large</h6><br></br>
                        </Col>
                        
                    </Row>
                    {/* {this.state.approved === true ? */}
                      {/* {this.state.events.map(event => (
                        <Forum 
                        key={event.id}
                        title={event.title}
                        city={event.city}
                        ages={event.ages}
                        duration={event.duration}
                        location={event.location}
                        activityLevel={event.activityLevel}
                        price={event.price}
                        description={event.description}
                        link={event.link}
                        />
                        ))}
                        : null */}
                    {/* } */}
                </Container>
            </div>
        )
    }
}


export default ShareInput