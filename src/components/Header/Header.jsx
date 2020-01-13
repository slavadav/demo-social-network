import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFqthWF2QB3SGlF8suwc74974liGM8PlTEpv35WW4mYuqc67kJw&s' alt=""/>
            <div className={s.login}>
                {props.isAuth ? 
                <div>
                    <span>{props.login}  </span> 
                    <button onClick={props.logout}>Logout</button>
                </div>  
                : <NavLink to='/login'>LogIn</NavLink>}
            </div>
        </header>
    )
}

export default Header
