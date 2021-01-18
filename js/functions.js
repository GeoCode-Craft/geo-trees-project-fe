/**added these lines to create a button to show the geolocation of a user (did not find a way to let the extent of the card jump to the lat/lon and we need to connect the information with the right button.) */

var x = document.getElementById("demo");


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    var geolocation = new ol.Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: view.getProjection(),
      });




    var accuracyFeature = new ol.Feature();
    geolocation.on('change:accuracyGeometry', function () {
          accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
      });
    
      var positionFeature = new ol.Feature();
  
      positionFeature.setStyle(
          new ol.style.Style({
          image: new ol.style.Circle({
              radius: 6,
              fill: new ol.style.Fill({
              color: '#00b300',
              }),
              stroke: new ol.style.Stroke({
              color: '#fff',
              width: 2,
              }),
          }),
          })
      );
    geolocation.on('change:position', function () {
        var coordinates = geolocation.showPosition;
        positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
    });


    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    positionFeature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([lon,lat])));

    console.log(geolocation);
  
    map.setView(new ol.View({ 
        center: ol.proj.transform([lon,lat],  'EPSG:4326','EPSG:3857'),
        zoom: 15
    }));

    if(document.getElementById("demo").style.display == 'block'){
      document.getElementById("demo").style.display = 'none';
    }else{
      document.getElementById("demo").style.display = 'block';
    }

    new ol.layer.Vector({
      map: map,
      source: new ol.source.Vector({
        features: [positionFeature],
      }),
    });
}
  

  
