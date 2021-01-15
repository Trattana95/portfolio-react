import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';
import About from "./pages/About";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Wrapper from "./components/Wrapper/Index"

import './App.css';

function App() {
  return (
    <Router>

      
        <div>
        <Navbar />
       
        <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;