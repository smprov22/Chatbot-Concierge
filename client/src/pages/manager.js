import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { List, Submissions } from '../components/Events/submissions'
import { ApproveBtn, DeleteBtn } from '../components/Button/button'
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

    handleApproveButton = (id, event) => {
        event.preventDefault();
        console.log(id);
        let approvedEvent = this.state.submissions.filter(submission => submission._id === id)
        approvedEvent = approvedEvent[0];
        console.log(approvedEvent)
        API.approveSubmission(id)
            .then(alert(`${approvedEvent.title} has been approved`))
            .catch(err => console.log(err))
    }


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
                                    <p><strong>Title: </strong>{submission.title}</p>
                                    <p><strong>Description: </strong>{submission.description}</p>
                                    <p><strong>Ages: </strong>{submission.ages}</p>
                                    <p><strong>Duration: </strong>{submission.duration}</p>
                                    <p><strong>Location: </strong>{submission.location}</p>
                                    <p><strong>Activity Level: </strong>{submission.activityLevel}</p>
                                    <p><strong>Price: </strong>{submission.price}</p>
                                    <p><strong>Approved: </strong>{submission.approved ? "true" : "false"}</p>
                                    <button className="approve-btn btn btn-success" id={submission._id} onClick={(event) => this.handleApproveButton(submission._id, event)}>
                                    Approve
                                    </button>
                                    {/* <ApproveBtn submissions={this.state.submissions} handleApproveButton={this.handleApproveButton}/>
                                    <span>    </span>
                                    <DeleteBtn /> */}
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
