import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';
class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-continer">
                    <Link to='/home' className="nav-link" >Home</Link>
                    <Link to='/students' className="nav-link" >Students</Link>
                    <Link to='/contacts' className="nav-link" >Contact Us</Link>
                </header>
            </div>
        )
    }
}

export default Header;
