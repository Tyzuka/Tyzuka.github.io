
function fetchWeather() {
    const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherResult').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = 'Error fetching weather data.';
        });
}
