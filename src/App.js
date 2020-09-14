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
import Login from './pages/Login'
import { auth } from './services/firebase'
import { dispatch } from './services/store'
import { updateCurrentUser } from './actions/currentUser'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => 
  <Route 
    {...rest}
    render={props => authenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    }
  />

const PublicRoute = ({ component: Component, authenticated, ...rest }) =>
  <Route 
    {...rest}
    render={props => !authenticated
      ? <Component {...props} />
      : <Redirect to="/chat" />
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
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/chat" authenticated={authenticated} component={Chat}></PrivateRoute>
            <PublicRoute path="/signup" authenticated={authenticated} component={Signup}></PublicRoute>
            <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute>
          </Switch>
        </Router>
      )
  }
}

export default App
