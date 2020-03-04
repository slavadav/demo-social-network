import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'

const initialState = {
    profile: null,
    posts: [
    {id: 0, post: 'No API for this App part', likesCount: 1},
    {id: 1, post: 'First post', likesCount: 12},
    {id: 2, post: 'Second post', likesCount: 13},
    {id: 3, post: 'Third post', likesCount: 11}
    ],
    status: '',
    postText: ''
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId)
            }
        case ADD_POST: {
            const newPost = {
                id: Date.now(),
                post: state.postText.trim(),
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }
        }
        case UPDATE_POST: 
            return {
                ...state,
                postText: action.newPostText
            }
        default: 
            return state
    } 
}

export const setProfile = (profile) => ({ type: 'SET_PROFILE', profile})
export const setStatus = (status) => ({ type: 'SET_STATUS', status})
export const savePhotoSuccess = (photos) => ({ type: 'SAVE_PHOTO_SUCCESS', photos})
export const addPostActionCreator = () => ({ type: 'ADD_POST' })
export const updatePostActionCreator = (newPostText) => ({ type: 'UPDATE_POST', newPostText })
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
export const updateStatus = (status) =>  async (dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) { 
            dispatch(setStatus(status))
        }
    } catch(error) {
        console.log(error)
    }
}
export const savePhoto = (photo) => {
    return (dispatch) => {
        profileAPI.savePhoto(photo)
            .then((res) => {
                if (res.data.resultCode === 0) { 
                    dispatch(savePhotoSuccess(res.data.data.photos))
                }
            })
    }
}
export const saveProfile = (profileData) => {
    return (dispatch, getState) => {
        const userId = getState().authReducer.id
        return profileAPI.saveProfile(profileData)
            .then((res) => {
                if (res.data.resultCode === 0) { 
                    dispatch(getProfile(userId))
                } else {
                    const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Invalid profile info input'
                    dispatch(stopSubmit('profile-info', {_error: errorMessage}))
                    return Promise.reject(res.data.messages[0])
                }
            })
    }
}

export default profileReducer