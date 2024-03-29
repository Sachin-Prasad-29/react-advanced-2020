import React from 'react';
// react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
    return (
        <Router>
            
                <Route path='/about'>
                    <About />
                </Route>
            
        </Router>
    );
};

export default ReactRouterSetup;
