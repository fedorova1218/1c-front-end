var canvas = documemt.getElementById("sandbox");
var context = canvas = canvas.getContext("2d");
var square, circle;

square =new Path2D();
square.moveTO(50, 50);
square.lineTo(250, 50);
square.lineTo(250, 250);
square.lineTo(50, 250);
square.lineTo(50, 50);

  context.stroke(square);

  circle = new Path2D();
  curcle.arc(150, 150, 100, 0, 2 * Math.PI);

  context.fillStyle= "rgba(0, 255, 0, 0.5)";
  context.fill(circle);
