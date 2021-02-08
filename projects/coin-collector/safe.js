class Safe {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    display() {
        noFill();
        strokeWeight(2);
        stroke(this.color)
        ellipse(this.x, this.y, this.r);
    }
}