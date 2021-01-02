function geolocation(){
    var geolocation = new ol.Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: view.getProjection(),
    });

    geolocation.setTracking(this.checked);

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
            color: '#3399CC',
            }),
            stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2,
            }),
        }),
        })
    );

    geolocation.on('change:position', function () {
        var coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
    });

    console.log(geolocation);
    var position = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [accuracyFeature, positionFeature],
        }),
      });
    map.addLayer(position);  
}


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
              color: '#3399CC',
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

    console.log(geolocation);
    new ol.layer.Vector({
        map: map,
        source: new ol.source.Vector({


          features: [positionFeature],
            
        style: new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 0.5],
              anchorXUnits: "fraction",
              anchorYUnits: "fraction",
              src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
            
            })
          })
      })
        }),


  
    map.setView(new ol.View({
        
        center: ol.proj.transform([lon,lat],  'EPSG:4326','EPSG:3857'),
        zoom: 20
 }));
  }
  

  
