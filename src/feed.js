let canvas, ctx, img, width, height;
let g,
	grids = [];

window.addEventListener("load", init, false);

function init() {
	createCanvas();
	loop();
}

function createCanvas() {
	canvas = document.getElementById("canvas");
	width = 668
	height = 400
	canvas.width = width;
	canvas.height = height;
	ctx = canvas.getContext("2d");
	for (let i = 0; i < 5000; i += 10) {
		g = new createGrid(0, i);
		grids.push(g);
	}
}

let createGrid = function(x, y) {
	this.x = x;
	this.y = y;
};
let color;
let gap = 0;
let lastcolor;
let arr = [];

createGrid.prototype.draw = function() {
	ctx.beginPath();
	ctx.moveTo(0, this.y);
	ctx.lineTo(width, this.y);
	ctx.stroke();
	lastcolor = ctx.strokeStyle;
};

createGrid.prototype.update = function() {
	this.y -= 0.5;

	if (this.y < -height) {
		this.y = -5;
	}
};

function loop() {
	ctx.clearRect(0, 0, width, height);
	for (let j = 0; j < grids.length; j += 1) {
		if(j%7 == 0) {
			grids[j].draw();
			grids[j].update();

		}
	}
	requestAnimationFrame(loop);
}
