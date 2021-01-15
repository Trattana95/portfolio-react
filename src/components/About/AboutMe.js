import React from "react";
import "../About/AboutMe.css";

function AboutMe() {
    return (
<div className="container-fluid" id="AboutMe">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row">
                <div className="col-lg-3">
                    <img className="img img-thumbnail" alt="" src=""/>  
                </div>
                <div className="col-lg-9" id="aboutme">
                    <p>Hello, my name is Keodavone Thom Rattana, but io go by Thom. I´m studying to become a Full Stack Web Developer.</p>
                    <p>I´m currently studying at UNC cCharlotte Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
                    <p>I've included some of my favorite projects as well as my contact information.</p>
                    
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}

export default AboutMe;