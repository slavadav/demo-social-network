import MyPosts from './MyPosts'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostFormData) => {
            dispatch(addPostActionCreator(newPostFormData))
        },
        /* updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        } */
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer




/* const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
        {
            store => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                const onPostChange = (text) => {
                    const action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        profilePage={state.profilePage}/>
            }
        }
        </StoreContext.Consumer>
    )
} */
