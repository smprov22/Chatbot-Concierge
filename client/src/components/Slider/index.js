import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SliderBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 50
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  render() {
    let { volume } = this.state
    return (
      <div className= "slider">

        <Slider
          value={volume}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
  

      </div>
    )
  }
}

export default SliderBar;