import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div key={props.id} className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ktlwSh8RQGskNFUfNSyfHZYLe-Duiu8BgQMb3JEw9uLV7KpbmA&s'  alt='some value'/>
            {props.post} 
            <span> {props.likes} likes</span>
        </div>
    )
}

export default Post