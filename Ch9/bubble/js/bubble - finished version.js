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

node.append("circle")
  .attr("r", function(d) { return d.r; })
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