import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {Textarea} from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
//import { myPosts } from '../../redux/auth-reducer'

const maxLength10 = maxLengthCreator(10)

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter new post"} 
                component={Textarea} name={"newPost"}
                validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
} 

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = React.memo((props) => {
    const postElements = props.profilePage.posts
                        .map(item => (<Post post={item.post} likes={item.likesCount} key={item.id} />))

    const onFormSubmit = (newPostFormData) => {
        props.addPost(newPostFormData.newPost)
    }

    return (
        <div className={style.item}>
            <h4>My posts</h4>
            <NewPostReduxForm onSubmit={onFormSubmit} />
            { postElements }
        </div>
    )
})

export default MyPosts


/* class MyPosts extends React.PureComponent { //autocall shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        const postElements = this.props.profilePage.posts
                            .map(item => (<Post post={item.post} likes={item.likesCount} key={item.id} />))

        const onFormSubmit = (newPostFormData) => {
            this.props.addPost(newPostFormData.newPost)
        }

        return (
            <div className={style.item}>
                <h4>My posts</h4>
                <NewPostReduxForm onSubmit={onFormSubmit} />
                { postElements }
            </div>
        )
    }
}
export default MyPosts */

/* const MyPosts = (props) => {
    const postElements = props.profilePage.posts.map(item => (<Post post={item.post} likes={item.likesCount} key={item.id} />))

    const newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.item}>
            <h4>My posts</h4>
            <div>
                <textarea onChange={onPostChange} 
                          ref={newPostElement} 
                          value={props.profilePage.newPostText} 
                          placeholder='New post'/>
                <button onClick={addPost}>Send</button>
            </div>
            { postElements }
        </div>
    )
} */