function Drop() {
	this.x = random(width);
	this.y = random(-height, -height/2);
	this.z = random(0,20);
	this.size = map(this.z, 0, 20, 10, 30);
	this.ySpeed = map(this.z, 0, 20, 7.5, 15);
	this.dropColor = 255;

	this.Display = function () {
		this.dropColor = map(mouseX, 0, width, 255, 0);
		stroke(this.dropColor);
		line(this.x, this.y, this.x, this.y + this.size);

	};

	this.Fall = function () {
		this.y += this.ySpeed;

		if (this.y > height) {
			this.y = random(-200, -100);
			this.x = random(width);
		}
	};
}