import React from "react";
import Navbar from "../components/Navbar/Index";
import Card from "../components/Card/Index";
import Container from "../components/Container/Index";
// import "./contact.css";


function Contact() {
    return (
        <div>
            <Navbar/>
            
            <Container>
                <Card>
                    <div className="form-group">
                        <p class="card-text">Email: <a href="mailto:ThomR95@gmail.com">ThomR95@gmail.com</a></p>
                    </div>
                    <div className="form-group">
                        <h3>LinkedIn:</h3>
                        <h4>
                        <a href="https://www.linkedin.com/in/keodavone-rattana-0711ba1b9/"target="_blank" rel="noreferrer noopener" className="link">Click Me!</a>
                        </h4>
                    </div>
                    <div className="form-group">
                        <h3>GitHub:</h3>
                        <h4>
                            <a href="https://github.com/Trattana95" target="_blank" rel="noreferrer noopener" className="link">Click Me!</a>
                        </h4>
                    </div>
                </Card>
            </Container>

        </div>

    );
}

export default Contact;