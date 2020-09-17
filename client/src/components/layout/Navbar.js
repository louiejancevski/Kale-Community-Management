import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard'
import DescriptionIcon from '@material-ui/icons/Description'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BuildIcon from '@material-ui/icons/Build'

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    const authLinks = (
        <>
            <Link className="dropdown-item" to={`/profile/${user?._id}`}>
                <AccountCircleIcon />
                Profile
            </Link>

            <Link className="dropdown-item" to="/posts">
                <DescriptionIcon />
                Posts
            </Link>

            <Link className="dropdown-item" to="/profiles">
                <DeveloperBoardIcon /> Developers
            </Link>

            <Link className="dropdown-item" to="/account">
                <BuildIcon /> Account
            </Link>

            <DropdownItem divider />
            <button className="navbar-link dropdown-item text-danger" onClick={logout}>
                <i className="fas fa-sign-out-alt" /> <span className="ml-1 hide-sm">Logout</span>
            </button>
        </>
    )

    const guestLinks = (
        <>
            <Link className="dropdown-item" to="/register">
                Register
            </Link>

            <Link className="dropdown-item" to="/login">
                Login
            </Link>
        </>
    )

    return (
        <>
            <div className="navbar-bg"> </div>
            <nav className="navbar navbar-expand-lg main-navbar">
                <div className="form-inline mr-auto">
                    <ul className="navbar-nav mr-3">
                        <li>
                            <Link to="/" className="navbar-brand sidebar-gone-hide">
                                Kale
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                        {isAuthenticated ? (
                            <Link className="nav-link " to="/dashboard">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <ul className="navbar-nav navbar-right">
                                    <li className="nav-item active">
                                        <Link className="nav-link " to="/login">
                                            Login
                                        </Link>
                                    </li>

                                    <li className="nav-item active">
                                        <Link className="nav-link " to="/register">
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </li>
                    {isAuthenticated && (
                        <>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <img
                                        src={user?.avatar}
                                        alt={`${user?.name} profile avatar`}
                                        className="mr-2 navbar-avatar"
                                    />
                                    Hi, {user && user?.name.split(' ')[0]}{' '}
                                    <span className="caret"></span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {isAuthenticated ? authLinks : guestLinks}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
