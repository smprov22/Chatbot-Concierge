import React, { Component } from 'react'
import API from '../utils/api'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import ActivityCard from '../components/ActivityCards'
import '../components/Slider/style.css'
import '../pages/activities.css'
import List from '../components/List/index'
import Card from '../components/Card/index'



class Activities extends Component {

    state = {
        events: []
      };
    
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
    

//         super(props);
//         this.state = { 
//             answers:{
//                 title: "",
//                 ages: 0,
//                 duration: 0,
//                 location: 0,
//                 activityLevel: 1,
//                 price: 0,
//                 approved: false,
//                 description: ""
//             },
//                displayAnswers: false
//         }
//  }

  
//     handleOnChange = (value) => {
//         this.setState({
//             image: value,
//             description: value,
//             city: value,
//             kids: value,
//             duration: value,
//             location: value,
//             active: value,
//             price: value

//         })

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
                <Card title="All Events" >
                    {this.state.events.length ? (
                <List>
                {this.state.events.map(event => (
                  <ActivityCard
                    key={event.id}
                    title={event.title}
                    ages={event.ages}
                    duration={event.duration}
                    location={event.location}
                    activityLevel={event.activityLevel}
                    price={event.price}
                    description={event.description} 
                    link={event.link}
                 />
                ))}
              </List>
                   ) : (
                    <h2 className="text-center">No Events :(</h2>
                  )}
               </Card>
            </Container>
         </div>
        )
    }
}






export default Activities