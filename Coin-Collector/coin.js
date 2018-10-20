class Coin {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    } 

    pulse() {

    }
    
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.r);
    }
}