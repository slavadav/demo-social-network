import React from 'react'
import icon from '../../../../assets/images/icon.png'

const Post = (props) => {
    return (
        <div key={props.id}>
            <img src={icon} className="user-icon" alt='...'/> 
            <span className="pl-1">{props.post}</span>
        </div>
    )
}

export default Post