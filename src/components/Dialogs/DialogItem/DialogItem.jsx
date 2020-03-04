import React from 'react'
import {NavLink} from 'react-router-dom'
import icon from '../../../assets/images/icon.png'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return ( 
            <NavLink to={path} className="list-group-item list-group-item-light list-group-item-action">
                <img src={icon} className="user-icon" alt="..." />
                <span className="text-dark pl-2">{props.name}</span>
            </NavLink>
    )
}

export default DialogItem