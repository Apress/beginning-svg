window.addEventListener('load', function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: new google.maps.LatLng(40.7255945,-74.0051243)
  });

  var marker = new SVGMarker({
    map: map,
    position: new google.maps.LatLng(40.7255945,-74.0051243),
    icon: {
      anchor: new google.maps.Point(90, 90.26),
      size: new google.maps.Size(120,90.26),
      url: 'img/apresspin.svg'
    }
  })
});