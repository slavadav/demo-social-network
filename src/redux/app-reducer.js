import { getAuthData } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state, 
                initialized: true
            }
        default: 
            return state
    } 
}

export const initializedSuccess = () => ({ type: 'SET_INITIALIZED' })

export const initializeApp = () => (dispatch) => {
    const promiseUserData = dispatch(getAuthData())
    Promise.all([promiseUserData])
        .then(() => dispatch(initializedSuccess()))
}


export default appReducer