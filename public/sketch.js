const num = 100;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  stroke(255);

  beginShape();
  for (let i = 0; i < num; i++){
    vertex(i*width/num, height / 2+50*sin(i));
    
  }
 
  endShape();
}
