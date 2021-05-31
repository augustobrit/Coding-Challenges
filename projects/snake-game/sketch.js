const SCALE = 25;

var grid;
var snake;
var apple;

function setup() {
	createCanvas(windowWidth, windowHeight);
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
	if (keyCode === UP_ARROW || keyCode === 87) {
		snake.setDirection(0, -1);
	}
	if (keyCode === LEFT_ARROW || keyCode === 65) {
		snake.setDirection(-1, 0);
	}
	if(keyCode === DOWN_ARROW || keyCode === 83) {
		snake.setDirection(0, 1);
	}
	if (keyCode === RIGHT_ARROW || keyCode === 68) {
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
	this.node = [];
	this.nodes = 0;

	this.eat = function() {
		let d = dist
				(
					snake.position.x,
					snake.position.y,
					apple.position.x,
					apple.position.y
				);

		if(d < 1) {
			this.nodes++;
			print("NODES: ", this.nodes);
			return true;
		}
		return false;
	}

	this.setDirection = function(x, y) {
		this.direction = createVector(x, y);
	}

	this.move = function() {
		if(this.nodes === this.node.length) {		
			for(let i = 0; i < this.node.length - 1; i++) {
				this.node[i] = this.node[i + 1];
			}
		}

		this.node[this.nodes - 1] = createVector(
				this.position.x, 
				this.position.y
			);

		this.position.x = constrain(
			this.position.x + this.direction.x * SCALE,
			0, 
			width - SCALE
		);
		
		this.position.y = constrain(
			this.position.y + this.direction.y * SCALE,
			0,
			height - SCALE
		);
	}

	this.show = function() {
		noStroke();
		fill(200);
		for(let i = 0; i < this.node.length; i++) {
			rect(this.node[i].x, this.node[i].y, SCALE, SCALE)
		}
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