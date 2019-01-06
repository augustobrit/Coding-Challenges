let w = 100;

function setup() {
	createCanvas(500, 500, WEBGL);
	
	var fov = 60 / 180 * PI;
	var camZ = height / 2.0 / tan(fov / 2.0);
	perspective(fov, width / height, camZ * 0.1, camZ * 10);

}

function draw() {
	background(50);

	rotateY(radians(30));

	
	noFill();
	for(let z = 0; z < width; z+= w) {
		push();
		translate(0, 0, z - width / 2);
		box(w, w, 0);
		pop();
	}
}