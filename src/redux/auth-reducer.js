import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'authReducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }}
        case GET_CAPTCHA_URL_SUCCESS:{
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

export const getCaptchaUrlSuccess = (captchaUrl) => (
    { 
        type: GET_CAPTCHA_URL_SUCCESS, 
        payload: { captchaUrl }
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
        if (res.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Authorization error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    console.log(captchaUrl)
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    } else { console.log('ERROR!!')}
}

export default authReducer