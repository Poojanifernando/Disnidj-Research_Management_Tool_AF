import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class UploadNavbar extends Component {
  render() {
    return (
      
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/AdminUpHome">
          UPLOADER
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/AdminAdd">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    )
  }
}

