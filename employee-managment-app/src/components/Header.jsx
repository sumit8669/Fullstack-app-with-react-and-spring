import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div><a href="http://localhost:8080/api/v1/employees" className='navbar-brand'>Employee Managment App</a></div>
          </nav>
        </header>
      </div>
    )
  }
}

