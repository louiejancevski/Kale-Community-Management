import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Write a post</h4>
                        </div>
                        <div className="card-body">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    addPost({ text, title })
                                    setText('')
                                    setTitle('')
                                }}
                            >
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Title
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input
                                            name="text"
                                            cols="30"
                                            rows="5"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Content
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            required
                                            rows="8"
                                            maxLength="450"
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
                                                value="Create Post"
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

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm)
