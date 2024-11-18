import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './navigation.css'

const Navbar = () =>{
    return(
        <nav className="navigation">
            <div className="outer-nav-div">BEAU-TECH</div>
            <div className="outer-nav-div">
                <ul>
                    <Link smooth to='#hero' ><li>Home</li></Link>
                    <Link smooth to="#about"><li>About</li></Link>
                    <Link smooth to="#pricing"><li>Pricing</li></Link>
                </ul>
            </div>
            <div className="outer-nav-div">
                <a>CONTACT</a> 
            </div>
        </nav>
    )
}

export default Navbar