import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'
import Navbar from '../../components/layout/Navbar'
import Alert from '../../components/layout/Alert'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
}

const ProfileForm = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
    match,
    auth: { user }
}) => {
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        if (!profile) getCurrentProfile()
        if (!loading && profile) {
            const profileData = { ...initialState }
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key]
            }
            for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key]
            }
            if (Array.isArray(profileData.skills))
                profileData.skills = profileData.skills.join(', ')
            setFormData(profileData)
        }
    }, [loading, getCurrentProfile, profile])

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        createProfile(formData, history, profile ? true : false)
    }

    return (
        <>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        {match.url.includes('edit-profile') ? (
                            <h1>Edit profile</h1>
                        ) : (
                            <h1>Create profile</h1>
                        )}

                        <div className="section-header-breadcrumb">
                            <div>
                                {match.url.includes('edit-profile') ? (
                                    <Link
                                        to={`/profile/${user._id}`}
                                        className="btn btn-secondary mr-3"
                                    >
                                        Go back
                                    </Link>
                                ) : (
                                    <Link to="/dashboard" className="btn btn-secondary mr-3">
                                        Go back
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
                                Skills <span>*</span>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="skills"
                                value={skills}
                                onChange={onChange}
                            />
                            <small className="text-muted form-text">
                                Please use comma separated values (ex: HTML, CSS, JavaScript, PHP)
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
                                Professional Status <span>*</span>
                            </label>
                            <select
                                className="form-control"
                                name="status"
                                value={status}
                                onChange={onChange}
                            >
                                <option>Select Professional Status</option>
                                <option value="Developer">Developer</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Senior Developer">Senior Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Student or Learning">Student or Learning</option>
                                <option value="Instructor">Instructor or Teacher</option>
                                <option value="Intern">Intern</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
                                Company
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="company"
                                value={company}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
                                Bio
                            </label>
                            <textarea
                                className="form-control"
                                name="bio"
                                value={bio}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
                                Website
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="website"
                                value={website}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="control-label">
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
                            <label htmlFor="password" className="control-label">
                                Github Username
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="githubusername"
                                value={githubusername}
                                onChange={onChange}
                            />
                            <small className="form-text text-muted">
                                Your 5 latest repositories will show on your profile
                            </small>
                        </div>

                        <div className="card-header p-0">
                            <h4> Add social links</h4>
                        </div>

                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="form-group social-input">
                                    <label htmlFor="password" className="control-label">
                                        <TwitterIcon className="twitter" />
                                        Twitter URL
                                    </label>
                                    <input
                                        className="form-control"
                                        type="url"
                                        name="twitter"
                                        value={twitter}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group social-input">
                                    <label htmlFor="password" className="control-label">
                                        <FacebookIcon className="facebook" />
                                        Facebook URL
                                    </label>

                                    <input
                                        className="form-control"
                                        type="url"
                                        name="facebook"
                                        value={facebook}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group social-input">
                                    <label htmlFor="password" className="control-label">
                                        <YouTubeIcon className="youtube" />
                                        YouTube URL
                                    </label>

                                    <input
                                        className="form-control"
                                        type="url"
                                        name="youtube"
                                        value={youtube}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group social-input">
                                    <label htmlFor="password" className="control-label">
                                        <LinkedInIcon className="linkedin" />
                                        Linkedin URL
                                    </label>

                                    <input
                                        className="form-control"
                                        type="url"
                                        name="linkedin"
                                        value={linkedin}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group social-input">
                                    <label htmlFor="password" className="control-label">
                                        <InstagramIcon className="instagram" />
                                        Instagram URL
                                    </label>

                                    <input
                                        className="form-control"
                                        type="url"
                                        name="instagram"
                                        value={instagram}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 form-group text-center">
                            {match.url.includes('edit-profile') ? (
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    tabIndex="4"
                                    value="Update profile"
                                />
                            ) : (
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    tabIndex="4"
                                    value="Create profile"
                                />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileForm)
