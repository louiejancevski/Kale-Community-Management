import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Experience from './Experience'
import Education from './Education'
import { getCurrentProfile } from '../../actions/profile'
import Navbar from '../layout/Navbar'
import Alert from '../layout/Alert'
import noProfile from '../../img/dashboard/noProfile.svg'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {
    useEffect(() => {
        document.title = `Dashboard`
        getCurrentProfile()
    }, [getCurrentProfile])

    return (
        <>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>

            {profile !== null ? (
                <>
                    <Experience user={user} experience={profile.experience} />
                    <Education user={user} education={profile.education} />
                </>
            ) : (
                <>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <img
                            style={{ maxWidth: '300px' }}
                            className="img-fluid mt-4 mb-4"
                            src={noProfile}
                            alt="No profile"
                        />
                        <p>You haven't created your profile yet</p>
                        <Link to="/create-profile" className="btn btn-primary my-1">
                            Create Profile
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
