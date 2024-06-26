import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      {/* enter navbar title using props */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
          </li>
         
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" >{props.find}</button> 
        </form> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  // it must enter props
  title: PropTypes.string.isRequired,
  //set the type of props like string number boolen
  find: PropTypes.string,
};

 Navbar.defaultProps= {
  //if we not enter props this is defalut props
   title: "set title here",
   find:"are you want find some thing",
 };