import React from "react";
import { Navbar, NavbarBrand,Nav, NavItem, NavLink, Button } from 'reactstrap';
import './HomeNav.css';

const HomeNav = props => (
    <nav className="navbar navbar-top fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="collapsed navbar-toggle">
                    <a href="/" className="navbar-brand">
                        <i class="fas fa-home"></i>
                    </a>
                </button>
                
            </div>
            <div className="nav-links">
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">Learn More</a>
                    </button>
                    
                </div>
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">Contact</a>
                    </button>
                    
                </div>
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">Sign Up</a>
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

export default HomeNav;