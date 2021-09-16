var s = Snap("#barchart");
var button1 = Snap("#button1");
var button2 = Snap("#button2");

//create buttons
button1.rect(30, 0, 150, 30, 0).attr({ fill:"#fff" });
button2.rect(30, 0, 150, 30, 0).attr({ fill:"#fff" });

//add text to buttons
var label_1 = button1.text(50, 20,"Show chart 1");
var label_2 = button2.text(50, 20,"Show chart 2");
 
//create bars
// rect(xCoords, yCoords, width, height, border-radius)
var bar1 = s.rect(100, 10, 0, 5, 0).attr({
  fill: "darkgrey"
});

var bar2 = s.rect(100, 20, 0, 5, 0).attr({
  fill: "navajowhite"
});

var bar3 = s.rect(100, 30, 0, 5, 0).attr({
  fill: "silver"
});

var bar4 = s.rect(100, 40, 0, 5, 0).attr({
  fill: "black"
});

var bar5 = s.rect(100, 50, 0, 5, 0).attr({
  fill: "slategrey"
});

//put the 5 bars into one group
var bars = s.group(bar1, bar2, bar3, bar4, bar5);

//apply attributes to all bars at once via the group
bars.attr({
  stroke: "rgba(0,0,0,0.2)",
  strokeWidth: 0.2
});

//add click event listeners
button1.click(function () {
  bar1.animate({ height: 5, x: 20, y: 10, width: 60 }, 1100, mina.bounce);
  bar2.animate({ height: 5, x: 20, y: 20, width: 100 }, 1150, mina.bounce);
  bar3.animate({ height: 5, x: 20, y: 30, width: 220 }, 1200, mina.bounce);
  bar4.animate({ height: 5, x: 20, y: 40, width: 10 }, 1250, mina.bounce);
  bar5.animate({ height: 5, x: 20, y: 50, width: 40 }, 1300, mina.bounce);
});

button2.click(function () {
  bar1.animate({ height: 5, x: 20, y: 10, width: 150 }, 1100, mina.bounce);
  bar2.animate({ height: 5, x: 20, y: 20, width: 10 }, 1150, mina.bounce);
  bar3.animate({ height: 5, x: 20, y: 30, width: 20 }, 1200, mina.bounce);
  bar4.animate({ height: 5, x: 20, y: 40, width: 100 }, 1250, mina.bounce);
  bar5.animate({ height: 5, x: 20, y: 50, width: 70 }, 1300, mina.bounce);
});