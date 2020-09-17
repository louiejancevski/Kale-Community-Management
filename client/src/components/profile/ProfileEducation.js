import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
    <>
        <div className="profile-education">
            <h3>{school}</h3>
            <p>
                <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
                {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
            </p>
            <p>
                <strong>Position: </strong> {degree}
            </p>
            <p>
                <strong>Location: </strong> {fieldofstudy}
            </p>
            <p>
                {description && (
                    <>
                        <strong>Description: </strong>
                        <p> {description}</p>
                    </>
                )}
            </p>
        </div>
    </>
)

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
