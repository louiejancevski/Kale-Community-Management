import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
import { getProfileById } from '../../actions/profile'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])

    return (
        <>
            {profile === null ? (
                <>
                    <Spinner />
                </>
            ) : (
                <>
                    <Navbar />
                    <div className="header">
                        <div className="section">
                            <div className="section-header">
                                <h1>{profile.user.name}'s Profile</h1>

                                <div className="section-header-breadcrumb">
                                    <div>
                                        {auth.isAuthenticated &&
                                            auth.loading === false &&
                                            auth.user._id === profile.user._id && (
                                                <Link
                                                    to="/edit-profile"
                                                    className="btn btn-primary"
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="profile-grid my-1">
                            <ProfileTop profile={profile} />
                            <ProfileAbout profile={profile} />
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Education</h4>
                                        </div>
                                        <div className="card-body">
                                            {profile.education.length > 0 ? (
                                                <>
                                                    {profile.education.map((education) => (
                                                        <Fragment key={education._id}>
                                                            <ProfileEducation
                                                                education={education}
                                                            />
                                                            <hr className="my-4" />
                                                        </Fragment>
                                                    ))}
                                                </>
                                            ) : (
                                                <p className="text-muted">
                                                    No education credentials has been provided by
                                                    this user.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Experience</h4>
                                        </div>
                                        <div className="card-body">
                                            {profile.experience.length > 0 ? (
                                                <>
                                                    {profile.experience.map((experience) => (
                                                        <Fragment key={experience._id}>
                                                            <ProfileExperience
                                                                experience={experience}
                                                            />
                                                            <hr className="my-4" />
                                                        </Fragment>
                                                    ))}
                                                </>
                                            ) : (
                                                <p className="text-muted">
                                                    No experience credentials has been provided by
                                                    this user.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {profile.githubusername && (
                                <ProfileGithub username={profile.githubusername} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
