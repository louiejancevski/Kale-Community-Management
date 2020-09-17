import React, { Fragment } from 'react'
import notFound404 from '../../img/notFound404.svg'

const NotFound = () => {
    return (
        <Fragment>
            <section className="section">
                <div className="container mt-5">
                    <div className="page-error">
                        <div className="page-inner">
                            <img
                                src={notFound404}
                                alt="404 Page not found"
                                className="img-fluid"
                                style={{ maxHeight: '330px' }}
                            />
                            <div className="page-description mt-5">
                                The page you were looking for couldn't be found.
                                <div className="mt-3">
                                    <a href="/">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NotFound
