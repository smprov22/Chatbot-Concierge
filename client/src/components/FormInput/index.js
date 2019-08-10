import React, { Component } from 'react'
import API from "../../utils/api"
import "../FormInput/style.css"

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(event) {
        this.setState({
          title: event.target.title,
          value: event.target.value
        });
        console.log("Hello, Justin!")
        console.log(this.state.title + " - " + this.state.value)
      }
        
    
      render() {
        return (
          <form>
  
            <label>
            <input type="text" className="form-control"  placeholder="Title" defaultValue={this.state.title}></input><br></br>
            <textarea className="form-control " placeholder="Description" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        );
      }
    }

    export default FormInput