class Entity {
  PVector center;
  PVector position;
  PVector direction;
    
  float angle;
  float diameter;
  
  public Entity(float angle, float d) {
    center = new PVector(width/2, height/2);
    position = new PVector(center.x, center.y);
    direction = new PVector(cos(angle), sin(angle));
    
    diameter = d;
  }
  
  public void Show() {
    noStroke();
    fill(200);
    ellipse(position.x, position.y, diameter, diameter);
  }
  
  public void Shift(int index, ArrayList<Entity> entities) {
    for(int i = index + 1; i < entities.size() - 1; i++) {
      if (PVector.dist(position, entities.get(i).position) < diameter) {
        position.add(direction);
      }
    }
  }
  
  public Boolean HasReachedBorder(){ 
    if (PVector.dist(center, position) > width / 2 - diameter ||
        PVector.dist(center, position) > height / 2 - diameter) 
      return true;
      
     return false;
  }
}
