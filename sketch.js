var inc = 0;
var incRot = 0;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  document.documentElement.style.overflow = 'hidden';

  angleMode(DEGREES);
  frameRate(12);
  angleMode(DEGREES);

  noStroke();

}

function draw() {


  var from = color(200, 0, 0);
  var to = color(0, 0, 100);
  background(0);

  ortho();

  camera(width / 2, -height / 2, 100, 0, 0, 0, 0, 1, 0);
  directionalLight(255, 255, 255, 0, 1, -1);
  ambientLight(190);

  rotateY(frameCount * 3);
  for (i = -5; i < 5; i++) {
    push();
    translate(0, 0, -i * 40);
    for (j = -5; j < 5; j++) {
      push();

      inc += 0.9;
      var max = dist(mouseX, mouseY, pmouseX, pmouseY);
      var h = noise(inc) * (100 + max);



      var hCol = map(h, 10, 200, 0, 1);
      fill(lerpColor(from, to, hCol));

      translate(-j * 40, 0, 0);


      box(30, h, 30);
      pop();
    }

    pop();

  }



}
