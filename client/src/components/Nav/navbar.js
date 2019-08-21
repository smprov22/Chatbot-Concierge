import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from './logo.png';
import '../Nav/style.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        if (loggedIn) {
            return (
                <div>
                    <nav className="navbar bg-faded">
                        <div className="container">

                            <ul className="nav navbar-nav pull-sm-left">
                                <li className="nav-item">
                                    <Link to="/shareInput" className="btn btn-link">
                                        <p className="nav-link-share">CONTRIBUTE</p>
                                    </Link>
                                </li>
                            </ul>
                            <a className="navbar-brand mx-auto" href="/">
                                <img src={logo} className="App-logo" alt="logo" />
                            </a>
                            <ul className="nav navbar-nav pull-sm-left">
                                <li className="nav-item">
                                    <Link to="#" className="btn btn-link nav-item nav-link" onClick={this.logout}>
                                        LOGOUT
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        } else {

            return (
                <div>
                    <nav className="navbar bg-faded">
                        <div className="container">

                            <ul className="nav navbar-nav pull-sm-left">
                                <li className="nav-item">
                                    <Link to="/shareInput" className="btn btn-link">
                                        <p>CONTRIBUTE</p>
                                    </Link>
                                </li>
                            </ul>
                            <a className="navbar-brand mx-auto" href="/">
                                <img src={logo} className="App-logo" alt="logo" />
                            </a>
                            <ul className="nav navbar-nav pull-sm-left">
                                <li className="nav-item">
                                <Link to="/login" className="btn btn-link nav-item nav-link">
                                    LOGIN
                            </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
              
            );
        }
    }
}

export default Navbar