import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
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

        return (
            <div>

                <nav className="navbar navbar-light bg-light">
                    <Link to="/shareInput" className="btn btn-link">
                        <span className="">HAVE SOMETHING TO SHARE?</span>
                    </Link>
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="App-logo" width="50" height="50" alt="logo" />
                    </a>
                    <ul class="nav justify-content-end">
                    <li>
                    <Link to="/login" className="btn btn-link nav-item active nav-link">
                       LOGIN
                    </Link>
                
                    <Link to="#" className="btn btn-link nav-item nav-link " onClick={this.logout}>
                       LINK
                      </Link> 
                      </li>
                    </ul>
                </nav>



            </div>

        );

    }
}

export default Navbar