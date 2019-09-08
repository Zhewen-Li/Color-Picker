// Assignment- color picker
var pickedColor = 0;
var a =0;
var b = 0;
var frame = '#FFFCF9';
var overBar = false;
var slider;
var button;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  noStroke();  
  colorMode(HSB, width, height, 85);   

  // slider 
  slider = createSlider(0, 255, 100);
  slider.position(width/9*4, height/2+height/2.6);
  slider.style('width', '158px');

  // display a reset color button
  button = createButton('Reset Color');
  button.position(width/6, height/2+height/4.5);

}

// color picker 

function mousePressed(){
  if(mouseX>=0 && mouseX<width/20 && mouseY>=0 && mouseY<=height/2 ){
    pickedColor = width/40; a=100; b=66;
  }
  else if(mouseX>=width/20 && mouseX<(width/20)*2 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*3/2; a=100; b=66;
  }else if(mouseX>=(width/20)*2 && mouseX<(width/20)*3 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*5/2; a=100; b=66;
  }else if(mouseX>=(width/20)*3 && mouseX<(width/20)*4 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*7/2; a=100; b=66;
  }else if(mouseX>=(width/20)*4 && mouseX<(width/20)*5 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*9/2; a=100; b=66;
  }else if(mouseX>=(width/20)*5 && mouseX<(width/20)*6 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*9/2; a=100; b=66;
  }else if(mouseX>=(width/20)*6 && mouseX<(width/20)*7 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*11/2; a=100; b=66;
  }else if(mouseX>=(width/20)*7 && mouseX<(width/20)*8 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*13/2; a=100; b=66;
  }else if(mouseX>=(width/20)*8 && mouseX<(width/20)*9 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*15/2; a=100; b=66;
  }else if(mouseX>=(width/20)*9 && mouseX<(width/20)*10 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*17/2; a=100; b=66;
  }else if(mouseX>=(width/20)*10 && mouseX<(width/20)*11 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*19/2; a=100; b=66;
  }else if(mouseX>=(width/20)*11 && mouseX<(width/20)*12 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*21/2; a=100; b=66;
  }else if(mouseX>=(width/20)*12 && mouseX<(width/20)*13 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*23/2; a=100; b=66;
  }else if(mouseX>=(width/20)*13 && mouseX<(width/20)*14 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*25/2; a=100; b=66;
  }else if(mouseX>=(width/20)*14 && mouseX<(width/20)*15 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*27/2; a=100; b=66;
  }else if(mouseX>=(width/20)*15 && mouseX<(width/20)*16 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*29/2; a=100; b=66;
  }else if(mouseX>=(width/20)*16 && mouseX<(width/20)*17 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*31/2; a=100; b=66;
  }else if(mouseX>=(width/20)*17 && mouseX<(width/20)*18 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*33/2; a=100; b=66;
  }else if(mouseX>=(width/20)*18 && mouseX<(width/20)*19 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*35/2; a=100; b=66;
  }else if(mouseX>=(width/20)*19 && mouseX<(width/20)*20 && mouseY>=0 && mouseY<=height/2){
    pickedColor = (width/20)*37/2; a=100; b=66;
  }
  
  // for reset color button;
  else if(mouseX>= width/6 && mouseX<width/6+width/15 && mouseY>= height/2+height/4.5 && mouseY<height/2+height/3){
    pickedColor = 0; a=null; b=null;
  }
}

function draw() {
  
  // your colour picker code goes here

  var recWidth = width/20;
 
  // set color bars for presenting colors.
 
  for(var i=-1; i<=19;i++){
    fill((recWidth*i+recWidth*(i+1))/2,100,66);
    rect(recWidth*i+0.5, 0, recWidth, height/2);

  // set frame for bars when the cursor is over one bar. 

    if(mouseX>=recWidth*(i+1) && mouseX<recWidth*(i+2) && mouseY>=0 && mouseY<=height/2){
      overBar = true;
    }else{
      overBar = false;  
    }

    if(overBar){
      stroke(frame);
      strokeWeight(2);  
    }else{
      noStroke();
    }
  } 

  // display the currently "picked" colour in the left-middle rectangle
  fill(pickedColor, a, b);
  rect(width/20, height/2+height/3.5, 110, 35, 25, 25, 25, 25);

  drawSeperations1();
  drawSeperations2();
  instruction();

  // display the chosen color and make further changes

  fill(pickedColor,slider.value(),b);
  var rec;
  rec = rect(width/9*4, height/2+height/4.6, width/8, height/6, 15, 15, 15, 15);

  // try the color on a drawing pad.
  if(mouseX>= width/3*2 && mouseX<width && mouseY >=height/2 && mouseY<height){
    if(mouseIsPressed){
      if(mouseButton===LEFT){
        push();
          noStroke();
          fill(pickedColor, slider.value(),b);
          ellipse(mouseX,mouseY,10,10);
        pop();
      }
      if(mouseButton===RIGHT){
        push();
          noStroke();
          fill(255);
          ellipse(mouseX,mouseY,20,20);
        pop();
      }
    }
  } 
}

function instruction(){
  // insturction notes
  push();
    textSize(18);
    fill('#90A4AE');
    text('① Pick a color from the above bars', width/33, height/2+height/6);
    text('② Move the slider to change saturation', width/3+width/25, height/2+height/6);
  pop();

  push(); 
    textSize(16);
    fill('#B0BEC5');
    text('Color Selected:', width/20, height/2+height/4);
  pop();

  push();
    textSize(14);
    fill('#BDBDBD');
    text('( Reset: change color to black )', width/20, height/2+height/2.5);
  pop(); 
  // drawing pad
  push();
    textSize(12);
    textFont('Georgia');
    fill('#BDBDBD');
    text('Press mouse button: Left: pen ; Right: rubber.', width/3*2+width/90, height/2+height/50);
    text('', width/3*2+width/40, height/2+height/30);
  pop();

  // title: color picker

  push();
    textSize(60);
    textFont('Forte');
    stroke('#D1C4E9');
    strokeWeight(10);
    fill('#70587C');
    text('Color', width/15, height/2);
    text('Picker', width/60, height/2+height/15);
  pop();
     
}

function drawSeperations1(){
  // dotted line 1 as seperation lines
  push();
    fill('#CFD8DC');
    for(var i= 0; i< 15; i++){
      rect(width/3, height/2+10+20*i, 3, 8, 2, 2, 2, 2);
    }
  pop();

}

function drawSeperations2(){
  // dotted line 2 as seperation lines
  push();
    fill('#CFD8DC');
    for(var i= 0; i< 15; i++){
      rect(width/3*2, height/2+10+20*i, 3, 8, 2, 2, 2, 2);
    }
  pop();

}




  
