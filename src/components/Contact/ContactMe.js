import React from "react";
import "../Contact/ContactMe.css";

function ContactMe() {
    return (
        <div className="container-md">
        <div className="jumbotron" id="contact">
            <h1 className="display-4" id="disp5">Get In Touch!</h1>
            <hr className="light" color="white"/>
            <div className="container contact-form">
                <div className="row">
                    <div className="col-md-6">
                        
                        <p>Email:<a href="mailto:ThomR95@gmail.com"target="_top" id="MainLinks">ThomR95@gmail.com</a></p>
 
                        <div className="row text-center padding" id="socialnet">
                            <div className="col-md-3 social padding">
                            <a href="https://github.com/Trattana95" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            </div>
                            <div className="col-md-3 social padding">
                            <a href="https://www.linkedin.com/in/keodavone-rattana-0711ba1b9/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a>                            
                            </div>    
                        </div>    

                    </div>
                        <div className="col-md-6">
                            <form name="contact"  action="/" method="post" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact"/>
                                <div className="form-group">
                                    <label>Name</label>
                                        <input required type="text" name="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                        <input required type="email" name="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                        <textarea name="message" className="form-control" rows="5"></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <button className="btn btn-outline-light btn-block btn-lg" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default ContactMe;