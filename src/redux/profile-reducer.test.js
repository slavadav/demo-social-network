import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

const initialState = {
    posts: [
    {id: 1, post: 'First post', likesCount: 12},
    {id: 2, post: 'Second post', likesCount: 13},
    {id: 3, post: 'Third post', likesCount: 11}
    ],
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('qqqqqqqqq')

    // 2. action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(4)
})

it('length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(2)
})


/* 
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
         case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            } 
        case ADD_POST: {
            const newPost = {
                id: '4',
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
//export const updateNewPostActionCreator = (newText) => ({ type: 'UPDATE_NEW_POST_TEXT', newText })

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

export default profileReducer */