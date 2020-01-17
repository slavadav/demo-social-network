import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         authUserId={props.authUserId}
                         status={props.status}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile