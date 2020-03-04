import React from 'react'
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group row">
                <div  className="col-sm-4">
                    <Field type="input" placeholder={"E-mail"}
                    component={Input} name={"email"}
                    validate={[required]} className="form-control"/>
                </div>
                <div>
                    <Field type={"password"} placeholder={"Password"} 
                    component={Input} name={"password"} 
                    validate={[required]} className="form-control" />
                </div>
            </div>
            <div>
                <button className="btn btn-sm btn-secondary">Login</button>
            </div>
            <div className="form-check mt-2">
                <Field type={"checkbox"} 
                       component={"input"} 
                       name={"rememberMe"}
                       className="form-check-input" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                </label>
            </div>
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && 
                <div className="row">
                    <div className="col-2">
                        <Field type={"input"} 
                                component={Input} name={"captcha"} 
                                validate={[required]} className="form-control" />
                    </div>
                    <span className="col-6" >Input symbols</span>
                </div>}
            {error && <div>{error}</div>}
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
            <LoginReduxForm onSubmit={onFormSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

export default compose(
    connect((state) => {
        return {
            isAuth: state.authReducer.isAuth,
            captchaUrl: state.authReducer.captchaUrl
        }
    }, { login }))(Login)