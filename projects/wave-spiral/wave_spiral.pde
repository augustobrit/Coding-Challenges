final int ENTITY_AMOUNT = 24;
final int DIAMETER = 100;
    
void setup()
{
 size(800,800);
 smooth();
 frameRate(24);
 background(255);

 float r = DIAMETER / 2;
 float circunference = PI * DIAMETER;
 float size = (circunference / ENTITY_AMOUNT);
 float cx = width/2.0;
 float cy = height/2.0;
   
 fill(0);
 for (int j = 1; j < 10; j++) {
   float d = DIAMETER * j;
   float c = PI * d;
   for (int i = 1; i <= ENTITY_AMOUNT; ++i) {
     float angle = i * TWO_PI / ENTITY_AMOUNT;
     float x = cx + cos(angle) * r * j;
     float y = cy + sin(angle) * r * j;
     circle(x, y, size);
   }
 }
}
