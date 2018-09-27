requirejs.config({
  "baseUrl": "js/dist/amd/",
  "paths": {
    "jquery": "../../jquery.min",
    "ractive": "../../ractive",
    "Colors": "../../colors",
    "util": "../../util",
    "pie": 'pie'
  }      
});

require([
  'jquery',
  'ractive',
  'pie',
  "Colors",
  "util"
], function($, Ractive, Pie, Colors, util) {

  "use strict";

  function loadCountries(dataset) {
    $.ajax({url: dataset, headers: {'Content-Type': 'application/json'}, processData: false})
      .done( function ( data ) {
        data = JSON.parse(JSON.stringify(data));
        ractive.animate('countries', data); 
      })
      .fail(function (err) { console.log("ERROR LOADING JSON", err);
    });
  }

  var palette = Colors.mix({r: 112, g: 128, b: 144}, {r: 250, g: 235, b: 215});

  var ractive = new Ractive({
    el: 'pie',
    template: '#myTemplate',
    data: {
      Pie: Pie,
      center: [0, 0],
      r: 20,
      R: 150,
      countries: [],
      expanded: [],
      datasets: [{label: "Mixed", filename: "json/countries.json"}],
      accessor: function (x) {
        return x.population;
      },
      colors: util.palette_to_function(palette),
      move: function (point, expanded) {
        var factor = expanded || 0;
        return (factor * point[0] / 3) + "," + (factor * point[1] / 3);
      },
      point: function (point) {
        return point[0] + "," + point[1];
      },
      lighten: function (color) {
        return Colors.string(Colors.lighten(color));
      },
      color_string: Colors.string
    }
  });

  loadCountries(ractive.get('datasets')[0].filename);
});