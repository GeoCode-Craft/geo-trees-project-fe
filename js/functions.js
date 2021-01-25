/**added these lines to create a button to show the geolocation of a user (did not find a way to let the extent of the card jump to the lat/lon and we need to connect the information with the right button.) */

var x = document.getElementById("demo");
dragElement(document.getElementById("modal_usr"));
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

function closeModal(){
  console.log('modal_usr');
  console.log('Hola Mundo');
  document.getElementById('modal_usr').style.display = 'none';
}

function changestateWater(){
  
  console.log('water');
  swalWithBootstrapButtons.fire({
    title: 'User Data',
    text: "Do you want to share your information to recieve more information about the trees!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, sure!',
    cancelButtonText: 'No, cancel!',
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
            if(result){
              Swal.fire({
                title: 'Action Done - Data Updated!!',
                })
            }
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

function changestateFruit(){
  swalWithBootstrapButtons.fire({
    title: 'User Data',
    text: "Do you want to share your information to recieve more information about the trees!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, sure!',
    cancelButtonText: 'No, cancel!',
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
            if(result){
              Swal.fire({
                title: 'Action Done - Data Updated!!',
                })
            }
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
    cancelButtonText: 'No, cancel!',
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

