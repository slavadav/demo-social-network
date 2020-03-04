import MyPosts from './MyPosts'
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer