// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background (0, 0, 0); // (97, 66, 57)
  textFont ('Courier New'); // please use CSS safe fonts
  rectMode (CENTER);
  textSize (2);

// ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── MOUSE CURSOR
push ();
translate (mouseX, mouseY);
strokeWeight (1);
stroke (3, 252, 215);
fill (0, 0, 0);
circle (0, 0, 30);
pop ();
let x = (0, 100);
let y = (0, 100);

   // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── TEXT BOX
   fill (0, 0, 0);
   stroke (3, 252, 215);
   // rect(350, 500, 390, 100);
   rect (100, 500, 150, 150);

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
 
   // drum bar is green
   fill(3, 252, 215);
   noStroke (0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   noStroke (0);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  // other bar is white
   fill(200, 200, 200);
   noStroke (0);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   translate (-90, 250);
   fill (3, 252, 215);
   noStroke (0);
   textAlign(LEFT);
   textSize(20);
   text(words, width/2, height/3);


  // // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── FACE TALKING ORIGINAL
  // //  about map: // the variable we want to represent, the range the variable has, then the values that i want to sustituion)
   
  // let eyeSize = map (drum, 0, 100, 100, 150); // moves eyes de acuerdo a drum in the song
   
  // fill (3, 252, 215);
  // noStroke ();
  // ellipse (200, 200, eyeSize, eyeSize) // eyes
  // ellipse (400, 200, eyeSize, eyeSize)

  // fill (255, 255, 255);
  // noStroke ();
  // ellipse (230, 220, 20, 20) // highlight in eyes
  // ellipse (430, 220, 20, 20)

  // let mouthSize = map (vocal, 0, 100, 60, 350); // moves eyes de acuerdo a vocals in the song
  // fill (3, 252, 215);
  // rect (300, 400, 300, mouthSize);

  // let teethPosition = 400 - mouthSize / 2;
  // fill (3, 252, 215);
  // noStroke ();
  // ellipse (300, teethPosition, 10);
  // triangle (250, teethPosition, 350, teethPosition, 300, teethPosition + 50 ) // x values are normal, teeth position is a y value
  // tooth (300, teethPosition);
  // tooth (200, teethPosition);
  // tooth (400, teethPosition);

  // function tooth (toothX, teethPosition) {
  // triangle (toothX - 50, teethPosition, toothX + 50, teethPosition, toothX, teethPosition + 50 );

  // }

// ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── FACE TALKING
  //  about map: // the variable we want to represent, the range the variable has, then the values that i want to sustituion)
 push ();
  let eyeSize = map (drum, 0, 100, 100, 150); // moves eyes de acuerdo a drum in the song
   
  fill (3, 252, 215);
  noStroke ();
  ellipse (200, 200, eyeSize, eyeSize) // eyes
  ellipse (400, 200, eyeSize, eyeSize)

  fill (255, 255, 255);
  noStroke ();
  ellipse (230, 220, 20, 20) // highlight in eyes
  ellipse (430, 220, 20, 20)

  let mouthSize = map (vocal, 0, 100, 60, 350); // moves eyes de acuerdo a vocals in the song
  fill (3, 252, 215);
  strokeWeight(1);
  stroke (3, 252, 215);
  rect (300, 400, 300, mouthSize);

  let teethPosition = 400 - mouthSize / 2;
  fill (0, 0, 0);
  strokeWeight(1);
  stroke (3, 252, 215);
  triangle (250, teethPosition, 350, teethPosition, 300, teethPosition + 50 ) // x values are normal, teeth position is a y value
  tooth (300, teethPosition);
  tooth (200, teethPosition);
  tooth (400, teethPosition);

  function tooth (toothX, teethPosition) {0
  triangle (toothX - 50, teethPosition, toothX + 50, teethPosition, toothX, teethPosition + 50 );
  }
pop ();

}

// // ─── ⋆⋅☆⋅⋆ ── ─── ⋆⋅☆⋅⋆ ── PIXEL PARTICLES MOVING (animating shapes)
// var Xmove = 50;
  
// function draw () {
//   fill (255, 3, 3);
//   ellipse (100+Xmove, 200, 45, 45);

//   Xmove = Xmove + 1;
// }
