import React, { useEffect, useState } from 'react';
import wsicon from '../windspeed.png';
import visicon from '../visibility.png';
import humicon from '../humidity.png';
import Loading from './Loading';

export default function CurrentWeather() {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    const apiKey = '4212d24e9774fbfd9a59d2da3e816ae2';
    let timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = hour + ':' + min + ' hrs'
        return time;
    }
    useEffect(() => {
        const fetchData = async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            const data = await fetch(url);
            const json = await data.json();
            console.log(json);
            setState({
                data: [json],
                loading: false
            })
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(fetchData);
        }
    }, [])
    return (
        <div className="App">
            {state.loading && <Loading/>}
            {state.data.map((wt) => {
                return (
                    <div key={wt.id}>
                        <div className='row d-flex align-items-center'>
                            <div className="col-auto text-primary">
                                <iconify-icon icon="material-symbols:location-on-outline-rounded" style={{ fontSize: '30px' }}></iconify-icon>
                            </div>
                            <div className="col-auto p-0 m-0 me-auto">
                                <p className="lead text-primary pt-0 pb-2 m-0">{wt.name}, {wt.sys.country}</p>
                            </div>
                            <div className="col-auto">
                                <p className='pt-2'>As of {timeConverter(wt.dt)}</p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center m-0 p-3 rounded" style={{ backgroundColor: '#d6f3fc' }}>
                            
                            <div className="col-8">
                                <h1 className="display-1 fw-bold pb-0 mb-0">{Math.round(wt.main.temp)} &#8451;</h1>
                                <p className='pb-2 mb-0'>Feels like: {Math.round(wt.main.feels_like)} &#8451;</p>
                                <img src={`http://openweathermap.org/img/wn/${wt.weather[0].icon}@2x.png`} alt="" className="img-fluid" />
                                <p className="lead fw-bold">{wt.weather[0].main}</p>
                                <p>Max: {Math.round(wt.main.temp_max)} &#8451; | Min: {Math.round(wt.main.temp_min)} &#8451; </p>
                            </div>
                            <div className="col-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <img src={wsicon} alt="" className="img-fluid" width='24' />
                                    <p className='pb-0 mb-0'>{wt.wind.speed} m</p>
                                </div>
                                <div className="d-flex gap-2 mt-3 align-items-center">
                                    <img src={visicon} alt="" className="img-fluid" width='24' />
                                    <p className='pb-0 mb-0'>{(wt.visibility) / 1000} Km</p>
                                </div>
                                <div className="d-flex gap-2 mt-3 align-items-center">
                                    <img src={humicon} alt="" className="img-fluid" width='24' />
                                    <p className='pb-0 mb-0'>{wt.main.humidity}%</p>
                                </div>
                            </div>
                        </div>


                    </div>
                )
            })}

        </div>
    )
}
