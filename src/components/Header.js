import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pics/logo.jpg' ;
import './header.scss' ;

const Header = (props) => {
    return (
        <div className='header'>
            <div className="header-logo">
            <img src={logo} alt="logo " />
            </div>
            <div className="header-nav">
                <ul>
                    <NavLink className={(nav) => nav.isActive ? 'nav-active' : ''} to='/'>
                        <li><i className="fa fa-user"></i> <h5>PLAYER</h5> </li>
                    </NavLink>
                    <NavLink className={(nav) => nav.isActive ? 'nav-active' : ''} to='/videos'>
                        <li><i className="fa fa-film"></i> <h5>VIDEOS</h5> </li>
                    </NavLink>
                    <NavLink className={(nav) => nav.isActive ? 'nav-active' : ''} to='/pictures'>
                        <li><i className="fa fa-play"></i> <h5>AUDIO</h5> </li>
                    </NavLink>
                </ul>
            </div>
        </div>
        );
};

export default Header;