class Player {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    move(x, y, velocity) {
        
    }

    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.r);
    }
}