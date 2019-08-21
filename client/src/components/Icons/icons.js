import React, { Component } from 'react'
import "../Icons/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart, faHourglassEnd, faBaby, faCocktail, faBed, faHiking, faTree, faHome, faMoneyBillAlt, faPiggyBank} from '@fortawesome/free-solid-svg-icons'

class Icons extends Component {
    constructor() {
        super()

    this.state = {
        showIcons: false,
        ages: 1,
        duration: 1,
        location: 1,
        activityLevel: 1,
        price: 1,
    }
    }
  
  show() {
    this.setState({
      showIcons: true
    })
  }

    render() {

        return (
            <div className="inonsContainer">
            {this.state.ages > 1 ?
                 <FontAwesomeIcon icon={faCocktail} className="icons" size="lg"/>
                 : <FontAwesomeIcon icon={faBaby} className="icons" size="lg"/>
            }
              {this.state.duration >= 1 ?
                <FontAwesomeIcon icon={faHourglassStart} className="icons" size="lg"/>
                : <FontAwesomeIcon icon={faHourglassEnd} className="icons" size="lg"/>
            }
              {this.state.location >= 1 ?
                <FontAwesomeIcon icon={faTree} className="icons" size="lg"/>
                : <FontAwesomeIcon icon={faHome} className="icons" size="lg"/>
            }
              {this.state.activityLevel >= 1 ?
                <FontAwesomeIcon icon={faHiking} className="icons" size="lg"/>
                : <FontAwesomeIcon icon={faBed} className="icons" size="lg"/>
            }
            
              {this.state.price >= 1 ?
                <FontAwesomeIcon icon={faMoneyBillAlt}  className="icons" size="lg"/>
                : <FontAwesomeIcon icon={faPiggyBank}className="icons" size="lg"/>
            }
            <br></br>

        </div>
        )
}
}

export default Icons