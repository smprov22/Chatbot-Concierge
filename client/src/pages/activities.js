import React, { Component } from 'react'
import API from '../utils/api'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import ActivityCard from '../components/ActivityCards'
import '../components/Slider/style.css'
import '../pages/activities.css'
import List from '../components/List/index'
import Card from '../components/Card/index'

// import CitySearch from '../components/CitySearch/citysearch'
// import { set } from 'mongoose';



class Activities extends Component {

  constructor() {
    super()

    this.state = {
        events: [],
        approved: false,
        ages: 1,
        duration: 1,
        location: 1,
        activityLevel: 1,
        price: 1,
        city: "",
        showEvents: false,
        myRef: React.createRef()
    }
  }

  // componentDidMount() {
  //   this.getSubmissions();
  // }

  // getSubmissions = () => {
  //   API.getSubmissions()
  //     .then(res =>  
  //       this.setState({
  //         events: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }

  handleFormSubmit = () => {
    let activity = this.state

    let params = {
        ages: activity.ages,
        location: activity.location,
        duration: activity.duration,
        activityLevel: activity.activityLevel,
        price: activity.price
    }
    console.log(params);
    API.getFilterSubmissions(params)
      .then(res => 
        this.setState({
          events: res.data
        })
        )
        .then(this.show())
        .catch(err => console.log(err));
  }


  show() {
    this.setState({
      showEvents: true
    })
  }
  // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 


  render() {
 
    return (
      <div className="Wrapper">
        <Container>
          <Row className="rows">
          <Col size="md-1 sm-0"></Col>
            <Col size="md-3 sm-12">
              <h1 className="titleQ animated bounceInLeft slow">WHAT TYPE OF ACTIVITY SHOULD WE PLAN?</h1>
            </Col>
            <Col size="md-1 sm-3">
              <h6 className="descriptionsRight"></h6><br></br>
              <h6 className="descriptionsRight">Kids</h6><br></br>
              <h6 className="descriptionsRight">An hour</h6><br></br>
              <h6 className="descriptionsRight">Indoors</h6><br></br>
              <h6 className="descriptionsRight">Sloth</h6><br></br>
              <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
            </Col>

            <Col className="slider" size="md-5 sm-6">
            <div>
                <form>
                    <select>
                        <option value="1">Sacramento, CA</option>
                        <option value="2">Austin, TX</option>
                        <option value="3">New Orleans, LA</option>
                        <option value="4">New York, NY</option>
                        <option value="5">Chicago, IL</option>
                    </select>
                </form>
            </div>
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
                />
              <SubmitBtn onClick={() => this.handleFormSubmit()} ></SubmitBtn>
            </Col>
            <Col size="md-1 sm-3">
              <h6 className="descriptionsLeft"></h6><br></br>
              <h6 className="descriptionsLeft">Cocktails</h6><br></br>
              <h6 className="descriptionsLeft">All day</h6><br></br>
              <h6 className="descriptionsLeft">Outdoors</h6><br></br>
              <h6 className="descriptionsLeft">Cheetah</h6><br></br>
              <h6 className="descriptionsLeft">Living Large</h6><br></br>
            </Col>
            <Col size="md-1 sm-0"></Col>
          </Row>
          {this.state.showEvents ?
            <Card ref={this.myRef} >
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => (
                    <ActivityCard
                      key={event._id}
                      title={event.title}
                      city={event.city}
                      ages={event.ages}
                      duration={event.duration}
                      location={event.location}
                      activityLevel={event.activityLevel}
                      price={event.price}
                      description={event.description}
                      link={event.link}
                      image={event.image}
                    />
                  ))}
                </List>
              ) : (
                  <h5 className="text-center">No activites matched your request. Please try again.</h5>
                )}
            </Card>
            : null
          }
        </Container>
      </div>
    )
  }
}






export default Activities