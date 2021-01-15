import React from "react";
import Card from "../components/Card/Index";
import Container from "../components/Container/Index";



function About() {
    return (
        <div>
        <Container>
            <Card>
                {/* <img src=""></img> */}
                <h5 className="card-title">ABOUT ME</h5>
                <p className="card-text">Hello, my name is Keodavone Thom Rattana, but I go by Thom. I´m studying to become a Full Stack Web Developer.</p>
                <p className="card-text">I´m currently studying at UNC cCharlotte Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
            </Card>
        </Container>
        </div>
    );
}


export default About;