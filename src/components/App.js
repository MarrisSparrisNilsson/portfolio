import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './route_components/About'
import Contact from './route_components/Contact'
import Projects from './route_components/Projects'
import Overview from './route_components/Overview'

const App = () => {

    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Overview}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
            </Router>
        </>
    );
}

export default App