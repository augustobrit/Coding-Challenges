final int SCALE = 20;
ArrayList<Pointer> pointers;

void setup() {
  size(500, 500);
  noLoop();
  
  pointers = new ArrayList<Pointer>();

  float rows = width/SCALE;
  float cols = height/SCALE; 
  for (int x = 0; x < rows; x++) {
    for (int y = 0; y < cols; y++) {
      float posX = x * SCALE;
      float posY = y * SCALE;
      color c = color(40);
        if ((x + y) % 2 == 0) 
      c = color(50);
      Pointer p = new Pointer(posX, posY, SCALE, SCALE, c);
      pointers.add(p);
    }
  }
}

void mouseMoved()
  {
    redraw();
  }

void draw() {
  background(200);

  for (Pointer p : pointers) {
    p.display();
    p.turn();
  }
}
