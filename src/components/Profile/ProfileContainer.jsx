import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Profile from './Profile'
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
    renderProfile() {
        let userId = this.props.match.params.userId
        
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push('/login') 
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount () {
        this.renderProfile()
    }
    componentDidUpdate (prevProps, prevState) {  
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.renderProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile { ...this.props }/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        authUserId: state.authReducer.id,
        isAuth: state.authReducer.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)