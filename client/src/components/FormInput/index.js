import React, { Component } from 'react'
// import API from "../../utils/api"
import "../FormInput/style.css"

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: '',
          description: ''
        };
    
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(event) {
        this.setState({
          value: event.target.value
        });
        console.log("Title Changed to")
        console.log(this.state.value)
      }
        
    
      render() {
        return (
          <form className="guestPost">
  
            <label>
            <input type="text" className="form-control"  placeholder="Title" value={this.state.value} onChange={this.handleChange}></input><br></br>
            <textarea className="form-control " placeholder="Description" type="text" description={this.state.description} onChange={this.handleChange} />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        );
      }
    }

    export default FormInput