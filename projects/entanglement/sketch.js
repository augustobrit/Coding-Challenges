const COLOR = 200;
const MIN_SIZE = 3;
const MAX_SIZE = 10;
const AMOUNT = 50;
const MAX_SPEED = 1.5;
const MIN_SPEED = 0.3;
const MIN_DISTANCE = 110;

var circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(i = 0; i < AMOUNT; i++) {
		let randomX = random(width);
		let randomY = random(height);
		let size = random(MIN_SIZE, MAX_SIZE);
		let xSpeed = random(MIN_SPEED, MAX_SPEED);
		let ySpeed = random(MIN_SPEED, MAX_SPEED);
		circles[i] = new circle(randomX, randomY, size, xSpeed, ySpeed);
	}
}

function draw() {
	background(50);

	for(i = 0; i < circles.length; i++) {
		var c1 = this.circles[i];

		this.circles[i].update();
		this.circles[i].show();

		for(j = i + 1; j < circles.length; j++) {
			var c2 = this.circles[j];
			var d = dist(c1.x, c1.y, c2.x, c2.y);
			if (d <= MIN_DISTANCE) {
				let a = lerp(255, 0, map(d, 0, floor(255/2), 0, 1));
				stroke(COLOR, a);
				strokeWeight(1);
				line(c1.x, c1.y, c2.x, c2.y);
			}
		}
	}
}

function circle(x, y, r, xSpeed, ySpeed) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;

	this.update = function() {
		if(this.x > width + this.r * 10 || this.x < -(this.r * 10)) {
			this.xSpeed = this.xSpeed * -1;
		}
		if (this.y > height + this.r * 10 || this.y < -(this.r * 10)) {
			this.ySpeed = this.ySpeed * -1;
		}

		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	} 

	this.show = function() {
		noStroke();
		fill(COLOR);
		ellipse(this.x, this.y, this.r, this.r);
	}
}