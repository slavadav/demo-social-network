import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav  className="navbar navbar-light bg-light" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/profile' className="nav-link">My profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/dialogs' className="nav-link">Messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/users' className="nav-link">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/music' className="nav-link">Music</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/settings' className="nav-link">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar