import React from "react";
import { Navbar, NavbarBrand,Nav, NavItem, NavLink, Button } from 'reactstrap';
import './nav.css';

const ProfileNav = props => (
    <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="collapsed navbar-toggle">
                    <a href="/" className="navbar-brand">
                        Home
                    </a>
                </button>
                
            </div>
            <div className="nav-links">
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">My Profile</a>
                    </button>
                    
                </div>
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">Applied</a>
                    </button>
                    
                </div>
                <div className="link">
                    <button type="button" className="collapsed navbar-toggle">
                        <a href="" className="navbar-brand">Saved</a>
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

export default ProfileNav;