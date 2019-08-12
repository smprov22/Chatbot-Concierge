import React, { Component } from 'react'
import API from '../utils/api'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import ActivityCard from '../components/ActivityCards'
import '../components/Slider/style.css'
import '../pages/activities.css'
import List from '../components/List/index'
import Card from '../components/Card/index'
import CitySearch from '../components/CitySearch/citysearch'
import { set } from 'mongoose';



class Activities extends Component {

  constructor() {
    super()

    this.state = {
      events: [],
      showEvents: false,
      myRef: React.createRef()
    }
  }

  componentDidMount() {
    this.getSubmissions();
  }

  getSubmissions = () => {
    API.getSubmissions()
      .then(res =>
        this.setState({
          events: res.data
        })
      )
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
          <Row >
            <Col size="md-3">
              <h1 className="titleQ">WHAT TYPE OF ACTIVITY SHOULD WE PLAN?</h1>
            </Col>
            <Col size="md-2">
              <h6 className="descriptionsRight"></h6><br></br>
              <h6 className="descriptionsRight">Kids</h6><br></br>
              <h6 className="descriptionsRight">An hour</h6><br></br>
              <h6 className="descriptionsRight">Indoors</h6><br></br>
              <h6 className="descriptionsRight">Sloth</h6><br></br>
              <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
            </Col>

            <Col className="slider" size="md-5">
            <CitySearch />
              <p className="questions">Kid Friendly?</p>
              <SliderBar />
              <p className="questions">Duration?</p>
              <SliderBar />
              <p className="questions">Location?</p>
              <SliderBar />
              <p className="questions">Activity Level?</p>
              <SliderBar />
              <p className="questions">Price?</p>
              <SliderBar />
              <SubmitBtn onClick={() => this.show()} ></SubmitBtn>
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
          {this.state.showEvents ?
            <Card ref={this.myRef} >
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => (
                    <ActivityCard
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