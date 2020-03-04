import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    disabledId: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, 
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, 
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                disabledId: action.isFetching
                    ? [...state.disabledId, action.userId]
                    : state.disabledId.filter((id) => id !== action.userId)
            }
        default: 
            return state
    } 
}


export const setUsers = (users) => ({ type: 'SET_USERS', users})
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCount = (totalCount) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount})
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleFollowProgress = (isFetching, userId) => ({ type: 'TOGGLE_FOLLOW_PROGRESS', isFetching, userId})
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const fetchUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.fetchUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))   
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowProgress(true, userId))
    const res = await apiMethod(userId)
    
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowProgress(false, userId))
} 

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC)    
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowAC)
}

export default usersReducer