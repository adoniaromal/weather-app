function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "f1471897f47d678e0668a8dfe85385ae";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 ${data.main.temp} °C</p>
        <p>☁ ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerText = "City not found!";
    });
}
