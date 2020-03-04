import React from 'react'
import User from './User/User'
import Paginator from '../common/Paginator/Paginator'

const Users = ({currentPage, pageSize, totalUsersCount, onChangePage, ...props}) => {

    return (
        <div>
            <Paginator  currentPage={currentPage}
                        pageSize={pageSize}
                        totalItemsCount={totalUsersCount}
                        onChangePage={onChangePage}/>
            <div className="row">
            <div className="list-group col-6">
                { props.users
                        .map( user => (<User user={user} 
                                             follow={props.follow} 
                                             unfollow={props.unfollow} 
                                             disabledId={props.disabledId} 
                                             toggleFollowProgress={props.toggleFollowProgress}
                                             key={user.id} />)) }
            </div>
            </div>
        </div>
    )
}


export default Users