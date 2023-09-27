import './App.css';
import "bulma/css/bulma.min.css"
import { useState } from "react";
import BackgroundImage from './bg_image.jpg';

function App() {
    const cities = ["Madrid", "Toronto", "Singapore"];

    const [weatherInfo, setWeatherInfo] = useState(null);

    const handleCitySlection = (e) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=d7fd8be3cca23e5dfbe68064cd686397&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                let dataObject = {
                    name: data.name,
                    icon: data.weather[0].icon,
                    description: data.weather[0].description,
                    temp: Math.round(data.main.temp),
                    temp_min: Math.round(data.main.temp_min),
                    temp_max: Math.round(data.main.temp_max)
                }
                setWeatherInfo(dataObject);
            })
            .catch(() => {
                console.log("There was an error communicating with the API.");
            })
    }

    return (
        <div className='App'>
            <div className="hero is-full-height">
                <div className="hero-body">
                    <div className="container" style={{ maxWidth: "300px" }}>
                        <div className="card">
                            <div className="pt-6">
                                <div className="control has-icons-left">
                                    <div className="select is-medium">
                                        <select onChange={handleCitySlection} defaultValue={"Select City"}>
                                            <option disabled="disabled">Select City</option>
                                            {cities.map((city, i) => <option key={i}>{city}</option>)}
                                        </select>
                                        <span className="icon is-medium is-left">
                                            <i className="fas fa-solid fa-globe"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {weatherInfo === null ?
                                <div className="p-4">
                                    <div className="subtitle is-4">Check the current weather in your city.</div>
                                    <img src={BackgroundImage} alt="Weather" />
                                </div>
                                :
                                <div>
                                    <div className="card-image">
                                        <figure>
                                            <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`} alt="Weather Icon" style={{ maxWidth: "200px" }} />
                                        </figure>
                                    </div>
                                    <div className="card-content pt-0">
                                        <div className="content">
                                            <h1 className="title is-1">{weatherInfo.temp}°</h1>
                                            <p className="tag is-rounded subtitle is-6">{weatherInfo.description}</p>
                                            <p className="subtitle is-4">{weatherInfo.name}</p>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <span>
                                                <strong>Min: {weatherInfo.temp_min}°</strong>
                                            </span>
                                        </p>
                                        <p className="card-footer-item">
                                            <span>
                                                <strong>Max: {weatherInfo.temp_max}°</strong>
                                            </span>
                                        </p>
                                    </footer>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
