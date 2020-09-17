import React from 'react'
import Navbar from '../../layout/Navbar'
import Alert from '../../layout/Alert'
import { deleteAccount } from '../../../actions/profile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Account = ({ deleteAccount }) => {
    return (
        <>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        <h1>Account</h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4>Delete Account</h4>
                </div>

                <div className="card-body">
                    <p>By deleting your account, all of your stored data will be deleted.</p>
                    <p>This action is irreversible once done.</p>
                    <div className="text-center mt-4 mb-3">
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            Delete my account
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-2 text-center"></div>
        </>
    )
}

Account.propTypes = {
    deleteAccount: PropTypes.func.isRequired
}

export default connect(null, { deleteAccount })(Account)
