class Entity {
  float x;  
  float y;
  float r;
  
  Entity(float x, float y, float r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  void display() {
    noStroke();
    fill(255, 200, 0);
    circle(x, y, r);
  }
  
  void move() {
  }
}
