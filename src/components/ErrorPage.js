import React from 'react';
import error from '../error.gif'
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className='row d-flex align-items-center justify-content-center gap-5' style={{width:'100%', height:'100%'}}>
      <div className="col">
        <img src={error} alt="" className="img-fluid" />
      </div>
      <div className="col">
        <p className="lead fw-bold text-center">Page not Found</p>
        <Link className="btn btn-primary" to='/iweather'>Back to home</Link>
      </div>
    </div>
  )
}
