import React from 'react'
import {Link} from 'react-router-dom'
// import props from 'prop-types'

export default function Navbar(props) {
  return (
    <nav  className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand " href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
         
        </ul>
        <button type="button" onClick={props.togglemode}  className={props.btncolor}>{props.btn}</button>
        <button type="button" onClick={props.Blue} className={props.btncolor}>Blue Mode</button>
        <button type="button" onClick={props.Red} className={props.btncolor}>Red Mode</button>
        <button type="button" onClick={props.Green} className={props.btncolor}>Green Mode</button>
      </div>
    </div>
  </nav>
  )
}

 // Navbar.propTypes = {
 //    it must enter props
 //   title: PropTypes.string.isRequired,

 //   set the type of props like string number boolen
 //   find: PropTypes.string,
 // };

//  Navbar.defaultProps= {
//   //if we not enter props this is defalut props
//    title: "set title here",
//    find:"are you want find some thing",
//  };