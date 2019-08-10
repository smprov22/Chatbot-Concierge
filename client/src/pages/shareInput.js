import React, { Component } from '../../node_modules/react'
import { Redirect } from '../../node_modules/react-router-dom'
// import axios from '../../node_modules/axios'
import ReactDOM from '../../node_modules/react-dom';
import SliderBar from '../components/Slider'
import { Container, Row, Col } from '../components/Grid'
import { SubmitBtn } from '../components/Button/button'
import '../components/Slider/style.css'
import '../pages/activities.css'
import FormInput from '../components/FormInput';
import Forum from '../components/Forum'
import '../components/Forum'
import API from "../utils/api"
import CitySearch from "../components/CitySearch/citysearch"


class ShareInput extends Component {

    constructor() {
        super()

        this.state = {
            events: [],
            approved: false,
            myRef: React.createRef()
        }
        this.handleEventSubmit = this.handleEventSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        this.getSubmissions();
    }

    getSubmissions = () => {
        API.getSubmissions(this.state.approved)
            .then(res =>
                this.setState({
                    events: res.data
                })
            )
            .catch(err => console.log(err));
    }


    // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 


    handleEventSubmit = id => {

        alert('Thank you! Your activity was submitted for review.');

        const event = this.state.events
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
                        <Col size="md-3">
                            <h1 className="titleQ">SHARE SOMETHING WITH OTHER GUESTS?</h1>
                            <CitySearch />
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
                            <SubmitBtn onClick={() => this.handleEventSubmit()} />
                        </Col>
                        <Col size="md-2">
                            <h6 className="descriptionsLeft">Cocktails</h6><br></br>
                            <h6 className="descriptionsLeft">All day</h6><br></br>
                            <h6 className="descriptionsLeft">Outdoors</h6><br></br>
                            <h6 className="descriptionsLeft">Cheetah</h6><br></br>
                            <h6 className="descriptionsLeft">Living Large</h6><br></br>
                        </Col>

                    </Row>
                    {this.state.eventApproval === true ?
                        <Forum />
                        : null
                    }
                </Container>
            </div>
        )
    }
}






export default ShareInput