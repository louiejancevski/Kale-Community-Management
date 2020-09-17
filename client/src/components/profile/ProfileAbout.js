import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: { name }
    }
}) => (
    <div className="profile-about">
        {bio && (
            <>
                <div className="card ">
                    <div className="card-header">
                        <h4>Bio</h4>
                    </div>
                    <div className="card-body pt-2 pb-2">
                        <p>{bio}</p>
                        <div className="line" />
                    </div>
                </div>
            </>
        )}

        <div className="skills">
            <div className="card">
                <div className="card-header">
                    <h4>Skill set</h4>
                </div>
                <div className="card-body pb-4">
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div key={index} className="col-4">
                                <i className="fas fa-check mr-1 text-success" /> {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout
