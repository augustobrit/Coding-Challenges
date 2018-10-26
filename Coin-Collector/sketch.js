var bColor; 
var pColor;
var cColor;
var sColor;

var player;
var safe;
var coins = [];

const PLAYER_RADIUS = 50;
const SAFE_RADIUS = 100;
const COIN_RADIUS = 25;
const COIN_AMOUNT = 20;

var input;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// Define background, player and coin colors.
	bColor = color(65);
 	pColor = color(200, 0, 0, 100);
	cColor = color(255, 204, 0, 100);
	sColor = color(200, 200, 200, 100); 

	// Create player object.
	player = new Player(width/2, height/2, PLAYER_RADIUS, this.pColor);

	// Create safe zone object.
	safe = new Safe(width/2, height/2, SAFE_RADIUS, this.sColor);

	// Create coins to display on the screen.
	for(let i = 0; i < COIN_AMOUNT; i++) {
		let x = random(COIN_RADIUS, width - COIN_RADIUS);
		let y = random(COIN_RADIUS, height - COIN_RADIUS);
		coins[i] = new Coin(x, y, COIN_RADIUS, this.cColor);
	}
}

function draw() {
	background(bColor);

	player.display();

	safe.display();

	for(let coin of coins) {
		coin.pulse();
		coin.display();
	}
}

function keyPressed() {
	if (keyIsDown(UP_ARROW)) {
		player.move();
	}

	else if (keyIsDown(LEFT_ARROW)) {
		player.move();
	}

	else if(keyIsDown(DOWN_ARROW)) {
		player.move();
	}

	else if (keyIsDown(RIGHT_ARROW)) {
		player.move();
	}
}
