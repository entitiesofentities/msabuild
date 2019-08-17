let f = 100;
let v = 68
let canvas;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, 90);
}

function setup() {
  canvas = createCanvas(1024,550);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  centerCanvas();
  background(255, 0, 200);
}

function draw() {
fill (0);
rect(0,0,width,height);
fill(255);
textSize(f);

//text(mouseY,50,100);
//text(pow(mouseY, 1.1), 50, 200);

if (mouseY < 50) {
text("S", width/3.5, height/2);
text("TR", width/3.5 + (v), height/2);
text("EE", width/3.5 + (v * 3), height/2);
text("TS", width/3.5 + (v * 5), height/2);
}

if (mouseY > 50 && mouseY < 100) {
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3), height/2);
  text("TS", width/3.5 + (v * 5), height/2);
}

if (mouseY > 100 && mouseY < 200) {
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3), height/2);
  text("TS", width/3.5 + (v * 5), height/2 + (mouseY - 100));
}

if (mouseY > 200 && mouseY < 300) {
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3) + (pow(mouseY,1.05) - 250), height/2);
  text("TS", width/3.5 + (v * 5), height/2 +(mouseY - 100));
}

if (mouseY > 300 && mouseY < 410) {
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3) + (pow(mouseY,1.05) - 250), height/2);
  text("TS", width/3.5 + (v * 5), height/2 + (mouseY - 100));
  text("M  A", pow(mouseY, 1.2) - 1150, height/2);
}

if (mouseY > 410 && mouseY < 850) {
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3) + (pow(mouseY,1.05) - 250), height/2);
  text("TS", width/3.5 + (v * 5), height/2 + (mouseY - 100));
  text("M  A", 215, height/2);
  fill(150,map(mouseY, 422, 500, 0, 255));
  text("Brooklyn", 450, height/2);
}

if (mouseY > 500) {
  fill(255);
  text("S", width/3.5, height/2);
  text("TR", width/3.5 + (v), height/2 - (mouseY - 50));
  text("EE", width/3.5 + (v * 3) + (pow(mouseY,1.05) - 250), height/2);
  text("TS", width/3.5 + (v * 5), height/2 + (mouseY - 100));
  text("M  A", 215, height/2);
  fill(150,255);
  text("Brooklyn", 450, height/2);
  fill(250,50,50,255);
  textSize(f*1.1);
  text("2020", width/2.5, height/1.4)
}


}
