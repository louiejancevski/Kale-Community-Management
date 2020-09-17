import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../actions/profile'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const Experience = ({ user, experience, deleteExperience }) => {
    const experiences = experience.map((exp) => (
        <div key={exp._id} className="d-flex custom-row align-items-center my-4">
            <div className="col-4 flex-column flex-lg-row justify-content-lg-around">
                <div className="col-2">
                    <div className="font-weight-bold text-dot">
                        <Link to={`/profile/${user?._id}`}>{exp.company}</Link>
                    </div>
                </div>

                <div className="col-3">
                    <div className="text-muted text-dot align-items-center">{exp.title}</div>
                </div>
            </div>

            <div className="col-4">
                <div className="text-muted d-none d-sm-block align-items-center">
                    {' '}
                    <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> {'  - '}
                    {exp.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
                    )}
                </div>
            </div>

            <div className="col-2 d-flex">
                <span
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => deleteExperience(exp._id)}
                >
                    Delete
                </span>
            </div>
        </div>
    ))

    return (
        <>
            <div className="mt-1 d-flex justify-content-between">
                <div className="section">
                    <h2 className="section-title mb-3"> Experience</h2>
                </div>

                <div className="col-auto p-0">
                    <Link to="/add-experience" className="btn btn-primary">
                        <AddCircleIcon style={{ fontSize: '14px', marginBottom: '3px' }} /> Add
                    </Link>
                </div>
            </div>
            <p className="text-muted">These are all your experience credentials</p>

            <div>{experiences}</div>
        </>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience)
