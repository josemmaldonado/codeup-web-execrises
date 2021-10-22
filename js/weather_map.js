//date.toLocaleString(): returns 10/8/2021,9:21:01 am


// function renderWeather(weather) {
//     var html = '';
//     html += '<tr>';
//     html += '<div class'//day and date
//     html += '<div class'//weather icon and weather description
//     html += '<div class'//temp max and temp min
//     html += '<div class'//percent chance of rain
//
//     return html;
// }

//clouds: 75

// dt: 1633924800
// feels_like: 86.43
// humidity: 82


// temp: 80.83
// uvi: 0

// wind_speed: 10.76
const cards = $('#card-container')

$.get("https://api.openweathermap.org/data/2.5/onecall?", {
    lat: "29.4241",
    lon: "-98.4936",
    APPID: openWeatherKey,
    units: "imperial"


}).done(function (data) {
    console.log(data);

    for (var i = 0; i < data.daily.length; i += 8) {

        html = `
 <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">High:${current.temp}</p>
            <p class="card-text">Low:</p>
            <p class="card-text"><small class="text-muted"></small></p>
        </div>
    </div>
</div>`
        cards.append(html);
    }
})
// for (var i = 0; i < data.daily.length; i += 8) {

// var timeUnixUtc = daily.dt;
// var tempMax = daily.temp.max;
// var tempMin = daily.temp.min;
//
// $("#weekday").append(timeUnixUtc);
// $("#temp-max").append(tempMax);
// $("#temp-min").append(tempMin);

//  <h5 className="card-title">${daily.dt}</h5>


// for(var i = 0; i<data.current.length; i +=5) {
//     var currentTemp = data.current[i].temp;
//     var humidity = data.current[i].humidity;
//     var uvIndex = data.current[i].uvi;
//
// }
//
//
//
//
//     $("#weekday").append(data.daily[0].dt);
//     $("#temp-max").append(data.daily[i].temp.max);
//     $("#temp-min").append(data.daily[i].temp.min);


//
// function convertDateTime() {
//     var date = new Date();
//     var timeStamp = date.getTime();
// } return date.().getTime();



