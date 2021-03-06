import React, { Component } from 'react'
import StartBtn from '../components/Button/button'
import '../App.css'
import Cinemagraph from '../components/Cinemagraph/cinemagraph'
import "../pages/home.css"



class Home extends Component {
 
       onStartBtn = event => {
        event.preventDefault();
        let path = "/activities"
        this.props.history.push(path)

    }

    render() {
        return (

            <div id="frontPage">
                    <p className="homeTitle">Let's do <br></br>something fun <br></br>  </p>
                    <StartBtn
                        onClick={this.onStartBtn} />
                    <Cinemagraph />    
            </div>
  
        )

    }
}

export default Home
