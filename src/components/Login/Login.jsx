import React from 'react'
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "E-mail", [required])}
            {createField(Input, "password", "Password", [required], {type: "password"})}
            {createField("input", "rememberMe", null, [], {type: "checkbox"}, 'Remember me')}
            {/* <div>
                <Field type="input" placeholder={"E-mail"}
                component={Input} name={"email"}
                validate={[required]} />
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} 
                component={Input} name={"password"} 
                validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={"input"} name={"rememberMe"} /> Remember me
            </div> */}
            {error && <div>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onFormSubmit = (formData) => {
        props.login(formData)
    }
    
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onFormSubmit}/>
        </div>
    )
}

export default compose(
    connect((state) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }, { login }
    ))(Login)