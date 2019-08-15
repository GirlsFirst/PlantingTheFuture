alert("hi")

var map;
var view;
var ourLoc;

function init(){
  ourLoc= ol.proj.fromLonLat([41.043316, 28.862457]);

view = new ol.View({
  center:ourLoc,
  zoom:6
});
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panHome(){
  view.animate({
    center: ourLoc,
    duration: 2000
  });
}

function panToLocation(){
  var country = document.getElementById("country-name").value;
  if (country == "" ){
    alert("Insert a Country Name!!!!");
    return;

  var query= "https://restcountries.eu/rest/v2/name/"+country;
query = query.replace(/ /g,"%20");
//aleReq
  var countryRequest = new XMLHttpRequest();
  countryRequest.open('GET', query,true);
  countryRequest.onLoad = processCountryRequest
  countryRequest.send();
  //alert("Ready State" + countryRequest.readyState);
  //alert("Status"+ countryRequest.status);
  //alert("Response" + countryRequest.responseText);
}
function processCountryRequest(){
  if (countryRequest.readyState != 4){
    return;
  }
}

  if (countryRequest.status !=200 ||countryRequest.responseText===""){
    window.console.error("Request had an error!");
    return;
  }

  var countryInfo = JSON.parse(countryRequest.responseText);
  var lon = countryInfo[0].latlng[1];
  var lat= countryInfo[0].latlng[0]
  window.console.log(country + ":lon" + lon + "&lat"+ lat);
  var location = ol.proj.fromLonLat([lon,lat]);

  view.animate ({
    center:location,
    duration: 2000
  });
}
window.onload = init;
