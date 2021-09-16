var fs = require('fs');
var svgToMiniDataURI = require('mini-svg-data-uri');

fs.readFile('in/coffee.svg', 'utf8', function(err, data) {  
  if (err) throw err;
  var optimizedSVGDataURI = svgToMiniDataURI(data.toString());
  console.log(optimizedSVGDataURI);

  fs.writeFile("out/coffee.min.svg", optimizedSVGDataURI, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("\r\nThe file was saved!");
  }); 
});