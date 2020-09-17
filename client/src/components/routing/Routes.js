import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import ProfileForm from '../profile-forms/ProfileForm'
import AddExperience from '../profile-forms/AddExperience'
import AddEducation from '../profile-forms/AddEducation'
import Account from '../pages/account/Account'
import Profiles from '../profiles/Profiles'
import Profile from '../profile/Profile'
import Posts from '../posts/Posts'
import Post from '../post/Post'
import NotFound from '../layout/NotFound'
import PrivateRoute from '../routing/PrivateRoute'

const Routes = (props) => {
    return (
        <section className="container mb-5 h-100">
            <Switch>
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:id" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/account" component={Account} />
                <PrivateRoute exact path="/create-profile" component={ProfileForm} />
                <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
                <PrivateRoute exact path="/add-education" component={AddEducation} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
