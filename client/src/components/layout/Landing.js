import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <section className="landing">
            <div className="landing-inner">
                <h1 className="x-large">Kale</h1>
                <p className="lead mb-5">Create communities around your interests</p>
                <div className="buttons">
                    <Link to="/register" className="px-5 btn btn-primary">
                        Register
                    </Link>
                    <Link to="/login" className="px-5 btn btn-light">
                        Login
                    </Link>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
