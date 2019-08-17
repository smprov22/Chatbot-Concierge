import React from 'react'
import '../ActivityCards/style.css'
import Icons from "../Icons/icons"


function ActivityCard({ title, description, link, image, city }) {

            return (
                <div className="card mb-3"  >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image} className="card-img img-thumbnail img-fluid w-100" alt={title}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted"> Location: {city} </small></p>
                                    <Icons /><br></br>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="bookBtn">BOOK</a>
                               
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }




export default ActivityCard



