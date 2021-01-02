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

 

 /*popup*/
  var select = new ol.interaction.Select({
    hitTolerance: 5,
    multi: true,
    condition: ol.events.condition.singleClick
  });
  map.addInteraction(select);

  var popup = new ol.Overlay.PopupFeature({
    popupClass: 'default anim',
    select: select,
    canFix: true,
    template: {
        
        title: 'Title',
        attributes: // [ 'baumgruppe', 'str_schl' ]
        {  
          'str_schl': { title: 'Straßenschlüssel' },
          'baumgruppe': { title: 'Species' },
         
         
          
          
          
          
          /* Using localString with a date * /
          'date': { 
            title: 'Date', 
            format: ol.Overlay.PopupFeature.localString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) 
          }
          /**/
        }
    }
  });
  map.addOverlay (popup);


/*
  var popup = new ol.Overlay.Popup();
  map.addOverlay(popup);
  
  map.on('click', function(evt) {
      var prettyCoord = ol.TreeCad.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
      popup.show(evt.coordinate, '<div><h2>Coordinates</h2><p>' + prettyCoord + '</p></div>');
  });
  */



    


