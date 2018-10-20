const SCALE = 25;

var grid;
var snake;
var apple;

function setup() {
	createCanvas(500, 500);
	frameRate(10);
	
	grid = new grid();
	grid.generate();

	snake = new snake();

	apple = new apple();
	apple.setPosition();
}

function draw() {
	grid.show();

	snake.move();
	snake.show();
	apple.show();
	
	if (snake.eat()) {
		apple.setPosition();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.setDirection(0, -1);
	}
	if (keyCode === LEFT_ARROW) {
		snake.setDirection(-1, 0);
	}
	if(keyCode === DOWN_ARROW) {
		snake.setDirection(0, 1);
	}
	if (keyCode === RIGHT_ARROW) {
		snake.setDirection(1, 0);
	}
}

function grid() {
	this.rows;
	this.cols;
	this.tiles = [];

	this.generate = function() {
		rows = width/SCALE; 
		cols = height/SCALE;

		let counter = 0;
		for(let i = 0; i < rows; i++) {
			for(let j = 0; j < cols; j++) {
				let x  = i * SCALE;
				let y = j * SCALE;
				
				counter = counter + 1;
				this.tiles[counter] = createVector(x, y);
			}	
		}
	}

	this.show = function() {
		let counter = 0;
		for(let i = 0; i < rows; i++) {
			for(let j = 0; j < cols; j++) {
				counter = counter + 1;
				let c = 40;
				if ((i + j) % 2 === 0) 
					c = 50;
	
				noStroke();
				fill(c);
				rect(this.tiles[counter].x, this.tiles[counter].y, SCALE, SCALE);
			}	
		}
	}
}

function snake() {
	this.position = createVector(0, 0);
	this.direction = createVector(0, 0);

	this.eat = function() {
		let d = dist
				(
					snake.position.x,
					snake.position.y,
					apple.position.x,
					apple.position.y
				);

		if(d < 1) {
			return true;
		}
		return false;
	}

	this.setDirection = function(x, y) {
		this.direction = createVector(x, y);
	}

	this.move = function() {
		this.position.x = this.position.x + this.direction.x * SCALE;
		this.position.y = this.position.y + this.direction.y * SCALE;
	}

	this.show = function() {
		noStroke();
		fill(200);
		rect(this.position.x, this.position.y, SCALE, SCALE);	
	}
}

function apple() {
	this.position = createVector(50, this.y);

	this.setPosition = function() {
		let tile = random(grid.tiles);
		this.position = createVector(tile.x, tile.y);
	}

	this.show = function() {
		noStroke();
		fill(200, 0, 0);
		rect(this.position.x, this.position.y, SCALE, SCALE)
	}
}