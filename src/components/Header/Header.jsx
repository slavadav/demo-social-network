import React from 'react'
//import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/images/react-logo.png'

const Header = (props) => {
    return (
        <header className="navbar navbar-dark bg-dark">
            <img src={icon} alt="" width="50" />

            <h4 className="navbar-text ml-3">React-Social-Network</h4>
            <div className="ml-auto">
                {props.isAuth ? 
                <div>
                    <span className="text-light">{props.login}</span> 
                    <button onClick={props.logout} 
                            className="btn btn-sm btn-outline-secondary ml-md-3" type="button" >
                        Logout
                    </button>
                </div>  
                : <NavLink className="btn btn-sm btn-outline-secondary" type="button" to='/login'>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header
