import React from 'react'
import API from '../../utils/api'
import { Col, Row } from "../Grid/index"
import "../Events/style.css"

class Submissions extends React.Component {

    state = {
        id: this.props.submission._id,
        title: this.props.submission.title,
        description: this.props.submission.description,
        ages: this.props.submission.ages,
        duration: this.props.submission.duration,
        location: this.props.submission.location,
        activityLevel: this.props.submission.activityLevel,
        price: this.props.submission.price,
        image: this.props.submission.image,
        link: this.props.submission.link,
        approved: true
    }

    handleApproveButton = (id, submission, event) => {
        event.preventDefault();
        console.log("Approving" + id);
        console.log(submission)
        API.approveSubmission(id, submission)
            .then(alert(`${submission.title} has been approved`))
            .then(this.props.loadSubmissions())
            .catch(err => console.log(err))
    }

    handleDeleteButton = (id, event) => {
        event.preventDefault();
        console.log("Deleting" + id);
        API.deleteSubmission(id)
            .then(alert(`${this.state.title} has been deleted`))
            .then(console.log("Making it here"))
            .then(this.props.loadSubmissions())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <div className="editBox" >
                <span className="titles"><strong>Title:</strong></span>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={(event) => { this.setState({ title: event.target.value }) }}
                ></input>
                <span className="titles"><strong>Description:</strong></span>
                <input
                    type="text-area"
                    className="form-control descInput"
                    value={this.state.description}
                    onChange={(event) => { this.setState({ description: event.target.value }) }}
                ></input>
                <Row className="numberTotals">
                    <Col size="md-4 sm-12">
                        <span className="numberInput titles"><strong>Ages:</strong></span>
                        <input
                            type="text"
                            className="form-control numberInput"
                            value={this.state.ages}
                            onChange={(event) => { this.setState({ ages: event.target.value }) }}
                        ></input>
                        <span className="numberInput titles"><strong>Duration:</strong></span>
                        <input
                            type="text"
                            className="form-control numberInput"
                            value={this.state.duration}
                            onChange={(event) => { this.setState({ duration: event.target.value }) }}
                        ></input>
                    </Col>
                    <Col size="md-4 sm-12">
                        <span className="numberInput titles"><strong>Location:</strong></span>
                        <input
                            type="text"
                            className="form-control numberInput"
                            value={this.state.location}
                            onChange={(event) => { this.setState({ location: event.target.value }) }}
                        ></input>
                        <span className="numberInput titles"><strong>Activity Level:</strong></span>
                        <input
                            type="text"
                            className="form-control numberInput"
                            value={this.state.activityLevel}
                            onChange={(event) => { this.setState({ activityLevel: event.target.value }) }}
                        ></input>
                    </Col>
                    <Col size="md-4 sm-12">
                        <span className="numberInput titles"><strong>Price:</strong></span>
                        <input
                            type="text"
                            className="form-control numberInput"
                            value={this.state.price}
                            onChange={(event) => { this.setState({ price: event.target.value }) }}
                        ></input>
                    </Col>
                </Row>
                <span className="linkInput titles"><strong>Information Link:</strong></span>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.link}
                    onChange={(event) => { this.setState({ link: event.target.value }) }}
                ></input>
                <span className="titles"><strong>Image Link:</strong></span>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.image}
                    onChange={(event) => { this.setState({ image: event.target.value }) }}
                ></input>
                </div>
                <Row>
                    <Col className="center" size="md-12 ">
                        {/* <p className="approved"><strong>Approved: </strong>{this.props.submission.approved ? "true" : "false"}</p> */}
                        <button className="approve-btn btn btn-primary " submission={this.state} onClick={(event) => this.handleApproveButton(this.props.submission._id, this.state, event)}>
                            Approve
            </button>
                        <span>      </span>
                        <button className="approve-btn btn " id={this.state.id} onClick={(event) => this.handleDeleteButton(this.props.submission._id, event)}>
                            Delete
            </button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Submissions;