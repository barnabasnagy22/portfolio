import { useState } from "react";
import "./todo.css";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const dummyWeatherData = {
        "Budapest": { temperature: "18°C", condition: "Sunny ☀️", humidity: "45%", wind: "10 km/h" },
        "London": { temperature: "12°C", condition: "Cloudy ☁️", humidity: "70%", wind: "15 km/h" },
        "New York": { temperature: "22°C", condition: "Rainy 🌧️", humidity: "80%", wind: "20 km/h" },
        "Tokyo": { temperature: "25°C", condition: "Clear 🌕", humidity: "50%", wind: "12 km/h" }
    };

    const fetchWeather = () => {
        if (dummyWeatherData[city]) {
            setWeather(dummyWeatherData[city]);
        } else {
            setWeather({ error: "City not found ❌" });
        }
    };

    return (
        <div id="weather" className="container mt-5">
            <h2 className="text-center text-white">Weather App with dummy data</h2>
            <div className="transparent-card shadow-lg p-4">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control transparent-input"
                            placeholder="Enter city..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={fetchWeather}>Search</button>
                    </div>

                    {weather && (
                        <div className="text-center mt-3">
                            {weather.error ? (
                                <p className="alert alert-danger">{weather.error}</p>
                            ) : (
                                <div>
                                    <h4>{city}</h4>
                                    <p>Temperature: {weather.temperature}</p>
                                    <p>Condition: {weather.condition}</p>
                                    <p>Humidity: {weather.humidity}</p>
                                    <p>Wind Speed: {weather.wind}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
