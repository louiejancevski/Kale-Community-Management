import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const Education = ({ user, education, deleteEducation }) => {
    const educations = education.map((edu) => (
        <div className="d-flex custom-row align-items-center my-4" key={edu._id}>
            <div className="col-4 flex-column flex-lg-row justify-content-lg-around">
                <div className="col-2">
                    <div className="font-weight-bold text-dot">
                        <Link to={`/profile/${user?._id}`}>{edu.school}</Link>
                    </div>
                </div>

                <div className="col-3">
                    <div className="text-muted text-dot d-flex align-items-center">
                        {edu.degree}
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className=" text-muted d-none d-sm-block align-items-center">
                    {' '}
                    <Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> {'  - '}
                    {edu.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>
                    )}
                </div>
            </div>

            <div className="col-2 d-flex">
                <span
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => deleteEducation(edu._id)}
                >
                    Delete
                </span>
            </div>
        </div>
    ))

    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <div className="section">
                    <h2 className="section-title pt-2 mb-3"> Education</h2>
                </div>

                <div className="col-auto p-0">
                    <Link to="/add-education" className="btn btn-primary">
                        <AddCircleIcon style={{ fontSize: '14px', marginBottom: '3px' }} /> Add
                    </Link>
                </div>
            </div>
            <p className="text-muted">These are all your education credentials</p>

            <div>{educations}</div>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education)
