var player;

var squares = []

const MAX_SQUARES = 10;
const MIN_SIZE = 10;
const MAX_SIZE = 50;
const OFFSET = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);

	player = new Player(width/2, height - 100, 10, 50);

	for(let i = 0; i < MAX_SQUARES; i++) {
		let size = random(MIN_SIZE, MAX_SIZE);
		let x = random(width);
		let y = (i + 1) * size + OFFSET;
		squares[i] = new Square(x, y, size, size);
	}
}

function draw() {
	background(25);

	player.move();
	player.display();

	for(let square of squares) {
		square.fall();
		square.display();
	}
}

function keyPressed() {

}