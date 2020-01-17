import React from 'react'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'
import { Input, Textarea, createField } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit} className={s.discription}>
        <div><button>Submit</button></div>
        {error && <div>{error}</div>}
        <div>
            <b>Full Name</b>: {createField(Input, 'fullName', 'Your full name', [required])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField(Input, 'lookingForAJob', null, [], {type: "checkbox"})}
        </div>
        <div>
            <b>Looking for a job(Description)</b>: {createField(Textarea, 'lookingForAJobDescription', 'Write your professional skills', [required])}
        </div>
        <div>
            <b>About me</b>: {createField(Textarea, 'aboutMe', 'Write something about you', [required])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                            <b>{key}</b>: {createField(Input, 'contacts.' + key, key)}
                        </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profile-info'})(ProfileDataForm)

export default ProfileDataReduxForm