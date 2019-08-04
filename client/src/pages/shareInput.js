import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class ShareInput extends Component {


render() {
	return (
<div>
  <input type="range" min="0" max="10" value="5" step="1" />
  <label for="cowbell">Cowbell</label>
</div>


)};

}
export default ShareInput