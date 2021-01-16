import React from "react";
import './Style.css';



function Project(props) {
    return (
        <div className="col">
            <h4>{props.title}</h4>
            <img src={props.image} alt={props.alt} className="portImage"></img>
            <h5>
                <a href={props.deployed} target="_blank" rel="noreferrer noopener" className="link">Link to the deployed page here!</a>
            </h5>
            <h5>
                <a href={props.code} target="_blank" rel="noreferrer noopener" className="link">Link to the code here!</a>
            </h5>

        </div>
    );
}

export default Project;