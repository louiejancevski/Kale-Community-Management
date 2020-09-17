import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Routes from './components/routing/Routes'
import { LOGOUT } from './actions/types'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css'

const App = () => {
    useEffect(() => {
        // check for token in LS and load user

        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        store.dispatch(loadUser())

        // Log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
            if (!localStorage.token) store.dispatch({ type: LOGOUT })
        })
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route component={Routes} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App
