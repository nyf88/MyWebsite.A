function setup() {
  createCanvas(600, 600);
  background(255);
  angleMode(DEGREES);
  noStroke();

  translate(width / 2, height / 2);

  recursiveDrawline(4, 3, 0.3);
  noLoop();
}

function recursiveDrawline(d, sz, s) {
  if (d <= 0) return;
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);
    translate(sz, 0);
    scale(s);
    drawSolidFigure();
    pop();
  }
  recursiveDrawline(d - 1, sz + 45, s * 1.8);
}
function drawSolidFigure() {
  fill(0);
  quad(30, 55, 50, 30, 50, 55, 30, 80); //left
  fill(120);
  quad(50, 30, 70, 55, 70, 80, 50, 55); //right
  fill(220);

  quad(30, 80, 50, 55, 70, 80, 50, 105); //button
  fill(200);
  quad(70, 80,70, 55, 150, 75, 150, 35);
  //quad(50, 55, 50, 30, 105, 75, 120, 55);
}
