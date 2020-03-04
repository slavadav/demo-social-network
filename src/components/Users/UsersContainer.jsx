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
//import Preloader from '../common/Preloader/Preloader'

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
                {/* this.props.isFetching ? <Preloader /> : null */}
                <Users  {...this.props}
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