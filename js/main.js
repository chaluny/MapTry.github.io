// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 5); // Set initial map coordinates and zoom level
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Sample place data (you can load this from a JSON file or an API)

var marker = L.marker([51.5, -0.09]).addTo(map);

var places = [
    {
       name: 'Chaluny 1',
       lat: 51.5,
       lng: -0.092,
    },
    {
        name: 'Chaluny 2',
        lat: 51.7,
        lng: -0.098,
    },
    // Add more places here
];

var marker = L.marker([51.5, -0.09]).addTo(map);

// Function to display places on the map
function displayPlaces() {
    places.forEach(function (place) {
        var marker = L.marker([place.lat, place.lng]).addTo(map);
        marker.bindPopup(place.name).openPopup();
    });
}

// Display places when the page loads
displayPlaces();

