var TreeCadSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function (extent) {
      return (
        'https://www.stadt-muenster.de/ows/mapserv706/odgruenserv?REQUEST=GetFeature&SERVICE=WFS&VERSION=2.0.0&'+
        'srsname=EPSG:3857&TYPENAME=ms:Baeume&outputFormat=GEOJSON&' +
        'bbox=' +
        extent.join(',') +
        ',EPSG::3857'
      );
    },
    strategy: ol.loadingstrategy.bbox,
  });

  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'img/tree.png',
    }),
  });
  
  var TreeCad = new ol.layer.Vector({
    source: TreeCadSource,
    style: iconStyle
  });


 var osm = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });

  var map = new ol.Map({
    layers: [ osm, TreeCad ],
    target: 'map',
    view: new ol.View({
        center: ol.proj.transform([7.62869,51.9629],'EPSG:4326','EPSG:3857'),
        zoom: 12,
    }),
  });
