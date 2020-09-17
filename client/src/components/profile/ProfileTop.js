import React from 'react'
import PropTypes from 'prop-types'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import LanguageIcon from '@material-ui/icons/Language'

const ProfileTop = ({
    profile: {
        status,
        company,
        location,
        website,
        social,
        user: { name, avatar }
    }
}) => {
    return (
        <div className="card">
            <div className="profile-top text-center pb-4">
                <img className="my-1" src={avatar} alt="" />
                <h1>{name}</h1>
                <h2>
                    {status} {company && <span> at {company}</span>}
                </h2>

                <div className="profile-icons my-1">
                    {website && (
                        <a
                            className="website"
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LanguageIcon className="website" />
                        </a>
                    )}
                    {social && social.twitter && (
                        <a
                            className="twitter"
                            href={social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TwitterIcon className="twitter" />
                        </a>
                    )}
                    {social && social.facebook && (
                        <a
                            className="facebook"
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon className="facebook" />
                        </a>
                    )}
                    {social && social.linkedin && (
                        <a
                            className="linkedin"
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="linkedin" />
                        </a>
                    )}
                    {social && social.youtube && (
                        <a
                            className="youtube"
                            href={social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <YouTubeIcon className="youtube" />
                        </a>
                    )}
                    {social && social.instagram && (
                        <a
                            className="instagram"
                            href={social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon className="instagram" />
                        </a>
                    )}
                </div>
                <p className="mt-4">
                    <LocationOnIcon /> {location && <span>{location}</span>}
                </p>
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop
