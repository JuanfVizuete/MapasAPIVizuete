
var map;

var aeropuerto = { lat:-0.12156613895240521,lng: -78.36069534295301};   //pero es aeropuerto

function startMap(position) {

    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var misCoordenadas = { lat: latitud, lng: longitud };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: aeropuerto,
    });

    var marker1 = new google.maps.Marker({
         position: misCoordenadas, 
         map: map 
        });
    var marker2 = new google.maps.Marker({
         position: aeropuerto, 
         map: map 
        });

    var destinos = [misCoordenadas, aeropuerto]
    var trazo = new google.maps.Polyline({ path: destinos, strokeColor: "#5f5f5f", strokeOpacity: 0.5, strokeWeight: 2 });
    trazo.setMap(map);


}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


var watchID = navigator.geolocation.watchPosition(startMap, 
                                                    onError, 
                                                    { timeout: 20000 });



