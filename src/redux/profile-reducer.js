import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    profile: null,
    posts: [
    {id: 1, post: 'First post', likesCount: 12},
    {id: 2, post: 'Second post', likesCount: 13},
    {id: 3, post: 'Third post', likesCount: 11}
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId)
            }
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        default: 
            return state
    } 
}

export const setProfile = (profile) => ({ type: 'SET_PROFILE', profile})
export const setStatus = (status) => ({ type: 'SET_STATUS', status})
export const addPostActionCreator = (newPostText) => ({ type: 'ADD_POST', newPostText })
export const deletePost = (postId) => ({ type: 'DELETE_POST', postId })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setProfile(data))
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setStatus(data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((res) => {
                if (res.data.resultCode === 0) { 
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer