import React from 'react'

const Preloader = () => (
    <div className="d-flex justify-content-center pt-5">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)

export default Preloader