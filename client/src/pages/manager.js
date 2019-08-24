import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { List } from '../components/Events/submissions'
import Submissions from '../components/Events/submissions2'
import API from '../utils/api'
import Card from "../components/Card/index"
import "./home.css"

const baseUrl = process.env.PUBLIC_URL; 

class Manager extends Component {

    state = {
        submissions: []
    }

    componentDidMount() {
        console.log("Loading Submissions");
        this.loadSubmissions();
    }

    componentDidUpdate() {
        console.log("Updating Submissions");
    }

    loadSubmissions = () => {
        API.getSubmissions()
            .then(res => this.setState({ submissions: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="managerPage">
                <div>
                    <h1>MANAGER VIEW</h1>
                </div>
                <div>
                    <a className="manager-signup" href={baseUrl + "/signup"} >+ Add a New Manager</a>
                </div>
                <div className="edit-boxes">
                    {this.state.submissions.length ? (
           
                        <List>
                            {this.state.submissions
                            .filter(submission => (!submission.approved))
                            .map((submission) => (
                                <Card className="parentCard">
                                <Submissions key={submission._id} submission = {submission} componentDidMount = {()=>this.componentDidMount()} loadSubmissions={()=>this.loadSubmissions()}>  
                                </Submissions>
                                </Card>
                            ))}
                
                        </List>
            
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                        
                </div>
            </div>
        )
    }
}

export default Manager
