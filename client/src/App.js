import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './components/Nav/navbar'
import Home from './pages/home'
import Activities from './pages/activities'
import ShareInput from './pages/shareInput'
import Manager from './pages/manager'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">

          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>You are logged in, {this.state.username}!</p>
          }
          {/* Routes to different components */}
          <Router>
            <div>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route
            exact path="/"
            component={Home} />
          <Route
            exact path="/login"
            render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            exact path="/signup"
            render={() =>
              <Signup />}
          />
          <Route
            exact path="/manager"
            render={() =>
              <Manager />}
          />
          <Route
            exact path="/activities"
            render={() =>
              <Activities />}
          />
          <Route
            exact path="/shareInput"
            render={() =>
              <ShareInput />}
          />
          </div>
          </Router>
          
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }
          {/* Routes to different components */}
          <Router>
            <div>
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route
            exact path="/"
            component={Home} />
          <Route
            exact path="/login"
            render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            exact path="/activities"
            render={() =>
              <Activities />}
          />
          <Route
            exact path="/shareInput"
            render={() =>
              <ShareInput />}
          />
          </div>
          </Router>
        </div>
      );
    }
  }
}

export default App;
