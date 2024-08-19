// vocal, drum, bass, and other are volumes ranging from 0 to 100
// rain falling
let ypos = 0;
let ypos2 = -20;
let ypos3 = -40;
let ypos4 = -200;
let ypos5 = -300;
let ypos6 = -350;
// image seq
let Girl = [];
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 0, 0); // (97, 66, 57)
  textFont('Courier New'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(2);
  Girl.push(loadImage('walking1.png'));
  Girl.push(loadImage('walking2.png'));
  Girl.push(loadImage('walking3.png'));


 // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── IMAGE SEQUENCE
var VocalFrame = int(map(vocal, 0, 100, 0, 3));

console.log(VocalFrame);
push();
scale(1);
image(Girl[VocalFrame], width/2.5, height/2.5);
pop();

  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── MOUSE CURSOR
  push();
  translate(mouseX, mouseY);
  strokeWeight(1);
  stroke(3, 252, 215);
  fill(0, 0, 0);
  circle(0, 0, 30);
  pop();
  let x = (0, 100);
  let y = (0, 100);
  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── RAIN FALLING
  fill(3, 252, 215);
  noStroke(0);
  rect (50, ypos, 5, 5);
  rect (100, ypos2, 5, 5);
  rect (400, ypos3, 5, 5);
  rect (550, ypos4, 5, 5);
  rect (550, ypos5, 5, 5);
  rect (300, ypos6, 5, 5);
  ypos++
  ypos2++
  ypos3++
  ypos4++
  ypos5++
  ypos6++
  
  if (ypos > 1000) {
    ypos = 0;
    ypos2 = -20;
    ypos3 = -40;
    ypos4 = -100;
    ypos5 = -300;
    ypos6 = -350;
  }
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── BASSMAP BARS
  
  strokeWeight(1);
  stroke(bass, 92, 80);

  var bassMap = map(bass, 0, 100, 0, 200);
  var lengthOfLine = 300;
  var LineStart = 300;
  var lineEnd = LineStart + lengthOfLine;

  // line(LineStart, 300, lineEnd, 300);
  // line(LineStart, 310, lineEnd, 310);
  // line(LineStart, 320, lineEnd, 320);
  
  for (var i = 1; i < bassMap; i++) {
    var lineStep = i;
    //line(LineStart, 30, lineEnd, 90);
    line(width-lineStep, 30, width-lineStep, 90);
  }

  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── LIFE BAR
  // LIFE BAR
  fill(0, 0, 0);
  strokeWeight(2);
  stroke(3, 252, 215);
  rect(130, 30, 200, 20);

  // HEART
  push();
  scale(0.7);
  noStroke();
  fill(3, 252, 215);
  rect(50, 50, 10, 10);
  rect(40, 50, 10, 10);
  rect(20, 30, 10, 10);
  rect(20, 20, 10, 10);
  rect(70, 20, 10, 10);
  rect(30, 20, 10, 10);
  rect(60, 20, 10, 10);
  rect(70, 30, 10, 10);
  rect(40, 35, 10, 22);
  rect(50, 35, 10, 22);
  rect(30, 35, 10, 20);
  rect(60, 35, 10, 22);
  rect(45, 60, 10, 10);
  fill(0, 0, 0);
  rect(45, 23, 10, 10);
  pop();
  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── GRADIENT SHAPE


  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── FACE BOX
  fill(0, 0, 0);
  stroke(3, 252, 215);
  // rect(350, 500, 390, 100);
  rect(100, 500, 140, 170);
  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── TEXT BOX
  fill(0, 0, 0);
  stroke(3, 252, 215);
  // rect(350, 500, 390, 100);
  rect(360, 500, 350, 170);
  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── LYRICS TEXT
  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;
  
  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  noStroke (0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  //text("vocals", bar_pos_x, height /  2 + 1 * bar_spacing + 8);
  
  // //  // drum bar is green
  //fill(3, 252, 215);
  // fillGradient('radial', 
  //   from : [200, 200, 0], // x, y, radius
  //   to : [200, 200, 200], // x, y, radius 
  //   )
  // rect (bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  // text fill(0);
  //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
  
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  noStroke (0);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
  
  // // other bar is white
  //  fill(200, 200, 200);
  //  noStroke (0);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
  
  // display "words"
  translate(-90, 250);
  fill(3, 252, 215);
  noStroke(0);
  textAlign(LEFT);
  textSize(20);
  text(words, width / 2, height / 3);
  
  // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── FACE TALKING
  //  about map: the variable we want to represent, the range the variable has, then the values that i want to sustituion)
  // EYES
  push();
  scale(0.3, 0.3);
  translate(335, 500);
  let eyeSize = map(drum, 0, 100, 100, 150); // moves eyes de acuerdo a drum in the song
  
  fill(0, 0, 0);
  strokeWeight(25);
  stroke(3, 252, 215);
  ellipse(200, 200, eyeSize, eyeSize) // eyes
  ellipse(400, 200, eyeSize, eyeSize)
  
  // HIGHLIGHT EYES
  fill(255, 255, 255);
  noStroke();
  ellipse(230, 220, 30, 30) // highlight in eyes
  ellipse(430, 220, 30, 30)
  
  // MOUTH
  translate(5, 40);
  let mouthSize = map(vocal, 0, 100, 60, 350); // moves eyes de acuerdo a vocals in the song
  fill(3, 252, 215);
  noStroke();
  rect(300, 400, 300, mouthSize);
  
  //TEETH
  let teethPosition = 400 - mouthSize / 2;
  fill(0, 0, 0);
  noStroke();
  triangle(250, teethPosition, 350, teethPosition, 300, teethPosition + 50) // x values are normal, teeth position is a y value
  tooth(300, teethPosition);
  tooth(200, teethPosition);
  tooth(400, teethPosition);
  
  function tooth(toothX, teethPosition) {
    0
    triangle(toothX - 50, teethPosition, toothX + 50, teethPosition, toothX, teethPosition + 50);
  }
  pop();
  
  
}
// ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── PIXEL PARTICLES MOVING (animating shapes)
// var Xmove = 50;

// function draw () {
  //   fill (255, 3, 3);
  //   ellipse (100+Xmove, 200, 45, 45);
  
  //   Xmove = Xmove + 1;
  // }