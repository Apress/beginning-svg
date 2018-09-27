var json = {
  'children': [
    {'name': 'Ford', 'value': 60},
    {'name': 'Skoda', 'value': 34},
    {'name': 'Jaguar', 'value': 55},
    {'name': 'Seat', 'value': 29},
    {'name': 'Citroen', 'value': 20},
    {'name': 'Peugeot', 'value': 5},
    {'name': 'Volvo', 'value': 40}
  ]
}

var diameter = 1000, color = d3.scaleOrdinal(d3.schemeCategory10);

var bubble = d3.pack()
  .size([diameter, diameter])
  .padding(5);

var margin = {
  left: 0,
  right: 100,
  top: 0,
  bottom: 0
}

var svg = d3.select('#chart').append('svg')
  .attr('viewBox','0 0 ' + (diameter + margin.right) + ' ' + diameter)
  .attr('width', (diameter + margin.right))
  .attr('height', diameter)
  .attr('class', 'chart-svg');

var root = d3.hierarchy(json).sum(function(d) { return d.value; });

bubble(root);

var node = svg.selectAll('.node')
  .data(root.children)
  .enter()
  .append('g').attr('class', 'node')
  .attr('transform', function(d) { return 'translate(' + d.x + ' ' + d.y + ')'; })
  .append('g').attr('class', 'bubble');

// filters go in defs element
var defs = svg.append("defs");

// create filter with id #drop-shadow
// height=130% so that the shadow is not clipped
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

// SourceAlpha refers to opacity of graphic that this filter will be applied to
// convolve that with a Gaussian with standard deviation 3 and store result
// in blur
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 5)
    .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 5)
    .attr("dy", 5)
    .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

node.append("circle")
  .attr("r", function(d) { return d.r; })
  .style("filter", "url(#drop-shadow")
  .style("fill", function(d) { 
    return color(d.data.name); 
  });

node.append("text")
  .attr("dy", "0.3rem")
  .style("text-anchor", "middle")
  .style("font-size", "3rem")
  .text(function(d) { return d.data.value; })
  .style("fill", "#ffffff");

svg.append("g")
  .attr("class", "legend")
  .attr("transform", "translate(950,20)");

var legend = d3.legendColor()
  .shape("path", d3.symbol().type(d3.symbolSquare).size(150)())
  .shapePadding(13)
  .scale(color);

svg.select(".legend").call(legend);