import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import Navbar from '../../components/layout/Navbar'
import Alert from '../../components/layout/Alert'

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const { school, degree, fieldofstudy, from, to, description, current } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <Fragment>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        <h1>Add Education</h1>
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
                            addEducation(formData, history)
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="school" className="control-label">
                                School <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="school"
                                value={school}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="degree" className="control-label">
                                Degree or Certificate <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="degree"
                                value={degree}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="degree" className="control-label">
                                Field of Study <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="fieldofstudy"
                                value={fieldofstudy}
                                onChange={onChange}
                                required
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
                                Program Description{' '}
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(AddEducation)
