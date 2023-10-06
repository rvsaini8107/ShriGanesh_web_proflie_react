import React from 'react'
import logImage from './../images/logo.png'
const Navbar = () => {
    return (
        <>
            <header className="header" id="header">
                {logImage&&<img src={logImage} className="logo" alt=" our logo image"/>}
                    <nav className="navbar">
                        <ul className="navbar-lists">
                            <li><a href="#home" className="navbar-link home-link">Home</a></li>
                            <li><a href="#about" className="navbar-link about-link">About</a></li>
                            <li><a href="#service" className="navbar-link service-link">Service</a></li>
                            <li><a href="#portfolio" className="navbar-link portfolio-link">Portfolio</a></li>
                            <li><a href="#contact" className="navbar-link content-link">Contact</a></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}

export default Navbar
