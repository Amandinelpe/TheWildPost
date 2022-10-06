const weatherInfo = document.querySelector('#weather');
const longDate = document.querySelector('#longDate');
const shortDate = document.querySelector('#shortDate');

// weatherIcons();

// async function getWeather() {
//     let resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=44.8378&longitude=-0.5792&current_weather=true");
//     let data = await resp.json();
//     return data;
//   }

// for adding more cases :
// https://developer.weatherunlocked.com/documentation/localweather/resources

async function weatherIcons() {
    await getWeather().then(data => {
    switch(data.current_weather.weathercode) {
        case 3:
        case 2:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#x2601;&#xFE0F;`
            break;
        case 1:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#127780;&#65039;`
            break;
        case 0:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#9728;&#65039;`
            break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 80:
        case 81:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#x1F327;&#xFE0F;`
            break;
        case 29:
        case 91:
        case 92:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#x26C8;&#xFE0F;`
            break;
        case 45:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C &#x1F32B;&#xFE0F;`
            break;
        default:
            weatherInfo.innerHTML += `${Math.round(data.current_weather.temperature)}°C`
   
    }
})
};
  
// getWeather().then(data => console.log(data.current_weather.temperature, data.current_weather.weathercode));
// getWeather().then(data => weatherInfo.innerHTML = `${data.current_weather.temperature}°C, conditions: ${data.current_weather.weathercode}`);


// Sunday, October 2, 2022 <- or other??
function myDate() {
    const currentDate = new Date();
    const optionsL = { weekday: 'long', year: 'numeric', month: 'long' , day: 'numeric' }
    const optionsS = { weekday: 'short', year: 'numeric', month: 'short' , day: 'numeric' }
    const formatL = currentDate.toLocaleDateString('en-US', optionsL);
    const formatS = currentDate.toLocaleDateString('en-US', optionsS);
    longDate.innerHTML = `${formatL}`;
    shortDate.innerHTML = `${formatS}`;

}
myDate();