import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div style={{marginTop:'7rem'}} className='container'>
        <h1>Hello this is a HOME page</h1>
        <br />
        <p style={{paddingTop:'10rem', marginLeft:'-32rem', width:'80rem'}} className="text-center">
          Clik <Link to="/profile">here</Link> to access the profile page.
        </p>
      </div>
    )
  }
}