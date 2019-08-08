import React, { Component } from 'react'
import StartBtn from '../components/Button/button'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'
import Cinemagraph from '../components/Cinemagraph/cinemagraph'


class Home extends Component {
    // constructor() {
    //     super()
    // }



    onStartBtn = event => {
        event.preventDefault();
        let path = "/activities"
        this.props.history.push(path)

    }

    render() {
        return (

            <div className="containerTitle">
                    <p className="homeTitle">Let's do <br></br>something fun</p>
                    <StartBtn
                        onClick={this.onStartBtn} />
                    <Cinemagraph />
                  
            </div>

        )

    }
}

export default Home
