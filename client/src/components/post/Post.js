import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import CommentForm from '../post/CommentForm'
import CommentItem from '../post/CommentItem'
import { getPost } from '../../actions/post'
import Navbar from '../layout/Navbar'
import Alert from '../layout/Alert'

const Post = ({ history, getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost, match.params.id])

    return loading || post === null ? (
        <Spinner />
    ) : (
        <>
            <Navbar />
            <div className="header">
                <div className="section">
                    <Alert />
                    <div className="section-header">
                        <h1>Post</h1>
                        <div className="section-header-breadcrumb">
                            <div>
                                <Link to="/posts" className="btn btn-secondary mr-3">
                                    Back to posts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostItem post={post} discussion={true} showActions={false} />
            <CommentForm postId={post._id} />
            <div className="row">
                {post.comments.map((comment) => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
        </>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
