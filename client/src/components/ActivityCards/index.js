import React, { Component } from 'react'
import '../ActivityCards/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBaby, faTree, faHiking, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'


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
                            <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg" className="card-img" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <FontAwesomeIcon icon={faClock} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                                    <FontAwesomeIcon icon={faMoneyBillAlt}className="icons" size="lg"/>
                                </div>
                            </div>
                        </div>
                    </div>
           
            )
        }

}

export default ActivityCard


