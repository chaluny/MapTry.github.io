// Initialize the map
var map = L.map('map').setView([0, 0], 2); // Set initial map coordinates and zoom level
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Sample place data (you can load this from a JSON file or an API)
var places = [
    {
        name: 'Place 1',
        lat: 40.7128,
        lng: -74.0060,
    },
    {
        name: 'Place 2',
        lat: 34.0522,
        lng: -118.2437,
    },
    // Add more places here
];

// Function to display places on the map
function displayPlaces() {
    places.forEach(function (place) {
        var marker = L.marker([place.lat, place.lng]).addTo(map);
        marker.bindPopup(place.name).openPopup();
    });
}

// Display places when the page loads
displayPlaces();
