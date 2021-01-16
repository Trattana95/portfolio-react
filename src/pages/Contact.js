import React from "react";

// import "./contact.css";


function Contact() {
    return (
        <div className="container-fluid" id="AboutMeCont">
        <div className="container padding" id="jumbo">
            <div className="jumbotron">
                <h1 className="display-4" id="About">Feel free to contact me!</h1>
                <hr className="light" color="black"/>
    
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-9" id="Contact Me">
                    <div className="form-group">
                        <h3> Email: </h3> 
                        <h4><a href="mailto:ThomR95@gmail.com"target="_blank" rel="noreferrer noopener">ThomR95@gmail.com</a></h4>
                    </div>
                    <div className="form-group">
                        <h3>LinkedIn:</h3>
                        <h4>
                        <a href="https://www.linkedin.com/in/keodavone-rattana-0711ba1b9/"target="_blank" rel="noreferrer noopener" className="link">Click Here!</a>
                        </h4>
                    </div>
                    <div className="form-group">
                        <h3>GitHub:</h3>
                        <h4>
                            <a href="https://github.com/Trattana95" target="_blank" rel="noreferrer noopener" className="link">Click Here!</a>
                        </h4>
                    </div>
            </div>
    </div> 
</div>
</div>
        </div>

    );
}

export default Contact;