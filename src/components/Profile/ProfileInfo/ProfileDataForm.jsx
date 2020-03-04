import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit} className="form-group">
        <div>
            <button className="btn btn-sm btn-secondary">
                Submit
            </button>
        </div>
        {error && <div>{error}</div>}
        <div>
            <b>Full Name</b>: 
            <Field type={"input"} placeholder={"Your full name"}
                    component={Input} name={"fullName"}
                    validate={[required]} className="form-control"/>
        </div>
        <div>
            <label className="form-check-label" htmlFor="gridCheck">
                <b>Looking for a job</b>: 
            </label>
            <Field type={"checkbox"} id="gridCheck"
                    component={"input"} name={"lookingForAJob"}
                    className="form-check-input ml-2"/>
        </div>
        <div>
            <b>Looking for a job(Description)</b>: 
            <Field type={"textarea"} placeholder={"Write your professional skills"}
                    component={Textarea} name={"lookingForAJobDescription"}
                    validate={[required]} className="form-control"/>
        </div>
        <div>
            <b>About me</b>: 
            <Field type={"textarea"} placeholder={"Write something about you"}
                    component={Textarea} name={"aboutMe"}
                    validate={[required]} className="form-control"/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className="pl-3">
                            <b>{key}</b>: 
                            <Field type={"input"} placeholder={key}
                                    component={Input} name={'contacts.' + key} className="form-control"/>
                        </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profile-info'})(ProfileDataForm)

export default ProfileDataReduxForm