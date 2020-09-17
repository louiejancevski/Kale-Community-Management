import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getGithubRepos } from '../../actions/profile'

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    useEffect(() => {
        getGithubRepos(username)
    }, [getGithubRepos, username])

    return (
        <>
            <div className="section">
                <h2 className="section-title mb-4 mt-4"> Github Repositories</h2>
            </div>

            {repos.map((repo) => (
                <div className="d-flex custom-row align-items-center my-4 pt-4 pb-4" key={repo.id}>
                    <div className="col-8 flex-column flex-lg-row justify-content-lg-around">
                        <div>
                            <div className="font-weight-bold text-dot">
                                <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                    {repo.name}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="text-muted text-dot align-items-center">
                                {repo.description}
                            </div>
                        </div>
                    </div>

                    <div className="col-4 d-flex repos-badges">
                        <div>
                            <span className="badge badge-primary">
                                Stars: {repo.stargazers_count}
                            </span>
                            <span className="badge badge-info">
                                Watchers: {repo.watchers_count}
                            </span>
                            <span className="badge badge-light">Forks: {repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
