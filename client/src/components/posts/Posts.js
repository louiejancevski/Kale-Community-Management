import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import PostForm from './PostForm'
import { getPosts } from '../../actions/post'
import Navbar from '../layout/Navbar'
import Alert from '../layout/Alert'

const Posts = ({ getPosts, post: { posts } }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <>
            <Navbar />

            <div className="header">
                <div className="section">
                    <Alert />

                    <div className="section-header">
                        <h1>Posts</h1>
                    </div>
                </div>
            </div>

            <PostForm />
            <div className="row">
                {posts.map((post) => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
