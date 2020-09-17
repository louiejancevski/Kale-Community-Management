import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../actions/post'
import ChatIcon from '@material-ui/icons/Chat'
import DeleteIcon from '@material-ui/icons/Delete'

const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, title, text, name, avatar, user, likes, comments, date },
    showActions,
    discussion
}) => (
    <>
        <div className={`${!discussion ? 'col-12 col-md-12 col-lg-6 mb-4' : null}`}>
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
                        <span onClick={() => deletePost(_id)} className="card-header-action">
                            <DeleteIcon />
                            <span className="d-none d-md-inline">Delete</span>
                        </span>
                    )}
                </div>
                <div className="card-body">
                    <div className="post-title">{title && title}</div>
                    <p className="my-1">
                        {!discussion ? (
                            text.length > 200 ? (
                                <>
                                    {`${text.substring(0, 200)}... `}
                                    <Link to={`/posts/${_id}`}>Read more</Link>
                                </>
                            ) : (
                                text
                            )
                        ) : (
                            text
                        )}
                    </p>

                    {showActions && (
                        <>
                            <div className="post-actions-grid">
                                <button
                                    className="action-button"
                                    onClick={() => addLike(_id)}
                                    type="button"
                                >
                                    <i className="fas fa-thumbs-up" />{' '}
                                    <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                                </button>

                                <button
                                    className="action-button"
                                    onClick={() => removeLike(_id)}
                                    type="button"
                                >
                                    <i className="fas fa-thumbs-down" />
                                </button>

                                <Link to={`/posts/${_id}`} className="text-center action-button">
                                    <ChatIcon />{' '}
                                    {comments.length > 0 && (
                                        <span className="comment-count">{comments.length}</span>
                                    )}
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
)

PostItem.defaultProps = {
    showActions: true,
    discussion: false
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool,
    discussion: PropTypes.bool
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)
