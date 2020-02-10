var canvas = document.getElementById("canvas");

var twoD = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height/2;
var radius = 10;
twoD.beginPath();
twoD.arc(centerX, centerY, radius, 0, 2 *Math.PI, false);
twoD.fillStyle = "red";
twoD.fill();
