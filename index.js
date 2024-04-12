// Function to handle errors and set default values
function handleFetchError(err) {
  console.error(err);
  // Use default background image and author
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080')`;
  document.getElementById("author").textContent = `By: Dodi Achmad`;
}

// Fetch a random image from Unsplash with 'Rain' query
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=Rain"
)
  .then((res) => {
    if (!res.ok) {
      throw Error("Failed to fetch image");
    }
    return res.json();
  })
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch(handleFetchError);

// Fetch Dogecoin data from CoinGecko
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Failed to fetch Dogecoin data");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
        <img src="${data.image.small}" />
        <span>${data.name}</span>
      `;
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>📈: $${data.market_data.high_24h.usd}</p>
        <p>📉: $${data.market_data.low_24h.usd}</p>
      `;
  })
  .catch(handleFetchError);

// Function to display current time and update every second
function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    {
      timeStyle: "short",
    }
  );
}

// Update current time every second
setInterval(getCurrentTime, 1000);

// Fetch weather data based on user's geolocation
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Failed to fetch weather data");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
          <img src="${iconUrl}" />
          <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          <p class="weather-city">${data.name}</p>
        `;
    })
    .catch(handleFetchError);
});
