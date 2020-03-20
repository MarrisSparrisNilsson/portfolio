import React, { createRef } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../images/icons/bars-solid.svg'

const Navbar = () => {

    const nav = createRef()
    const navBtns = document.querySelectorAll('.nav_btn')

    window.onscroll = function() {scrollFunction()};

    const scrollFunction = (e) => {
        
        console.log('scroll');
        
        if (document.documentElement.scrollTop > 1) {
            nav.current.style.height = "60px";

            Array.from(navBtns).forEach(btn => {
                btn.style.padding = "5px"
            })

        } else {
            nav.current.style.height = "100px";
            Array.from(navBtns).forEach(btn => {
                btn.style.padding = "10px"
            })
        }
    }

    return (
        <div className="nav" ref={nav}>
            <img className="menu" src={menuIcon} alt="menu"/>
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
