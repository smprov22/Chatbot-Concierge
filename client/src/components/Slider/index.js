import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SliderBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      index: 1

    }
  }

  handleOnChange = (value) => {
    this.setState({
      index: value
    })
  }

  render() {
    let { index } = this.state
    return (
      <div className= "slider">

        <Slider
          min={0}
          max={2}
          value={index}
          labels={{ 0: "", 1: "", 2: "" }}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
  

      </div>
    )
  }
}

export default SliderBar;