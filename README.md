# Dynamic Web Content with JavaScript

This project demonstrates how to create a dynamic webpage using HTML, CSS, and JavaScript. The webpage fetches data from various APIs to display cryptocurrency information, weather data, and updates the background image with a random photo related to "Rain" from Unsplash.

Table of Contents
Features
Prerequisites
Getting Started
Project Structure
Usage
APIs Used
Customization
Contributing
License

Features

Cryptocurrency Information: Fetches and displays Dogecoin data from CoinGecko API.
Weather Data: Retrieves weather information based on the user's geolocation using OpenWeatherMap API.
Dynamic Content Updates: Updates the background image and text content of the webpage using fetched data.
Real-Time Clock: Displays the current time and updates it every second.
Prerequisites
Modern web browser (e.g., Chrome, Firefox, Safari)

Getting Started
Clone the repository:
git clone https://github.com/mariusmokoka/Module_9_BOIMOK510_BCL2401_GroupA_Boikhutso-Mokoka_JSL09-main.git

Project Structure
The project structure is organized as follows:

index.html: Main HTML file containing the structure of the webpage.
index.css: Custom CSS styles for the webpage.
index.js: JavaScript file for fetching data from APIs and updating the webpage dynamically.
Usage
Open index.html in your web browser.
Allow geolocation access if prompted to enable weather data retrieval based on your location.
The webpage will display cryptocurrency information, weather data, current time, and a background image related to "Rain".
APIs Used

- ### CoinGecko API

  - Endpoint: https://api.coingecko.com/api/v3/coins/dogecoin
  - Purpose: Fetches Dogecoin cryptocurrency data.

- ### OpenWeatherMap API

  - Endpoint: https://apis.scrimba.com/openweathermap/data/2.5/weather
  - Purpose: Retrieves weather data based on user's geolocation.

- ### Unsplash API

  - Endpoint: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=Rain
  - Purpose: Fetches a random image related to "Rain" for the background.

## Customization

- Styling: Modify index.css to change the appearance and layout of the webpage.
- API Data: Update API endpoints in index.js to fetch different data or use alternative APIs.
- Content: Adjust HTML elements in index.html to customize the structure and content of the webpage.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
