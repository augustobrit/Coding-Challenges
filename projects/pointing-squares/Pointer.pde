class Pointer {
  float x;
  float y;
  float w;
  float h;
  color c;
  
  Pointer(float x, float y, float w, float h, color c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }
  
  void display() {
    noStroke();
    fill(c);
    rect(x, y, w, h);
  }
  
  void turn() {
    
  }
}
