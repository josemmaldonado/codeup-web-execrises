"use strict"


mapboxgl.accessToken = mapBoxKey;
console.log(mapBoxKey);
var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.4861, 29.4252],
        zoom: 10,
    }
)
var firstRestInfo = {
    address: "The Alamo",
    popupHTML: "<p>Remember the Alamo!</p>"
};

function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}

placeMarkerAndPopup(alamoInfo, accessToken, map);

// var firstRest = geocode("219 E Houston St #275, San Antonio, TX 78205", mapBoxKey).then(function(result) {
//
//
//  var marker1 = new mapboxgl.Marker({color: "red"})
//     // .setLngLat([-98.48833328019398, 29.427205078796252])
//      .addTo(oneRest)
//  var Popup1 = new mapboxgl.Popup()
//      .setHTML("<strong>Bohanan's Prime Steaks and Seafood</strong>")
//      .addTo(oneRest)})
//
//
// console.log(oneRest);
// map.setCenter(oneRest);
// map.setZoom(10);
//
// marker1.setPopup(Popup1)
//
// var marker2 = new mapboxgl.Marker({color: "green"})
//     .setLngLat([-98.53533249573479, 29.495808189433063])
//     .addTo(map)
// var Popup2 = new mapboxgl.Popup()
//     .setHTML("<strong>La Fogata Mexican Cuisine</strong>")
//     .addTo(map)
//
// marker2.setPopup(Popup2)
//
// var marker3 = new mapboxgl.Marker({color: "yellow"})
//     .setLngLat([-98.51429813131625, 29.541918467198798])
//     .addTo(map)
//
// var Popup3 = new mapboxgl.Popup()
//     .setHTML("<strong>Godai</strong>")
//     .addTo(map)
//
// marker3.setPopup(Popup3)
//
// var marker4 = new mapboxgl.Marker({color: "orange"})
//     .setLngLat([-98.48981586015077, 29.5649280565002])
//     .addTo(map)
//
// var Popup4 = new mapboxgl.Popup()
//     .setHTML("<strong>Weathered Soul Brewing</strong>")
//     .addTo(map)
//
// marker4.setPopup(Popup4)
//
