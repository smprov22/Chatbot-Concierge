import React from 'react'
import '../ActivityCards/style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock, faBaby, faTree, faHiking, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
// import { BookBtn } from '../Button/button'
// import API from '../../utils/api'


function ActivityCard({ title, description, link, image, city }) {
// function ActivityCard({ title, ages, duration, location, activityLevel, price, description, link, image, city }) {
    //     BookButton = event =>{
    //     event.preventDefault();
    //     let path = {link}
    //     this.props.history.push(path)

    // }

            return (
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image} className="card-img img-thumbnail img-fluid w-100" alt={title}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted"> Location: {city} </small></p>
                                    {/* <p >Ages: {ages} | Duration: {duration} | Activity Level: {activityLevel} | Location: {location} | Price: {price} </p> */}
                                    <a href={link} className="bookBtn">BOOK</a>
                                    {/* <FontAwesomeIcon icon={faClock} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faMoneyBillAlt}className="icons" size="lg"/><br></br><br></br> */}
                                 
                               
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }




export default ActivityCard



