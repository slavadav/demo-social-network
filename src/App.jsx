import React from 'react'
import { Route, withRouter, BrowserRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import './App.css'
import store from './redux/redux-store'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import {withSuspense} from './hoc/withSuspense'

const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' 
            render = { withSuspense(ProfileContainer) } />
          <Route path='/dialogs' 
            render = { withSuspense(DialogsContainer) } />
          <Route path='/users' 
            render = { () => <UsersContainer />} />
          <Route path='/login' 
            render = { () => <Login />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp
}))(App)

const MainApp = () => (
  <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
)

export default MainApp