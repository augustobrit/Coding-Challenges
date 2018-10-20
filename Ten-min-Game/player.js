class Player {
    constructor(x, y, w, h,) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display() {
        noStroke();
        fill(0, 0, 0, 100);
        rect(this.x, this.y, this.w, this.h)
    }

    move() {

    }
}