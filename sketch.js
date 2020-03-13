let canvas;
let arenoFont;
let img;
let gutterSize;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, 90);
}

function setup() {
  canvas = createCanvas(windowWidth,500);
  img = loadImage('assets/manhole.png');
  arenoFont = loadFont('fonts/Areno-Regular.ttf')
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  centerCanvas();
  imageMode(CENTER);
  //gutterSize = ((windowWidth - 1024)/2.5);
}

function draw() {
background(0);

let gapL = width/2 - 300;
let gapR = width/2 + 180;

textSize(40)

crosswalkHorizontal(gapL, gapR)

if (mouseY < 1000 && mouseY > 0) {
textSize(500)
fill(254, 10, 10)
//if(map(mouseY, 0, height, 0, width/2) < (width/2 + 100)) {
text("MSA", -1100 + map(mouseY, 0, height, 0, width), height/1.18)
//}

fill(84, 215, 215)
//if(map(mouseY, 0, height, 0, width/2) < (width/2 + 100)) {
text("NYC", width - map(mouseY, 0, height, 0, width), height/1.18)
//}
}

crosswalkHorizontal_FG()

fill(0)
rect((gapL), 0, (gapR - gapL + 150), height)

translate(width/2, height/2);
rotate(map(mouseY, 0, height, 0, PI));
image(img, 0, 0, img.width/map(mouseY, 0, height, 1.25, 1), img.height/map(mouseY, 0, height, 1.25, 1));

}

function crosswalkHorizontal(gapL, gapR){


  for (i = -1000; i < 4000; i += 200) {
    fill(255);
    xPos = 20 + i - mouseY;
    if (i < gapL || i > gapR) {
    rect(20 + i, 50, 100, 400);
  }
  }

}

function crosswalkHorizontal_FG(){
  let gapL = width/2 - 300;
  let gapR = width/2 + 180;

  for (i = -1000; i < 4000; i += 200) {
    fill(0);
    xPos = 20 + i - mouseY;
    if (i < gapL || i > gapR - 100) {
    rect(120 + i, 50, 100, 400);
  }
  }

}
