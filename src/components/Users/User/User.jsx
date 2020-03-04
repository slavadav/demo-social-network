import React from 'react'
import {NavLink} from 'react-router-dom'
import icon from '../../../assets/images/icon.png'

const User = (props) => {
    const onFollow = () => {
        props.follow(props.user.id)
    }
    const onUnfollow = () => {
        props.unfollow(props.user.id)
    }

    let path = '/profile/' + props.user.id
    return (
        <div className="list-group-item list-group-item-light list-group-item-action">
            <NavLink to={path}>
                <img src={props.user.photos.small ? props.user.photos.small : icon}
                     alt='...' className="user-icon"/>
                <span className="ml-2 text-dark">{props.user.name}</span>
            </NavLink>
            <div  className="float-right pt-2">
                {props.user.followed 
                    ? <button onClick={onUnfollow} className="btn btn-sm btn-outline-secondary"
                            disabled={props.disabledId.some((id) => id === props.user.id)}>Unfollow</button> 
                    : <button onClick={onFollow} className="btn btn-sm btn-outline-secondary"
                            disabled={props.disabledId.some((id) => id === props.user.id)}>Follow</button>}
            </div>
        </div>
    )
}
export default User