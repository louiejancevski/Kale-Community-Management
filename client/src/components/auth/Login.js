import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import Alert from '../layout/Alert'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        login(email, password)
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <section className="section h-100 landing">
                <div className="d-flex flex-column align-items-center container">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
                        <div className="login-brand mt-5">
                            <Link className="auth-link" to="/">
                                <p className="auth-logo">K</p>
                            </Link>
                        </div>
                        <Alert />
                        <div className="card card-auth">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>

                            <div className="card-body">
                                <form className="form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                            className="form-control"
                                            tabIndex="1"
                                        />
                                        <div className="invalid-feedback">
                                            Please fill in your email
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="control-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={onChange}
                                            minLength="6"
                                            className="form-control"
                                            tabIndex="2"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            please fill in your password
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
                                            tabIndex="3"
                                            value="Login"
                                        />
                                    </div>
                                    <div className="mt-2 pb-1 text-center">
                                        Don't have an account?
                                        <Link tabIndex="4" className="ml-1" to="/register">
                                            Create One
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
