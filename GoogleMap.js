
var panorama;
function initialize() {
  panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street-view'),
      {
        position: {lat: 53.545042, lng: -113.513969},
        pov: {heading: 220, pitch: 15},
        zoom: 2,

        showLocationMarker : false,
        disableDefaultUI : true,
        disableDoubleClickZoom : true,
        draggable : false,
        keyboardShortcuts : false,
        mapTypeControl : false,
        mapMaker : false,
        overviewMapControl : false,
        panControl : false,
        rotateControl : false,
        scaleControl : false,
        scrollwheel : false,
        streetViewControl : false,
        zoomControl : false,
      });
}
