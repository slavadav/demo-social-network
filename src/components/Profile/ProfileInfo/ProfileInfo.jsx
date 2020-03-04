import React, { useState } from 'react'
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
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || icon} alt="" 
                    className="pl-2 pb-2" width="200"/>
            </div>
            { isOwner && <div className="custom-file row">
                <input onChange={onMainPhotoSelected}
                        type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label col-6" htmlFor="customFile">Choose file</label>
            </div>}

            <div className="pl-3">
                <b>Status</b>: 
                <ProfileStatus userId={profile.userId} 
                                status={status}
                                isOwner={isOwner}
                                updateStatus={updateStatus} />
            </div>

            {editMode 
                ? <ProfileDataReduxForm onSubmit={onFormSubmit}
                                        initialValues={profile}
                                        profile={profile}/>
                : <ProfileData  profile={profile} 
                                    isOwner={isOwner}
                                    goToEditMode={() => { setEditMode(true) }}/>}           
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className="p-2">
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
        { isOwner && <button onClick={goToEditMode}
                            className="btn btn-sm btn-secondary">Edit</button> }
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className="pl-3"><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo