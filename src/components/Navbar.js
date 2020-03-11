import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    window.onscroll = function() {scrollFunction()};

    const scrollFunction = (e) => {
        console.log('scroll');
        
        if (document.documentElement.scrollTop > 1) {
            document.querySelector('.nav').style.padding = "20px";
            // document.getElementById("logo").style.fontSize = "25px";
        } else {
            document.querySelector('.nav').style.padding = "40px";
            // document.getElementById("logo").style.fontSize = "35px";
        }
    }

    return (
        <div className={props.scrolled ? 'nav scrolled' : 'nav'}>
            <img className="menu" src="../src/images/icons/bars-solid.svg"/>
            <Link to="/" style={{color: "transparent"}}>
                <span id="overview" className="nav_btn">Overview</span>
            </Link>
            <Link to="/about" style={{color: "transparent"}}>
                <span id="about" className="nav_btn">About me</span>
            </Link>
            <Link to="/projects" style={{color: "transparent"}}>
                <span id="projects" className="nav_btn">My Projects</span>
            </Link>
            <Link to="/contact" style={{color: "transparent"}}>
                <span id="contact" className="nav_btn">Contect me</span>
            </Link>
            <h3 id="portTxt" className="hidden">My Portfolio Page</h3>

        </div>
    )
}

export default Navbar
