import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({ name, email, password })
        }
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
                                <h4>Register</h4>
                            </div>

                            <div className="card-body">
                                <form className="form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
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
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                            className="form-control"
                                            tabIndex="2"
                                        />
                                        <div className="invalid-feedback">
                                            Please fill in your email
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={onChange}
                                            className="form-control"
                                            minLength="6"
                                            tabIndex="3"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please fill in your email
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="control-label">
                                            Confirm Password
                                        </label>

                                        <input
                                            type="password"
                                            name="password2"
                                            value={password2}
                                            onChange={onChange}
                                            minLength="6"
                                            className="form-control"
                                            tabIndex="4"
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
                                            tabIndex="5"
                                            value="Register"
                                        />
                                    </div>
                                    <div className="mt-2 pb-1 text-center">
                                        Already have an account?
                                        <Link tabIndex="6" className="ml-1" to="/login">
                                            Log In
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

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
