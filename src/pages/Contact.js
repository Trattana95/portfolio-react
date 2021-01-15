import React from "react";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import ContactMe from "../components/Contact/ContactMe";

function Contact() {
    return (
        <div className="container-fluid">
        <Navbar
            about="/"/>
        <ContactMe/>
        {/* <Footer/> */}
        </div>
    )
}

export default Contact;