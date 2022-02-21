canvas = document.getElementById("mycanvas");

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(100, 50, 600, 350);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(275, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(325, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(375, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(425, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(475, 200, 40, 0, 2 * Math.PI);
ctx.stroke();