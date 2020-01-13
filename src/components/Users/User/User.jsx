import React from 'react'
import {NavLink} from 'react-router-dom'
import s from '../Users.module.css'
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
        <div className={s.user}>
            <NavLink to={path} activeClassName={s.activeLink}>
                <img src={props.user.photos.small ? props.user.photos.small : icon}
                     alt='some value' className={s.userPhoto}/>
                {props.user.name}, id:{props.user.id}
            </NavLink>
            {props.user.followed 
                ? <button onClick={onUnfollow} 
                          disabled={props.disabledId.some((id) => id === props.user.id)}>Unfollow</button> 
                : <button onClick={onFollow} 
                          disabled={props.disabledId.some((id) => id === props.user.id)}>Follow</button>}
        </div>
    )
}
export default User