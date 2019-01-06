const INVADER_SPACING = 5;
const INVADER_X_SPEED = 0.1;
const INVADER_SHIFT_TIME = 1;

const PADDING = 50;

const ROW = 5;
const COLUMN = 11;

const SHIP_SPEED = 2;
const SHIP_SIZE = 20;

const BULLET_SPEED = 5;
const BULLET_SIZE = 10;

var ship;
var invaders = [];
var bullets = [];
var amount;

function setup() {
	createCanvas(375, 500);

	// Setup ship
	this.ship = new ship(width/2, height - 100, SHIP_SIZE, SHIP_SPEED);
	
	// Setup Sizes
	let rectSize = width - (PADDING * 2);
	console.log("Rect Size: ", rectSize);

	let spacingRectSize = (COLUMN - 1) * INVADER_SPACING;
	console.log("Spacing Rect Size: ", spacingRectSize);

	let invaderRectSize = rectSize - spacingRectSize;
	console.log("Invader Rect Size: ", invaderRectSize);

	let invaderSize = floor(invaderRectSize / COLUMN);
	console.log("Invader Size: ", invaderSize);
	
	// Setup Invaders
	for(let i = 0; i < ROW; i++) {
		for(let j = 0; j < COLUMN; j++) {
			//let x = (INVADER_SPACING * j) + (invaderSize * (j));
			//let y = (INVADER_SPACING * i) + (invaderSize * (i - 1));
			let x = width/2;
			let y = (INVADER_SPACING * i) + (invaderSize * (i - 1));
			let inv = new invader(x, y, invaderSize, INVADER_X_SPEED);
			console.log("Invader", "(", i,",", j, ")", "Pos", "(", "x:", x, "y:", y, ")");
			this.invaders.push(inv);
		}
	}
}

function draw() {
	background(50);

	ship.show();
	ship.move();

	for(let i = 0; i < invaders.length; i++) {
		invaders[i].show();
		//invader[i].move();
	}

	for(let i = 0; i < bullets.length; i++) {
		bullets[i].show();
		bullets[i].move();

		for(let j = 0; j < invaders.length; j++) {
			if (bullets[i].hit(
				bullets[i].x, 
				bullets[i].y, 
				bullets[i].size, 
				bullets[i].size, 
				invaders[j].x, 
				invaders[j].y, 
				invaders[j].size, 
				invaders[j].size, 
			)) {
				//bullets.splice(i, 1);
				console.log("Hit");
			}
			else {
				
			}
		}
	}
}

function keyPressed() {
	if (keyCode === 32) {
		var b = new bullet(this.ship.x, this.ship.y, BULLET_SIZE, BULLET_SPEED);
		this.bullets.push(b);
	}
}

function invader(x, y, size, speed) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.speed = speed;
	this.dir = 1;

	this.show = function() {
		noStroke();
		fill(200, 200, 200);
		rectMode(CENTER);
		rect(this.x, this.y, this.size, this.size);
	}

	this.move = function() {
		this.x += this.speed * this.dir;
	}

	this.destroy = function() {

	}
} 

function bullet(x, y, size, speed) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.speed = speed;

	this.show = function() {
		noStroke();
		fill(200, 200, 200);
		rectMode(CENTER);
		rect(this.x, this.y, this.size, this.size);
	}

	this.move = function() {
		this.y -= this.speed;
	}
	
	this.hit = function(x, y, w, h, x2, y2, w2, h2) {
		if (x + w >= x2 &&    // r1 right edge past r2 left
			x <= x2 + w2 &&    // r1 left edge past r2 right
			y + h >= y2 &&    // r1 top edge past r2 bottom
			y <= y2 + h2) {    // r1 bottom edge past r2 top
			  return true;
		}
		return false;
	}
}

function ship(x, y, size, speed) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.speed = speed;
	this.dir = 0;

	this.show = function() {
		noStroke();
		fill(0, 200, 0);
		rectMode(CENTER);
		rect(this.x, this.y, this.size, this.size);
	}

	this.move = function() {
		if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
			this.x -= 1 * speed;
		}
		if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
			this.x += 1 * speed;
		}
	}
}