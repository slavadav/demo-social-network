import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'authReducer/SET_USER_DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }}
        default: 
            return state
    } 
}


export const setUserData = (id, login, email, isAuth) => (
    { 
        type: SET_USER_DATA, 
        payload: { id, login, email, isAuth }
    })

export const getAuthData = () => async (dispatch) => {
    const res = await authAPI.auth()
    if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data
        dispatch(setUserData(id, login, email, true))
    }
}

export const login = (loginData) => async (dispatch) => {
    const res = await authAPI.login(loginData)
    if (res.data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Authorization error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    } else { console.log('ERROR!!')}
}

export default authReducer