  
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav mr-auto"></ul>    
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href={props.about}>About</a> */}
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="/portfolio">Portfolio</a> */}
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="/contact">Contact</a> */}
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </div>    
    </nav>
 
    )
}

export default Navbar;