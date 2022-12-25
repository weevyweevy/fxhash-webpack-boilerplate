const points = 400;
const period = 1 + Math.floor(fxrand() * 10); //gives # btwn 1 and 11. Math.floor rounds down to nearest integer
const num = 10 + Math.floor(fxrand() * 5); //gives value btwn 10 and 15
const color1 = [255, 0, 0];
const color2 = [0, 255, 255]; 
  
let amp = fxrand();
if (amp < 0.5) {
  amp = 10;
} else {
  amp = 50;
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  //noFill();
  stroke(255, 0, fxrand() * 255);
  for (let j = -num / 2; j <= num / 2; j++){
   //col = lerpColor(color1, color2, (j + num / 2) / num);
    beginShape();
    vertex(0, height);
    for (let i = 0; i <= points; i++) {
      let y = height/2+j*height /(num+1);
      // when j = 1, y = 1/3 height
      // when j = 2, y = 2/3 height
      vertex(i * width / points, y+amp*pow(cos(i / period + frameCount*j/50), 1));
    }
    vertex(width, height);
    endShape();
  }


}
