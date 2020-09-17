import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'
import Navbar from '../../components/layout/Navbar'
import Alert from '../../components/layout/Alert'

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const { company, title, location, from, to, current, description } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <Fragment>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        <h1>Add Experience</h1>
                        <div className="section-header-breadcrumb">
                            <div>
                                <Link to="/dashboard" className="btn btn-secondary mr-3">
                                    Go back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form
                        className="form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            addExperience(formData, history)
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="title" className="control-label">
                                Job Title <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                value={title}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company" className="control-label">
                                Company <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="company"
                                value={company}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location" className="control-label">
                                Location
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="location"
                                value={location}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-switch mb-3">
                                <input
                                    name="current"
                                    checked={current}
                                    value={current}
                                    onChange={() => {
                                        setFormData({ ...formData, current: !current })
                                    }}
                                    type="checkbox"
                                    className="custom-control-input"
                                    tabIndex="3"
                                    id="current"
                                />
                                <label className="custom-control-label" htmlFor="current">
                                    Current
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="from" className="control-label">
                                        From Date <span>*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="from"
                                        value={from}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="to">
                                        To Date
                                    </label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="to"
                                        value={to}
                                        onChange={onChange}
                                        disabled={current}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location" className="control-label">
                                Job Description
                            </label>
                            <textarea
                                className="form-control"
                                name="description"
                                cols="30"
                                rows="5"
                                value={description}
                                onChange={onChange}
                            />
                        </div>

                        <div className="text-center m-3">
                            <input type="submit" className="btn btn-primary my-1" />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(AddExperience)
