document.addEventListener("DOMContentLoaded", function() {
    // Mock moon weather data
    const moonWeather = {
        temperature: "-173°C to 127°C", // Example temperature range on the moon
        pressure: "0 Pa", // No atmosphere on the moon
        windSpeed: "0 km/h" // No wind on the moon
    };

    // Update the UI with the moon weather data
    document.getElementById('temperature').textContent = moonWeather.temperature;
    document.getElementById('pressure').textContent = moonWeather.pressure;
    document.getElementById('wind-speed').textContent = moonWeather.windSpeed;
});
