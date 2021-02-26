function initMap() {
	// add your code here
	L.mapquest.key = 'A7QSqdCabqd5V2G7Ghjk2krzsZiIdwLR';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}