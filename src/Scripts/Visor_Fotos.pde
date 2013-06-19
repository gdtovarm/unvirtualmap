PImage img;
float rotX = 0;
float rotY = 0;
String name;

void setup(){
  size(900,300,P3D);
  
  var a =  window.location.toString();
  name = a.substring(a.indexOf("=")+1);
  
  img = requestImage("../FPanoramicas/"+name+".jpg");
  noStroke();
}

void draw(){
  background(255);
  
  if(img.width > 0){
	pushMatrix();
	translate(450,150,600);
	rotation();
	rotateX(rotX);
	rotateY(rotY);
	cylinder(600,500,40);
	popMatrix();
  }
}

void rotation(){
	if(mousePressed){
		if(mouseX < width/2) rotY -= 0.012;
		if(mouseX > width/2) rotY += 0.012;
		if(mouseY > 220 && rotX > -0.1) rotX -= 0.005;
		if(mouseY < 80 && rotX < 0.1) rotX += 0.005;
	}
}

void cylinder(float w, float h, int sides)
{
  float angle;
  float[] x = new float[sides+1];
  float[] z = new float[sides+1];
 
  //get the x and z position on a circle for all the sides
  for(int i=0; i < x.length; i++){
    angle = TWO_PI / (sides) * i;
    x[i] = sin(angle) * w;
    z[i] = cos(angle) * w;
  }
 
  //draw the top of the cylinder
  beginShape(TRIANGLE_FAN);
 
  vertex(0,   -h/2,    0);
 
  for(int i=0; i < x.length; i++){
    vertex(x[i], -h/2, z[i]);
  }
 
  endShape();
 
  //draw the center of the cylinder
  beginShape(QUAD_STRIP); 
  
  texture(img);
  for(int i=0; i < x.length; i++){
    float u = (img.width) / sides * i;
    
    if(i==0){
      vertex(x[i]-7, -h/2, z[i],u,0);
      vertex(x[i]-7, h/2, z[i],u,img.height);
      continue;
    }
    vertex(x[i], -h/2, z[i],u,0);
    vertex(x[i], h/2, z[i],u,img.height);
    
  }
 
  endShape();
 
  //draw the bottom of the cylinder
  beginShape(TRIANGLE_FAN); 
 
  vertex(0,   h/2,    0);
 
  for(int i=0; i < x.length; i++){
    vertex(x[i], h/2, z[i]);
  }
 
  endShape();
}
