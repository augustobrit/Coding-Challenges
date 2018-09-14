var DROPS_AMOUNT = 50;

var bgColor = 0;
var drops = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(var i = 0; i < DROPS_AMOUNT; i++) {
		drops[i] = new Drop();
	}
}

function draw() {
	
	bgColor = map(mouseX, 0, width, 0, 255);
	
	background(bgColor);
	
	for(var i = 0; i < DROPS_AMOUNT; i++) {
		drops[i].Fall();
		drops[i].Display();
	}
}