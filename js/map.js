$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var controllayer = [
  {name:"Tree", layer="ifg:trees_data", cql_filter="", symbol = 'img/tree.png'},
  {name:"Watered Trees", layer="ifg:trees_data", cql_filter="", symbol = 'img/tree.png'},
  {name:"Fruit Trees", layer="ifg:trees_data", cql_filter="", symbol = 'img/tree.png'},
  {name:"Oak processionary moth", layer="ifg:trees_data", cql_filter="", symbol = 'img/tree.png'}
]

var TreeCadSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function (extent) {
      return (
        'http://giv-project15.uni-muenster.de:8080/geoserver/ifgi/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ifgi%3Atrees_data&outputFormat=application%2Fjson' +
        '&srsname=EPSG:4326&' +
        'bbox=' +
        extent.join(',') +
        ',EPSG:3857'
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
 
  
  var clusterSource = new ol.source.Cluster({
    distance: 20,
    source: TreeCadSource,
  });  

  var TreeCad = new ol.layer.Vector({
    source: clusterSource,
    style: function (feature) {
      var styleCache = {};
      var size = feature.get('features').length;
      var style = styleCache[size];
      var zoom = map.getView().getZoom();
      if (size > 3) {
        style = new ol.style.Style({
          image: new ol.style.Circle({
            radius: 15,
            stroke: new ol.style.Stroke({
              color: '#27AE60',
            }),
            fill: new ol.style.Fill({
              color: '#27AE60',
            }),
          }),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({
              color: '#fff',
            }),
          }),
        });
        styleCache[size] = style;
      }else{
        style = iconStyle;
      }
      return style;
    },
    //style: iconStyle
    name: 'Trees'
  });

  /* Map View and zoom changed */
  var view = new ol.View({
    center: ol.proj.transform([7.625868962895809,51.96263192130524],'EPSG:4326','EPSG:3857'),
    zoom: 19,
  });

 var osm = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });

  var map = new ol.Map({
    layers: [ osm ],
    target: 'map',
    view: view,
    interactions: ol.interaction.defaults({ altShiftDragRotate:false, pinchRotate:false }),
  });

  map.addLayer(TreeCad);

//  /*popup*/
//   var select = new ol.interaction.Select({
//     hitTolerance: 10,
//     multi: true,
//     condition: ol.events.condition.singleClick
//   });
//   map.addInteraction(select);

//   var popup = new ol.Overlay.PopupFeature({
//     popupClass: 'default anim',
//     select: select,
//     canFix: true,
//     template: {
//         title: 'Feature Information',
//         attributes: // [ 'baumgruppe', 'str_schl' ]
//         {  
//           "str_schl": { title: 'Straßenschlüssel' },
//           "baumgruppe": { title: 'Species' },
//         }
//     }
//   });
//   map.addOverlay (popup);

map.on("singleclick", function (evt) {
  this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    var baum = feature.get("baumgruppe");
    var str_schl = feature.get("str_schl");
    console.log(feature);
  });
});


