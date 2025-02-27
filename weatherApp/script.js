document.getElementById("fetchWeatherBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    const apiKey = "7146de3d3c1a7e8bde3f0c2b6277fd75"
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"7146de3d3c1a7e8bde3f0c2b6277fd75"}&units=metric`;  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
  
      const weatherInfo = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
  
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    } catch (error) {
      document.getElementById("weatherInfo").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  });