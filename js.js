const map = L.map('map').setView([28.958914, 50.837687], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let hospital = L.marker([28.960968, 50.837472]).addTo(map);

let click = L.marker([28.958914, 50.837687]).addTo(map);

let circle = L.circle([28.958914, 50.837687], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

let stockHalls = L.polygon([
    [28.962158, 50.837646],
    [28.962034, 50.836924],
    [28.961227, 50.837037]
]).addTo(map);

hospital.bindPopup("mabaas hospital");
circle.bindPopup("click institute");
click.bindPopup("click institute exact location");
stockHalls.bindPopup("stock halls should be around here some where");

let clickLocation;

function onMapClick(e) {
    if (clickLocation)
        map.removeLayer(clickLocation);

    clickLocation = L.marker(e.latlng).addTo(map);

    console.log("You clicked the map at " + e.latlng.toString())


    // const popup = L.popup();
    //
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
}

map.on('click', onMapClick);
