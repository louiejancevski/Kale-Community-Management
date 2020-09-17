import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
    const [text, setText] = useState('')

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Leave a comment</h4>
                        </div>
                        <div className="card-body">
                            <form
                                className="form my-1"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    addComment(postId, { text })
                                    window.scrollTo(0, 0)
                                    setText('')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Content
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="5"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            required
                                            maxLength="150"
                                            className="w-100 form-control"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="text-center">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="Post comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm)
