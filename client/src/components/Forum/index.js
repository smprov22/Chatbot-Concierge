import React, { Component } from 'react'
import '../ActivityCards/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBaby, faTree, faHiking, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
// import { BookBtn } from '../Button/button'
import '../Forum'


class ActivityCard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            answers:{
                image: "",
                description: "",
                city: "",
                kids: "",
                duration: "",
                location: "",
                active: "",
                price: ""
            },
               displayAnswers: false
        }
 }


    handleOnChange = (value) => {
        this.setState({
            image: value,
            description: value,
            city: value,
            kids: value,
            duration: value,
            location: value,
            active: value,
            price: value

        })
    }
        render() {
           
            // let { image } = this.state
            // let { description } = this.state
            // let { city } = this.state

            return (
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" className="card-img-forum" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">USER HANDLE</h5>
                                    <h6 className="card-title">Location</h6>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <FontAwesomeIcon icon={faClock} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faMoneyBillAlt}className="icons" size="lg"/><br></br><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }

}

export default ActivityCard



