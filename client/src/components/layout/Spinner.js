import React from 'react'
import spinner from '../../img/spinner.gif'

export default () => (
    <>
        <div className="spinner h-100">
            <img
                src={spinner}
                style={{ width: '90px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    </>
)
