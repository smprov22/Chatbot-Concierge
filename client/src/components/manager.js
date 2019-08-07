import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {List, Submissions} from './submissions'
import {ApproveBtn, DeleteBtn} from './buttons'
import API from '../utils/api'

class Manager extends Component {
    constructor() {
        super()
    }

    state = {
        submissions: []
    };

    componentDidMount() {
        this.loadSubmissions();
    }

    loadSubmissions = () => {
        API.getSubmissions()
            .then(res => this.setState({ submissions: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <h4>Manager</h4>
                </div>
                <div>
                    {this.state.submissions.length ? (
                        <List>
                            {this.state.submissions.map(submission => (
                                <Submissions key={submission._id}>
                                    <a href={"/submissions/" + submission._id}>
                                        <strong>
                                            {submission.description}
                                        </strong>
                                    </a>
                                    <ApproveBtn />
                                    <DeleteBtn />
                                </Submissions>
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
