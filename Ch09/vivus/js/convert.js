const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('font/DancingScript-Regular.otf');

const attributes = {fill: 'antiquewhite', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

const svg = textToSVG.getSVG('Hello, reader!', options);

console.log(svg);