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