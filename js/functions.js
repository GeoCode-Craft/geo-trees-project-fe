/**added these lines to create a button to show the geolocation of a user (did not find a way to let the extent of the card jump to the lat/lon and we need to connect the information with the right button.) */

var x = document.getElementById("demo");
dragElement(document.getElementById("modal_usr"));
dragElement(document.getElementById("tree_modal"));
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-warning'
  },
  buttonsStyling: true
})

let trees_catalog = [
  {
    "Species": "Abies",
    "Family": "Pine family",
    "leave": "evergreen",
    "roots": "deep roots ",
    "extra": ""
  },
  {
    "Species": "Ailanthus",
    "Family": "Bitter ash family",
    "leave": "deciduous",
    "roots": "",
    "extra": "toxic"
  },
  {
    "Species": "Castanea",
    "Family": "beech family",
    "leave": "summer green",
    "roots": "Taproots",
    "extra": ""
  },
  {
    "Species": "Acer",
    "Family": "Horse chestnut family",
    "leave": "mostly summer green",
    "roots": "Heart roots with flat, far-reaching roots",
    "extra": ""
  },
  {
    "Species": "Alnus",
    "Family": "",
    "leave": "summer green",
    "roots": "oot nodules",
    "extra": ""
  },
  {
    "Species": "Betula",
    "Family": "Birch family",
    "leave": "summer green",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Aesculus",
    "Family": "Soap tree plants",
    "leave": "summer green",
    "roots": "with a wide spread",
    "extra": ""
  },
  {
    "Species": "Amelanchier",
    "Family": "Rose plants",
    "leave": "summer green",
    "roots": "Deep roots",
    "extra": ""
  },
  {
    "Species": "Carpinus",
    "Family": "Birch plants",
    "leave": "summer green",
    "roots": "deep heart roots",
    "extra": ""
  },
  {
    "Species": "Catalpa",
    "Family": "Trumpet tree plant",
    "leave": "half evergreen",
    "roots": "leshy roots",
    "extra": "toxic"
  },
  {
    "Species": "Cedrus",
    "Family": "Pine family",
    "leave": "vergreen",
    "roots": "very shallow roots",
    "extra": ""
  },
  {
    "Species": "Cercidiphyllum",
    "Family": "Cercidiphyllaceae",
    "leave": "",
    "roots": "very dense roots in the upper soil area",
    "extra": ""
  },
  {
    "Species": "Cladrastris",
    "Family": "",
    "leave": "summergreen",
    "roots": "fleshy root system",
    "extra": ""
  },
  {
    "Species": "Cornus",
    "Family": "Dogwood family",
    "leave": "evergreen",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Corylus",
    "Family": "Betulaceae",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Crataegus",
    "Family": "Pome fruit plants",
    "leave": "deciduous",
    "roots": "deep roots",
    "extra": ""
  },
  {
    "Species": "Cryptomeria",
    "Family": "Cypress family",
    "leave": "evergreen",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Davidia",
    "Family": "",
    "leave": "deciduous",
    "roots": "deep roots",
    "extra": ""
  },
  {
    "Species": "Decaisnea",
    "Family": "",
    "leave": "deciduous",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Euonymus",
    "Family": "Spindle trees",
    "leave": "hardy",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Fagus",
    "Family": "Beech family",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Fraxinus",
    "Family": "Olive trees",
    "leave": "deciduous",
    "roots": "deep roots",
    "extra": ""
  },
  {
    "Species": "Ginkgo",
    "Family": "",
    "leave": "deciduous",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Gleditsia",
    "Family": "Caesalpinioideae",
    "leave": "deciduous",
    "roots": "deep roots",
    "extra": ""
  },
  {
    "Species": "Ilex",
    "Family": "Holly family",
    "leave": "evergreen",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Juglans",
    "Family": "Walnuts",
    "leave": "deciduous",
    "roots": "Deep roots",
    "extra": ""
  },
  {
    "Species": "Juniperus",
    "Family": "Cypress family",
    "leave": "evergreen",
    "roots": "deep roots",
    "extra": ""
  },
  {
    "Species": "Koelreuteria",
    "Family": "Soap tree plants",
    "leave": "deciduous",
    "roots": "Shallow roots ",
    "extra": ""
  },
  {
    "Species": "Laburnum",
    "Family": "Legumes",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Larix",
    "Family": "Pine family",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Liquidambar",
    "Family": "Altingiaceae",
    "leave": "deciduous",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Magnolia",
    "Family": "Ornamental trees",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Malus",
    "Family": "rose plants",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": "fruit"
  },
  {
    "Species": "Mespilus",
    "Family": "Rose plants",
    "leave": "summer green",
    "roots": "deep roots",
    "extra": "fruit"
  },
  {
    "Species": "Metasequoia",
    "Family": "Metasequoia",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Nyssa",
    "Family": "Dogwood-like",
    "leave": "evergreen",
    "roots": "eep roots",
    "extra": ""
  },
  {
    "Species": "Parrotia",
    "Family": "Witch Hazel Family",
    "leave": "deciduous",
    "roots": "Shallow roots ",
    "extra": ""
  },
  {
    "Species": "Paulownia",
    "Family": "",
    "leave": "evergreen",
    "roots": "Deep roots",
    "extra": ""
  },
  {
    "Species": "Picea",
    "Family": "Pine family",
    "leave": "evergreen",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Pinus",
    "Family": "Coniferous plants",
    "leave": "evergreen",
    "roots": "deep roots ",
    "extra": ""
  },
  {
    "Species": "Platanus",
    "Family": "Plane trees",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Populus",
    "Family": "Willow plants",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Prunus",
    "Family": "Rose plants",
    "leave": "evergreen",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Pseudotsuga",
    "Family": "Pine family",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Pterocarya",
    "Family": "Walnuts",
    "leave": "deciduous",
    "roots": "",
    "extra": ""
  },
  {
    "Species": "Pyrus",
    "Family": "Rose plants",
    "leave": "deciduous",
    "roots": "deep roots",
    "extra": "fruits"
  },
  {
    "Species": "Quercus",
    "Family": "Beech family",
    "leave": "deciduous",
    "roots": "Heart root",
    "extra": ""
  },
  {
    "Species": "Robinia",
    "Family": "Legumes",
    "leave": "hardy",
    "roots": "shallow to deep roots",
    "extra": ""
  },
  {
    "Species": "Salix",
    "Family": "Willow plants",
    "leave": "deciduous",
    "roots": "Shallow roots ",
    "extra": ""
  },
  {
    "Species": "ambucus",
    "Family": "Musk plants",
    "leave": "\tdeciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Sequoiadendron",
    "Family": "Cypress family",
    "leave": "evergreen",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Sophora",
    "Family": "Fabaceae",
    "leave": "deciduous",
    "roots": "",
    "extra": ""
  },
  {
    "Species": "Sorbus",
    "Family": "Pome fruit plants",
    "leave": "deciduous",
    "roots": "Deep roots",
    "extra": ""
  },
  {
    "Species": "Taxodium",
    "Family": "Cypress family",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Taxus",
    "Family": "Yew family",
    "leave": "evergreen",
    "roots": "deep roots",
    "extra": "toxic"
  },
  {
    "Species": "Thuja",
    "Family": "Cypress family",
    "leave": "evergreen",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Tilia",
    "Family": "Linden family",
    "leave": "deciduous",
    "roots": "heart root",
    "extra": ""
  },
  {
    "Species": "Tsuga",
    "Family": "Pine family",
    "leave": "evergreen",
    "roots": "Shallow roots ",
    "extra": ""
  },
  {
    "Species": "Ulmus",
    "Family": "Elm family",
    "leave": "deciduous",
    "roots": "Deep roots",
    "extra": ""
  },
  {
    "Species": "Viburnum",
    "Family": "Musk plants",
    "leave": "deciduous",
    "roots": "shallow root",
    "extra": ""
  },
  {
    "Species": "Zelkova",
    "Family": "Elm family",
    "leave": "deciduous",
    "roots": "Heart root",
    "extra": ""
  }
 ]
function closeModal(){
  console.log('modal_usr');
  console.log('Hola Mundo');
  document.getElementById('modal_usr').style.display = 'none';
}

function closeModalTree(){
  document.getElementById('tree_modal').style.display = 'none';
}

function changestateWater(){
  
  console.log('water');
  swalWithBootstrapButtons.fire({
    title: 'User Data',
    text: "Do you want to share your information to recieve more information about the trees!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, sure!',
    cancelButtonText: 'No, update!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Your Name',
          text: 'We want to know the name of the person that  care about trees'
        },
        {
          title: 'Your Email',
          text: 'We want to send you information about trees and its care'
        },
        {
          title: 'Feedback',
          text: 'We want to know if you have any recommendation for us. Tey are really important!'
        }
      ]).then((result) => {
        if (result.value != "") {
          const answers = JSON.stringify(result.value);
          const answers_ = result.value;
          Swal.fire({
            title: 'Thank you so much for caring about trees and being part of this project!!',
            html: `
              Your answers:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Send'
          }).then((result)=>{
            if(result){
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; 
              var yyyy = today.getFullYear();
              if(dd<10) 
                  {
                    dd='0'+dd;
                  } 

              if(mm<10) 
                  {
                    mm='0'+mm;
                  } 
              today = yyyy+'-'+mm+'-'+dd;
              var data_ = {
                  "properties": {
                  "watering": true,
                  "date_water": today
                }
              }
              var person = {
                "name": answers_[0],
                "email": answers_[1],
                "feedback": answers_[2],
                "entry_date": today,
                "tree_reference": id_t
              }
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/muenstertreesdata/'+id_t+'/',
                type: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                body: JSON.stringify(data_),
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                },
              });
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/userdata/',
                type: 'POST',
                data: JSON.stringify(person),
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                }
              });
              
            }
          })
        }else{
          Swal.fire({
            titel:"Alert",
            icon: 'warning',
            text: "No data given, try again!!"
          })
        }
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
            {
              dd='0'+dd;
            } 

        if(mm<10) 
            {
              mm='0'+mm;
            } 
        today = yyyy+'-'+mm+'-'+dd;
        console.log(today);
        var data_ = {
            "properties": {
            "watering": true,
            "date_water": today
           }
        }
        console.log(id_t);
        console.log(data_);
        $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/muenstertreesdata/'+id_t+'/',
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(data_),
        }).done(function(){
            Swal.fire({
              title: 'Thank you so much for caring about trees and being part of this project!!',
              text: 'The action was done, data updated',
              confirmButtonText: 'close'
            })
        });
    }
  })
}

function changestateFruit(){
  swalWithBootstrapButtons.fire({
    title: 'User Data',
    text: "Do you want to share your information to recieve more information about the trees!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, sure!',
    cancelButtonText: 'No, update!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Your Name',
          text: 'We want to know the name of the person that  care about trees'
        },
        {
          title: 'Your Email',
          text: 'We want to send you information about trees and its care'
        },
        {
          title: 'Feedback',
          text: 'We want to know if you have any recommendation for us. Tey are really important!'
        }
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'Thank you so much for caring about trees and being part of this project!!',
            html: `
              Your answers:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Send'
          }).then((result)=>{
            var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; 
              var yyyy = today.getFullYear();
              if(dd<10) 
                  {
                    dd='0'+dd;
                  } 

              if(mm<10) 
                  {
                    mm='0'+mm;
                  } 
              today = yyyy+'-'+mm+'-'+dd;
              var data_ = {
                  "properties": {
                  "watering": true,
                  "date_water": today
                }
              }
              var person = {
                "name": answers_[0],
                "email": answers_[1],
                "feedback": answers_[2],
                "entry_date": today,
                "tree_reference": id_t
              }
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/muenstertreesdata/'+id_t+'/',
                type: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                body: JSON.stringify(data_),
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                },
              });
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/userdata/',
                type: 'POST',
                data: JSON.stringify(person),
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                }
              });
          })
        }
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
        title: 'Thank you so much for caring about trees and being part of this project!!',
        text: 'The action was done, data updated',
        confirmButtonText: 'close'
      })
    }
  })
}

function changestateVirus(){
  swalWithBootstrapButtons.fire({
    title: 'User Data',
    text: "Do you want to share your information to recieve more information about the trees!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, sure!',
    cancelButtonText: 'No, update!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Your Name',
          text: 'We want to know the name of the person that  care about trees'
        },
        {
          title: 'Your Email',
          text: 'We want to send you information about trees and its care'
        },
        {
          title: 'Feedback',
          text: 'We want to know if you have any recommendation for us. Tey are really important!'
        }
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'Thank you so much for caring about trees and being part of this project!!',
            html: `
              Your answers:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Send'
          }).then(result=>{
            var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; 
              var yyyy = today.getFullYear();
              if(dd<10) 
                  {
                    dd='0'+dd;
                  } 

              if(mm<10) 
                  {
                    mm='0'+mm;
                  } 
              today = yyyy+'-'+mm+'-'+dd;
              var data_ = {
                  "properties": {
                  "watering": true,
                  "date_water": today
                }
              }
              var person = {
                "name": answers_[0],
                "email": answers_[1],
                "feedback": answers_[2],
                "entry_date": today,
                "tree_reference": id_t
              }
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/muenstertreesdata/'+id_t+'/',
                type: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                body: JSON.stringify(data_),
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                },
              });
              $.ajax({
                url: 'http://giv-project15.uni-muenster.de:8000/userdata/',
                type: 'POST',
                data: JSON.stringify(person),
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                  Swal.fire({
                    icon: 'sucess',
                    title: 'Action Done - Data Updated!!',
                  })
                }
              });
          })
        }
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
        title: 'Thank you so much for caring about trees and being part of this project!!',
        text: 'The action was done, data updated',
        confirmButtonText: 'close'
      })
    }
  })
}

function descriptionTrees(){
  for(var i = 0; i < trees_catalog.length; i++){
    if(trees_catalog[i].Species == baum){
      document.getElementById("tree_body").innerHTML = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
      '<thead>'+
          '<tr>'+
              '<th>Item</th>'+
              '<th>Value</th>'+
          '</tr>'+
      '</thead>'+
      '<tbody>'+
          '<tr>'+
              '<td>Specie</td>'+
              '<td>'+trees_catalog[i].Species+'</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Family:</td>'+
              '<td>'+trees_catalog[i].Family+'</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Leaves</td>'+
              '<td>'+trees_catalog[i].leave+'</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Roots</td>'+
              '<td>'+trees_catalog[i].roots+'</td>'+
          '</tr>'+
          '<tr>'+
              '<td>Extra information</td>'+
              '<td>'+trees_catalog[i].extra+'</td>'+
          '</tr>'+
      '</tbody>'+
      '</table>';
    }
  }
  document.getElementById("tree_modal").style.display = 'block';
}
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
      x.style.display = 'none';
      document.getElementById("gps").style.backgroundColor = '#4e73df';
    }else{
      x.style.display = 'block';
      document.getElementById("gps").style.backgroundColor = '#206826';
    }

    new ol.layer.Vector({
      map: map,
      source: new ol.source.Vector({
        features: [positionFeature],
      }),
    });
}

function ControlLayer(){
  if(document.getElementById("panelLayers").style.display == 'block'){
    document.getElementById("panelLayers").style.display = 'none';
    document.getElementById("controlLayer").style.backgroundColor = '#4e73df';
  }else{
    document.getElementById("panelLayers").style.display = 'block';
    document.getElementById("controlLayer").style.backgroundColor = '#206826';
  }
}
  
function layerchange(event){
  if(document.getElementById(event).checked == true){
    console.log(controllayer)
    for(var i=0; i < controllayer.length; i++){
      if(controllayer[i].name == event){
        var iconStyle = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: controllayer[i].symbol,
          }),
        });
        
        var lay=controllayer[i].layer;
        var cql=controllayer[i].cql_filter; 
        if(event != 'Tree'){
          var source = new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: function (extent) {
              return (
                'http://giv-project15.uni-muenster.de:8080/geoserver/ifgi/ows?service=WFS&version=1.0.0&request=GetFeature&typeName='+lay+'&outputFormat=application%2Fjson' +
                '&srsname=EPSG:4326&cql_filter='+cql
              );
            },
          });
  
          var layer = new ol.layer.Vector({
            source: source,
            style: iconStyle,
            name: controllayer[i].name
          });
  
          map.addLayer(layer);
        }else{
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
          map.addLayer(TreeCad)
        }
       
      } 
    }
  
  }else{
    map.getLayers().forEach(layer =>{
      if(layer.get('name') == event){
        map.removeLayer(layer);
      }
    })

  }
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

