import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import { Link } from 'react-router-dom'

export default function Hero() {
    const [query, setQuery] = useState('')
    let handleChange = (e) => {
        setQuery(e.target.value)
    }
    let handleKeyDown=(e)=>{
        if(e.keyCode === 13){
            console.log('Enter Pressed')
            document.getElementById('searchBtn').click()
        }
    }
   
    return (
        <div className='mt-5'>
            <div className="row featurette d-flex align-items-center gap-4 gap-md-0">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-bold display-5 col-12 col-md-10">We provide you a World wide Weather Forecast</h2>
                    <div className="d-flex col-12 col-md-8 my-4 my-md-5">
                        <input className="form-control me-2" type="search" placeholder="Enter city name..." aria-label="Search" value={query} onChange={handleChange} onKeyDown={handleKeyDown} />
                        <Link className="btn btn-outline-primary" id='searchBtn' to={`/q=${query}`}>Search</Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <CurrentWeather />
                </div>
            </div>
        </div>
    )
}
