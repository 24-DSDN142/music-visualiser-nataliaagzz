// let img;
// let firstRun; IMAGEEEEEEEEEEEEEEEEEEEEEEE

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
// if(firstRun) IMAGEEEEEEEEEEEEEEEEEEEE

  background (110, 59, 41); // (97, 66, 57)
  textFont ('Verdana'); // please use CSS safe fonts
  rectMode (CENTER)
  textSize (24);
  
   //let bar_spacing = height / 10;
   //let bar_height = width / 12;
   //let bar_pos_x = width / 2;
  

   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
  // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
 
   // PBA VOICE
   //about map: // the variable we want to represent, the range the variable has, then the values that i want to sustituion)
   
   let eyeSize = map (drum, 0, 100, 100, 150); // moves eyes de acuerdo a drum in the song
   
   fill (41, 41, 41);
   noStroke ();
   ellipse (200, 200, eyeSize, eyeSize) // eyes
   ellipse (400, 200, eyeSize, eyeSize)

   fill (255, 255, 255);
   noStroke ();
   ellipse (230, 220, 20, 20) // highlight in eyes
   ellipse (430, 220, 20, 20)
   
   let mouthSize = map (vocal, 0, 100, 60, 350); // moves eyes de acuerdo a vocals in the song
   fill (199, 0, 0);
   rect (300, 400, 300, mouthSize);
   
   let teethPosition = 400 - mouthSize / 2;
   fill (255, 255, 255);
   noStroke ();
   //ellipse (300, teethPosition, 10);
  //triangle (250, teethPosition, 350, teethPosition, 300, teethPosition + 50 ) // x values are normal, teeth position is a y value
  tooth (300, teethPosition);
  tooth (200, teethPosition);
  tooth (400, teethPosition);

  }
  
  function tooth (toothX, teethPosition) {
  triangle (toothX - 50, teethPosition, toothX + 50, teethPosition, toothX, teethPosition + 50 );
}