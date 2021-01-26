$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var controllayer = [
  {name:"Tree", layer:"ifg:trees_data", cql_filter:"", symbol:'img/tree.png', description:'',checked:'checked'},
  {name:"Watered Trees", layer:"ifg:trees_data", cql_filter:"watering=true", symbol:'img/tree_watered.png', description:'',checked:''},
  {name:"Fruit Trees", layer:"ifg:trees_data", cql_filter:"fruit=true", symbol:'img/tree_fruit.png', description:'',checked:''},
  {name:"Oak processionary", layer:"ifg:trees_data", cql_filter:"eichenprozessionsspinner=true", symbol:'img/tree_oak.png', description:'',checked:''}
]; 

for(var i=0; i < controllayer.length; i++){
  document.getElementById("layercontrol").innerHTML += '<input type="checkbox" '+controllayer[i].checked+' id="'+controllayer[i].name+'" onclick="layerchange(id)" name="'+controllayer[i].name+'" value="'+controllayer[i].name+'"> &nbsp;<label for="'+controllayer[i].name+'">'+controllayer[i].name+'</label><br>'
}

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
    name: 'Tree'
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
    name: 'Tree'
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
    var values = feature.values_.features[0].values_
    var baum = values.baumgruppe;
    var str_schl = values.str_schl;
    var fruit;
    var eichenprozessionsspinner;
    var lastest_wat_date = values.date_water;
    var watering;

    /**From Boolean to YES and No */
    if(values.fruit == true){fruit = 'Yes'}else{fruit = 'No'};
    if(values.eichenprozessionsspinner == true){eichenprozessionsspinner = 'Yes'}else{eichenprozessionsspinner ='No'};
    if(values.watering == true){watering = 'Yes'}else{watering = 'No'};
    if(values.lastest_wat_date == null){lastest_wat_date = 'No Date'};
    console.log(eichenprozessionsspinner)
    document.getElementById("usr_body").innerHTML = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
    '<thead>'+
        '<tr>'+
            '<th>Item</th>'+
            '<th>Value</th>'+
            '<th>Actions</th>'+
        '</tr>'+
    '</thead>'+
    '<tbody>'+
        '<tr>'+
            '<td>Specie</td>'+
            '<td>'+baum+'</td>'+
            '<td>None</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Watered:</td>'+
            '<td>'+watering+'</td>'+
            '<td><a onclick="changestateWater()" class="btn btn-primary btn-icon-split"><span class="icon text-white-50"><i class="fas fa-hand-holding-water"></i></span><span class="text">I am Watering</span></a></td>'+
        '</tr>'+
        '<tr>'+
            '<td>Last Watering</td>'+
            '<td>'+lastest_wat_date+'</td>'+
            '<td>None</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Fruits</td>'+
            '<td>'+fruit+'</td>'+
            '<td><a onclick="changestateFruit()" class="btn btn-primary btn-icon-split"><span class="icon text-white-50"><i class="fas fa-apple-alt"></i></span><span class="text">Change State</span></a></td>'+
        '</tr>'+
        '<tr>'+
            '<td>Oak processionary moth</td>'+
            '<td>'+eichenprozessionsspinner+'</td>'+
            '<td><a onclick="changestateVirus()" class="btn btn-primary btn-icon-split"><span class="icon text-white-50"><i class="fas fa-viruses"></i></span><span class="text">Change State</span></a></td>'+
        '</tr>'+
    '</tbody>'+
    '</table>';
    document.getElementById("modal_usr").style.display = 'block';
  });
});


