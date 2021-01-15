import React from "react";
import "../About/AboutMe.css";

function AboutMe() {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    {/* <img src={photo} className="card-img" alt="Photo" /> */}
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">ABOUT ME</h5>
                   <p className="card-text">Hello, my name is Keodavone Thom Rattana, but I go by Thom. I´m studying to become a Full Stack Web Developer.</p>
                   <p className="card-text">I´m currently studying at UNC cCharlotte Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
                    
                </div>    
            </div>
        </div>
    </div> 
      

    )
}

export default AboutMe;