import React from 'react'
import { Route, withRouter, HashRouter, Redirect, Switch } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/redux-store'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reducer'
import {withSuspense} from './hoc/withSuspense'
//import Preloader from './components/common/Preloader/Preloader'

const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.log('Some error occured', promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  render() {
    if (!this.props.initialized) {
      return null //<Preloader />
    }

    return (
      <div className="container-fluid pt-3">
        <HeaderContainer />
        <div className="container-fluid bg-light row">
          <div className="col-2 p-3"><Navbar /></div>
          <div className="col-10 p-3">
            <Switch>
              <Route exact path='/' 
                render = { () => <Redirect to={'/profile'} /> } />
              <Route path='/profile/:userId?' 
                render = { withSuspense(ProfileContainer) } />
              <Route path='/dialogs' 
                render = { withSuspense(DialogsContainer) } />
              <Route path='/users' 
                render = { () => <UsersContainer />} />
              <Route path='/login' 
                render = { () => <Login />} />
              <Route path='*' 
                render = { () => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
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
  <HashRouter>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </HashRouter>
)

export default MainApp