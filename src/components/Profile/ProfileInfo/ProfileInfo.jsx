import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import icon from '../../../assets/images/icon.png'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileDataReduxForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, authUserId, savePhoto, saveProfile}) => {
    
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const isOwner = profile.userId === +authUserId

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onFormSubmit = (formData) => {
        const res = saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div className={s.content}>            
            <img src={profile.photos.large || icon} alt="" 
                className={s.mainPhoto}/>
            <div>{ isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }</div>

            {editMode 
                ? <ProfileDataReduxForm onSubmit={onFormSubmit}
                                        initialValues={profile}
                                        profile={profile}/>
                : <ProfileData  profile={profile} 
                                    isOwner={isOwner}
                                    goToEditMode={() => { setEditMode(true) }}/>}

            <div className={s.discription}><b>Status</b>: 
                <ProfileStatus userId={profile.userId} 
                                status={status}
                                isOwner={isOwner}
                                updateStatus={updateStatus} />
            </div>           
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.discription}>
        { isOwner && <button onClick={goToEditMode}>Edit</button> }
        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>Looking for a job(Description)</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo