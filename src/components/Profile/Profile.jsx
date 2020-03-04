import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div className="row">
            <div className="col-6">
                <ProfileInfo profile={props.profile}
                            authUserId={props.authUserId}
                            status={props.status}
                            savePhoto={props.savePhoto}
                            saveProfile={props.saveProfile}
                            updateStatus={props.updateStatus} />
            </div>
            <div className="col-4">
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile