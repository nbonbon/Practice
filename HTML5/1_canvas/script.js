var my_canvas = document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.beginPath();
context.arc(75,75,60,0,2*Math.PI);
context.stroke();

// context.fillStyle = "#126481";
// context.fillRect(50,20,50,110);
context.strokeRect(50,20,50,110);
context.strokeRect(20,50,110,50);


context.beginPath();
context.arc(75,75,25,0,2*Math.PI);
context.stroke();

// context.font = "30px Garamond";
// context.fillText("Heyyyyy",50,175);