var svgToMiniDataURI = require('mini-svg-data-uri');
 
var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M22 38V51L32 32l19-19v12C44 26 43 10 38 0 52 15 49 39 22 38z"/></svg>';
 
var optimizedSVGDataURI = svgToMiniDataURI(svg);