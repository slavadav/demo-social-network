import React from 'react'
import Users from './Users'
import { fetchUsers, 
        follow, 
        unfollow, 
        toggleFollowProgress } from '../../redux/users-reducer'
import { getUsers, 
        getCurrentPage, 
        getPageSize, 
        getTotalUsersCount, 
        getIsFetching, 
        getDisabledId } from '../../redux/users-selectors'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.fetchUsers(currentPage, pageSize)
    }

    onChangePage = (pageNum) => {
        const {pageSize} = this.props
        this.props.fetchUsers(pageNum, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users /* users={this.props.users}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        disabledId={this.props.disabledId} */ 
                        {...this.props}
                        onChangePage={this.onChangePage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        toggleFollowProgress={this.props.toggleFollowProgress} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        disabledId: getDisabledId(state)
    }
}

export default connect(mapStateToProps, 
    { follow, unfollow, toggleFollowProgress, fetchUsers })(UsersContainer)


/* 
const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        currentPage: state.usersReducer.currentPage,
        amountOnPage: state.usersReducer.amountOnPage,
        totalUsersCount: state.usersReducer.totalUsersCount,
        isFetching: state.usersReducer.isFetching
        disabledId: state.usersReducer.disabledId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setCurrentPage: (currentPage) => {
            dispatch(serCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
 */


/* const DialogsContainer = () => {
    return (
    <StoreContext.Consumer>
        { store => {
            const state = store.getState()
            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const updateNewMessage = (newMessageElement) => {
                store.dispatch(updateMessageActionCreator(newMessageElement))
            }
    
            return <Dialogs dialogsPage={state.dialogsPage}
                    updateNewMessage={updateNewMessage}
                    addMessage={addMessage}/>
            }
        }
    </StoreContext.Consumer>
    )
} */