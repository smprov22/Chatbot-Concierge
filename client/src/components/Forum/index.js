import React, { Component } from 'react'
import '../ActivityCards/style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock, faBaby, faTree, faHiking, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
import { BookBtn } from '../Button/button'
import '../Forum'


function Forum({ title, ages, duration, location, activityLevel, price, description, city}) {

            return (
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" className="card-img-forum" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-header">
                                    <h5 className="card-title">{title}</h5>
                                    <h6 className="card-title">{city}</h6>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">updated at</small></p>
                                    <p >Ages: {ages} | Duration: {duration} | Activity Level: {activityLevel} | Location: {location} | Price: {price} </p>
                                    {/* <FontAwesomeIcon icon={faClock} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faMoneyBillAlt}className="icons" size="lg"/><br></br><br></br> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }



export default Forum



