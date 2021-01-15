import React from "react";

function About() {
    return (
<div className="container-fluid" id="AboutMeCont">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-9" id="aboutme">
                <img src=""></img> 
                <h5 className="card-title">ABOUT ME</h5>
                <p className="card-text">Hello, my name is Keodavone Thom Rattana, but I go by Thom. I´m studying to become a Full Stack Web Developer.</p>
                <p className="card-text">I´m currently studying at UNC cCharlotte Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
           
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}



export default About;