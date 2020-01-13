import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA&s'  alt='some value'/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem