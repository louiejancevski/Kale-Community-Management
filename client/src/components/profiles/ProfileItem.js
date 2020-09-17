import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills,
        social,
        githubusername,
        bio
    }
}) => {
    return (
        <>
            <div className="col-12 col-lg-6 mb-4">
                <div className="card author-box card-primary h-100">
                    <div className="card-body">
                        <div className="author-box-left">
                            <img
                                src={avatar}
                                alt={`${name} avatar`}
                                className="rounded-circle author-box-picture"
                            />

                            <div className="clearfix"></div>
                        </div>
                        <div className="author-box-details">
                            <div className="author-box-name">
                                <Link to={`/profile/${_id}`}>
                                    {name} - {location && <span>{location}</span>}{' '}
                                </Link>
                            </div>
                            <div className="author-box-job">
                                {status} {company && <span> at {company}</span>}
                            </div>

                            <div className="author-box-description">
                                <p>{bio}</p>
                            </div>

                            <div className="author-box-job">Skills:</div>
                            <div className="mt-3">
                                {skills.slice(0, 4).map((skill, index) => (
                                    <li key={index} className="text-primary">
                                        <i className="fas fa-check" /> {skill}
                                    </li>
                                ))}
                            </div>

                            <div className="float-right mt-sm-0 mt-3">
                                <Link to={`/profile/${_id}`} className="btn btn-primary">
                                    View Profile <i className="fas fa-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
