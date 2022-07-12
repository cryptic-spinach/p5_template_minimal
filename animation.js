let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(-700, 700, 0, 0.1);
  slider.position(windowWidth/2 - 150, windowHeight/2 + 200);
  slider.style('width', '300px');
}
  
function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);

  noFill();
  stroke(255);
  ellipse(0, 0, slider.value());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  slider.position(windowWidth/2 - 150, windowHeight/2 + 200);
}