import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import wsicon from '../windspeed.png';
import visicon from '../visibility.png';
import humicon from '../humidity.png';

export default function WeatherByCity() {
    const { q } = useParams()
    const [state, setState] = useState({
        data: [{
            "coord": {
                "lon": 10.99,
                "lat": 44.34
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 298.48,
                "feels_like": 298.74,
                "temp_min": 297.56,
                "temp_max": 300.05,
                "pressure": 1015,
                "humidity": 64,
                "sea_level": 1015,
                "grnd_level": 933
            },
            "visibility": 10000,
            "wind": {
                "speed": 0.62,
                "deg": 349,
                "gust": 1.18
            },
            "rain": {
                "1h": 3.16
            },
            "clouds": {
                "all": 100
            },
            "dt": 1661870592,
            "sys": {
                "type": 2,
                "id": 2075663,
                "country": "IT",
                "sunrise": 1661834187,
                "sunset": 1661882248
            },
            "timezone": 7200,
            "id": 3163858,
            "name": "Zocca",
            "cod": 200
        }

        ],
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
        const fetchData = async () => {
            let city = q.slice(2)
            console.log(city)
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            const data = await fetch(url);
            const json = await data.json();
            console.log(json);
            setState({
                data: [json],
                loading: false
            })
        }
        fetchData()
    }, [])
    return (
        <div className='mt-5'>
            <div className="row featurette d-flex align-items-center gap-4 gap-md-0">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-bold display-5 col-12 col-md-10">We provide you a World wide Weather Forecast</h2>
                </div>
                <div className="col-md-5">
                    {state.data.map((wt)=>{
                        return(
                            <>
                            <div className='row d-flex align-items-center' key={wt.id}>
                            <div className="col-auto text-primary">
                                <iconify-icon icon="uil:plane-fly" style={{ fontSize: '30px' }}></iconify-icon>
                            </div>
                            <div className="col-auto p-0 m-0 me-auto">
                                <p className="lead text-primary pt-0 pb-2 m-0">{wt.name}, {wt.sys.country}</p>
                            </div>
                            <div className="col-auto">
                                <p>{timeConverter(wt.dt)}</p>
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
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
