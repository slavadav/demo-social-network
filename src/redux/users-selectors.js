import { createSelector } from 'reselect'

const getUsersSelector = (state) => {
    return state.usersReducer.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users 
})

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}
export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}
export const getIsFetching = (state) => {
    return state.usersReducer.isFetching
}
export const getDisabledId = (state) => {
    return state.usersReducer.disabledId
}