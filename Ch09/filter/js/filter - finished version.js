var draw = SVG('drawing').size(500, 500);

var image = draw.image('https://images.unsplash.com/photo-1498550744921-75f79806b8a7?fit=crop&fm=jpg&h=500&q=75&w=800').size(500, 500);

image.filter(function(add) {
  add.gaussianBlur(3, 0)
});