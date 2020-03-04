import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {
    const postElements = props.profilePage.posts.map(item => 
        (<Post post={item.post} likes={item.likesCount} key={item.id} />))

    const newPostElement = React.createRef()

    const addPost = () => {
        if (newPostElement.current.value.trim()) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updatePostText(text)
    }

    return (
        <div>
        <h4 className="text-primary mb-3">My posts</h4>
            <form className="form-group">
                <input onChange={onPostChange} 
                          ref={newPostElement} 
                          value={props.profilePage.postText} 
                          placeholder='New post'
                          className="form-control my-2" />
                <button onClick={addPost}
                        className="btn btn-sm btn-primary ml-3 mb-3">
                    Send
                </button>
            </form>
            { postElements }
        </div>
    )
}

export default MyPosts