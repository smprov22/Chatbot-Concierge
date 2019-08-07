import React, { Component } from 'react'
import StartBtn from '../components/Button/button'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


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
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt=""/>
                <StartBtn 
                onClick={this.onStartBtn} />
            </div>

        )

    }
}

export default Home
