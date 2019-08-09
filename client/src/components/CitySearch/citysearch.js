
import React, { Component } from 'react'
import '../CitySearch/style.css'


class CitySearch extends Component {



    render() {
        return (
        <form>
            <select>
                <option value="1">Sacramento, CA</option>
                <option value="2">Austin, TX</option>
                <option value="3">New Orleans, LA</option>
                <option value="4">New York, NY</option>
                <option value="5">Chicago, Illinois</option>
            </select>


        </form>



)}
}


export default CitySearch;