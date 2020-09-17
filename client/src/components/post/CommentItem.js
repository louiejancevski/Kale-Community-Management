import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'
import DeleteIcon from '@material-ui/icons/Delete'

const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment
}) => (
    <>
        <div className="col-12 col-md-12 col-lg-6 mb-4">
            <div className="card h-100">
                <div className="card-header">
                    <Link className="d-flex" to={`/profile/${user}`}>
                        <img className="post-author-img " src={avatar} alt="" />
                        <h4 className="pl-3 post-author-name">{name}</h4>
                    </Link>

                    <span className="post-date">
                        <span>•</span>
                        <Moment className="pl-2" fromNow>
                            {date}
                        </Moment>
                    </span>
                    {!auth.loading && user === auth.user._id && (
                        <span
                            onClick={() => deleteComment(postId, _id)}
                            type="button"
                            className="card-header-action"
                        >
                            <DeleteIcon />
                            <span className="d-none d-md-inline">Delete</span>
                        </span>
                    )}
                </div>
                <div className="card-body">
                    <p className="my-1">
                        {text.length > 150 ? <>{`${text.substring(0, 150)}... `}</> : text}
                    </p>
                </div>
            </div>
        </div>
    </>
)

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
