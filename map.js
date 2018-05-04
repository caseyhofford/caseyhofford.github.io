function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(37.4, -77.1),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Geocodable address\'',
      from: '1SAz5MPKPYy_8b6dpk1SqhgO9k1f6TmrK46P-_xr2'
    },
    map: map
  });

  google.maps.event.addListener(layer, 'click', function(e) {
    //zoom to point
    map.setCenter(e.row.y.value, e.row.x.value);
    map.setZoom(15)
    // Change the content of the InfoWindow
    link = "https://docs.google.com/forms/d/e/1FAIpQLSetVrMO9wYfwWjT1TeC0H5xSHz5l9fFyAPnM9RTNkihtjoe1g/viewform?usp=pp_url&entry.2092238618&entry.1556369182&entry.479301265&entry.822000149=" +
      e.row.id.value +
      "&entry.990579594=" +
      e.row.y.value +
      ",+" + e.row.x.value;

    e.infoWindowHtml = "<h3>" +
      e.row.park.value +
      "</h3><br><b>ID #:</b>" +
      e.row.id.value + "<br><b>Park or Region:</b> " +
      e.row.park.value;
    if (e.row.status.value == 'approved') {
      e.infoWindowHtml += "<br>Approved!" +
        "<br><div><h3><a style=\"text-decoration:none;\" class=\"button\" role=\"button\" href=" +
        link +
        ">Click here to request this point</a></h3></div><br><b>latitude:</b>" +
        e.row.y.value +
        "<br> <b>longitude:</b> " +
        e.row.x.value +
        "<br></div>";
    }
  });
}

google.maps.event.addDomListener(window, 'load', initMap());
