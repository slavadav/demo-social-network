import React from 'react'
import s from './ProfileInfo.module.css'
//import headerImage from '../../../assets/images/header_image.png'
import icon from '../../../assets/images/icon.png'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            {/* <div>
                <img src={headerImage}  alt="" className={s.headerImage}/>
            </div> */}
            <div className={s.discription}>
                <img src={profile.photos.small ? profile.photos.small : icon} alt="" />
                <div>
                    {profile.fullName}
                </div>
                <div>
                    <ProfileStatus userId={profile.userId} 
                                   status={status}
                                   updateStatus={updateStatus} />
                </div>
            </div>            
        </div>
    )
}

export default ProfileInfo