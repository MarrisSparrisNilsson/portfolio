import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import MainContent from './MainContent'

const App = () => {

    const [scrollState, setScrollState] = useState(false)

    // window.onscroll = function() {scrollFunction()};

    // const scrollFunction = (e) => {
    //     console.log('scroll');
        
    //     if (document.documentElement.scrollBottom > 1) {
    //         console.log();
            
    //         document.querySelector('.nav').style.padding = "0px";
    //         // document.getElementById("logo").style.fontSize = "25px";
    //     } else {
    //         document.querySelector('.nav').style.padding = "30px";
    //         // document.getElementById("logo").style.fontSize = "35px";
    //     }
    // }

    useEffect(() => {
        window.addEventListener('scroll', e => {
            const isTop = window.scrollY < 10
            if (isTop !== true) {
                setScrollState(true)            
            }
            else{
                setScrollState(false)
            }
        })
    })

    return (
        <>
            <Router>
                
                {/* Portfolio Page */}
                <Navbar scrolled={scrollState}/>
                <Switch>
                    {/* <Route path="/" exact component={Overview}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/contact" exact component={Contact}/> */}
                </Switch>
                <MainContent />
            </Router>
        </>
    );
}

export default App