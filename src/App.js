import React, { Component } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Signup from './pages/Signup'
import Rooms from './pages/Rooms'
import { auth } from './services/firebase'
import { dispatch } from './services/store'
import { updateCurrentUser } from './actions/currentUser'
import { getPath } from './helpers/routes'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => 
  <Route 
    {...rest}
    render={props => authenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    }
  />

const PublicRoute = ({ component: Component, authenticated, ...rest }) =>
  <Route 
    {...rest}
    render={props => !authenticated
      ? <Component {...props} />
      : <Redirect to={getPath('rooms')} />
    }
  />

class App extends Component {
  state = {
    authenticated: false,
    loading: true
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ 
          authenticated: true,
          loading: false
        })
        dispatch(updateCurrentUser(user))
      } else {
        this.setState({ 
          authenticated: false,
          loading: false
        })
      }
    })
  }

  render() {
    const { authenticated, loading } = this.state
    return loading 
      ? <h2>Loading...</h2>
      : (
        <Router>
          <Switch>
            <Route exact path={getPath('home')} component={Home}></Route>
            <PrivateRoute path={getPath('rooms')} authenticated={authenticated} component={Rooms}></PrivateRoute>
            <PrivateRoute path={getPath('room', { code: ':code' })} authenticated={authenticated} component={Chat}></PrivateRoute>
            <PublicRoute path={getPath('signup')} authenticated={authenticated} component={Signup}></PublicRoute>
          </Switch>
        </Router>
      )
  }
}

export default App
