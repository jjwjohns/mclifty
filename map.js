function initMap() {
    var map = L.map('map').setView([40.3916, -111.8508], 9);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // // Example GeoJSON URL for Salt Lake County (replace with actual file)
        // var geojsonUrl = '/resources/SLC.geojson';
        
        // // Fetch and add the GeoJSON data
        // fetch(geojsonUrl)
        //   .then(response => response.json())
        //   .then(data => {
        //     L.geoJSON(data).addTo(map); // Add the GeoJSON data to the map
        //   });

        var provoMarker = L.marker([40.2338, -111.6585]).addTo(map);


        provoMarker.bindPopup("Based out of Provo, UT").openPopup();
}