import React from 'react';
import notFound from '../notFound.gif'

export default function NotFound() {
    return (
        <div>
            <div className="row d-felx align-items-center justify-content-center">
                <div className="col-auto mx-auto">
                <img src={notFound} alt="" className="img-fluid" width='200' />

                </div>
                <p className="lead fw-bold text-center mt-4 mt-md-5">City with that name not found!</p>
                    <p className='text-center col-10'>Make sure that the name of the city is spelled correctly Or try with a better-known city name.</p>
            </div>
        </div>
    )
}
