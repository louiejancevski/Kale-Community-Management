import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import noProfile from '../../img/dashboard/noProfile.svg'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles()
    }, [getProfiles])

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Navbar />
                    <div className="header">
                        <div className="section">
                            <div className="section-header">
                                <h1>Developers</h1>
                            </div>
                        </div>
                    </div>

                    {profiles.length > 0 ? (
                        <div className="row">
                            {profiles.map((profile) => (
                                <ProfileItem key={profile._id} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                            <img
                                style={{ maxWidth: '300px' }}
                                className="img-fluid mb-4"
                                src={noProfile}
                                alt="No profile"
                            />
                            <p>Nobody has created a profile at this moment</p>
                            <Link to="/create-profile" className="btn btn-primary my-1">
                                Create Profile
                            </Link>
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
