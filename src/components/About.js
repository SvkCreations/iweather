import React from 'react';
import about from '../about.gif'

export default function About() {
    return (
        <div id='about'>
            <div className="row featurette mt-5 pt-5 d-flex align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading display-6 fw-bold">About Me</h2>
                    <p className="lead col-12 col-md-10">Hello. Welcome to iWeather. So glad you are here. I am Soubhik Ghosh, a web developer. iWeather is a one of the projects created by me for my Portfolio Website. I created this app using React and Bootstrap. The stunning weather API in this web app is from <a href='http://openweathermap.org/' style={{textDecoration:'none'}}>openweathermap.org</a>.<br/><br/>I've kept things simple and minimal in this web app. The main theme color of this website as you can see is Blue. You can connect with me on social media (links given below) or buy me a coffee.☕</p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={about}></img>

                </div>
            </div>
        </div>
    )
}
