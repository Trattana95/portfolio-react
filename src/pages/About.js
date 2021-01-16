import React from "react";
import thom from "../image/IMG_9717.JPG"

function About() {
    return (
<div className="container-fluid" id="AboutMeCont">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row" style={{flexWrap:"nowrap"}}>
                <div className="col-lg-6">
                    <img src={thom} alt="Me" style={{width: "100%"}}></img> 
                </div>
                <div className="col-lg-6" id="aboutme">
                <h5 className="card-title">ABOUT ME</h5>
                <p className="card-text">Hello, my name is Keodavone Thom Rattana, but I go by Thom. I´m studying to become a Full Stack Web Developer.</p>
                <p className="card-text">I´m currently studying at UNC Charlotte Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}

export default About;