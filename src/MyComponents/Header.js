import React from 'react'
import PropTypes from 'prop-types'
import {
   Link
} from "react-router-dom";
  




// props is a javascript object which we are passing from parent(app.js) to here
export default function Header(props)
{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>


       { props.searchBar ? <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}

    </div>
  </div>
</nav>
    )
}

Header.deafultProps={
    title:"Title is not available",
    searchBar:true
}

Header.propTypes={
    title:PropTypes.string,
    searchBar:PropTypes.bool.isRequired
}