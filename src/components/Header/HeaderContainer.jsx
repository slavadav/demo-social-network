import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import Header from './Header'
import { logout } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

export default compose(
    connect((state) => {
        return {
            isAuth: state.authReducer.isAuth,
            login: state.authReducer.login
        }
    }, { logout }))(HeaderContainer)
