"use strict"


mapboxgl.accessToken = mapBoxKey;
console.log(mapBoxKey);
var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.4861, 29.4252],
        zoom: 9,
    }
)
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
var localRestaurants = [
    {
        name: 'Bohanans Prime Steak and Seafood',
        address: '219 E. Houston St, San Antonio, TX 78205',
        category: ['Steak House', '$$$$']
    },
    {
        name: 'Mina & Dimis Greek House',
        address: '7159 W US Highway 90, San Antonio, TX 78227',
        category: ['Greek', '$$']
    },
    {
        name: 'Taqueria Guadalajara 4',
        address: '5818 Culebra Rd, San Antonio, TX 78228',
        category: ['Mexican', '$']
    },
    {
        name: 'Pacific Moon',
        address: '15140 San Pedro Ave, San Antonio, TX 78232',
        category: ['Korean', '$$']
    },
    {
        name: 'Albis Vite Italian Kitchen',
        address: '14357 Blanco Rd, San Antonio, TX 78216',
        category: ['Italian', '$$']
    }
];


// geocode(localRestaurants[0].address, mapBoxKey).then(function (result) {
//     map.setCenter(result)
//     var marker = new mapboxgl.Marker()
//         .setLngLat(result)
//         .addTo(map);
//     var bohananPopup = new mapboxgl.Popup()
//         .setHTML("<p>"+ localRestaurants[0].name +"</p>")
//         marker.setPopup(bohananPopup)
// })

//
localRestaurants.forEach(function (input) {
    geocode(input.address, mapBoxKey).then(function (result) {
        map.setCenter(result)
        var marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);
        var bohananPopup = new mapboxgl.Popup()
            .setHTML("<p>" + localRestaurants[0].name + "</p>")
        marker.setPopup(bohananPopup)
    })
})
