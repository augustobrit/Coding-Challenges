final float GOLDEN_ANGLE = PI*(3-sqrt(5));
final float ENTITY_DIAMETER = 10;
final float LIMIT = 300;

ArrayList<Entity> entities;

int c;

void setup() {
   size(480, 360);
   background(50);
   
   entities = new ArrayList<Entity>();
   entities.add(new Entity(0, ENTITY_DIAMETER));
}

void draw() {
  background(50);
  
  for(int i = 0; i < entities.size(); i++) {
      entities.get(i).Shift(i, entities);
      entities.get(i).Show();
      
      if (entities.get(i).HasReachedBorder())
      entities.remove(i);
  }
   
  c++;
  
  entities.add(new Entity(c * GOLDEN_ANGLE, ENTITY_DIAMETER - c);
}
