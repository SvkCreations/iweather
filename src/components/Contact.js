import React from 'react'
import contact from '../contact.gif'

export default function Contact() {
    return (
        <div id='contact'>
            <div className="row featurette mt-5 d-flex align-items-center">
                <div className="col-md-5 order-md-2">
                    <h2 className="featurette-heading display-6 fw-bold">Contact me</h2>
                    <div className="my-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-outline-primary col-4 mt-2 mt-md-3">Send</button>
                    <div className="row d-flex align-items-center mt-5 px-3 px-md-0">
                        <div className="col-5 bg-primary" style={{ height: '2px' }}>
                        </div>
                        <div className='col-2'>
                            <p className='text-center p-0 m-0'>Or</p>
                        </div>
                        <div className="col-5 bg-primary" style={{ height: '2px' }}>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className="lead text-center">Connect</p>
                    <ul className="nav justify-content-center list-unstyled d-flex">
                        <li className=""><a className="text-primary" href="#"><iconify-icon icon="ic:outline-facebook" style={{ fontSize: "30px" }}></iconify-icon></a></li>
                        <li className="ms-3"><a className="text-primary" href="#"><iconify-icon icon="mdi:instagram" style={{ fontSize: "28px" }}></iconify-icon></a></li>
                        <li className="ms-3"><a className="text-primary" href="#"><iconify-icon icon="ic:baseline-whatsapp" style={{ fontSize: "28px" }}></iconify-icon></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-7 me-auto">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={contact}></img>

                </div>
            </div>
        </div>
    )
}
