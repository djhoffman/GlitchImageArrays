/*
	Simple image display example

	mouse + space bar will invert
  Also, display a random bit of text
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~VARIABLES

var bRegular = true;
var imageList = [];
var img;

//strings
var stringList;
var displayString = "";    // which string we will display

//timing
var startMillis;

//state machine
var state;
var stateOne = 0;
var stateTwo = 1;
var stateThree = 2;
var stateFour = 3;
var stateFive = 4;
var stateSix = 5;
var stateSeven = 6;
var stateEight = 7;
var stateNine = 8;
var stateTen = 9;
var stateEleven = 10;
var stateTwelve = 11;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS

// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('assets/d1.png'); 			
  imageList[1] = loadImage('assets/d2.png');
  imageList[2] = loadImage('assets/d3.png');
  imageList[3] = loadImage('assets/d4.png');
  imageList[4] = loadImage('assets/d5.png');
  imageList[5] = loadImage('assets/d6.png');
  imageList[6] = loadImage('assets/a1.png');      
  imageList[7] = loadImage('assets/a2.png');
  imageList[8] = loadImage('assets/a3.png');
  imageList[9] = loadImage('assets/a4.png');
  imageList[10] = loadImage('assets/a5.png');
  imageList[11] = loadImage('assets/a6.png');
  stringList = ["RUFF RUFF", "BORK BORK😎", "GIVE ME TREAT😖😖", "I WANT TO PLAY👹", "I WANT TO GO FOR A WALK🤡", "I WANT TO PLAY FETCH🙈"];
print(imageList);
  // uncomment to load from a file
  //stringList = loadStrings('assets/displaytext.txt');
}

function setup() {

	imageMode(CENTER);

  // chooseNewImage();
  
	createCanvas(1024, 800);

  startMillis = millis();
state=stateOne;
   // show how many elements are in the array
  print(stringList.length + "elements");
  print(stringList);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAW

function draw() {
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BACKGROUND
  background(255, 0, 255);

  if (state == stateOne) {
    drawOne();  
  }
  if (state == stateTwo) {
    drawTwo();
  }
  if (state == stateThree) {
    drawThree();
  }
  if (state == stateFour) {
    drawFour();
  }
  if (state == stateFive) {
    drawFive();
  }
  if (state == stateSix) {
    drawSix();
  }

  //yellow ones
  if (state == stateSeven) {
    drawSeven();  
  }
  if (state == stateEight) {
    drawEight();
  }
  if (state == stateNine) {
    drawNine();
  }
  if (state == stateTen) {
    drawTen();
  }
  if (state == stateEleven) {
    drawEleven();
  }
  if (state == stateTwelve) {
    drawTwelve();
  }


//SHAPES OVER THE YELLOW ONES
if (state == stateSeven) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }
  if (state == stateEight) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }
  if (state == stateNine) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }
  if (state == stateTen) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }
  if (state == stateEleven) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }
  if (state == stateTwelve) {
    fill(250, 209, 255, 200);  // lav color
    noStroke();
    ellipse(232, 282, 200, 200);   //lavcircle
    fill(209, 244, 255, 160);         // blue color
    ellipse(328, 100, 200, 180);  // blue circle
    fill(254, 255, 209, 150);         // yellow color
    ellipse(368, 218, 200, 200);  // yellow circle
  }




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TIMING
  // When timer expires, after 1000ms, choose a new random image
  if( millis() > startMillis + 1000) {	
    // Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();
    chooseNewItem();
    startMillis = millis();
 }
  
  // draw the image
  fill(255,255,0);
  text(displayString,150,100);
  textSize(50)
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAWING POSITION
  function drawOne() {
    image(imageList[0], width/2, height/2);

    print("drawOne")
    
  }

  function drawTwo () {
    image(imageList[1], width/2, height/2);

  }

   function drawThree () {
    image(imageList[2], width/2, height/2);

  }

   function drawFour () {
    image(imageList[3], width/2, height/2);

  }

   function drawFive () {
    image(imageList[4], width/2, height/2);

  }

   function drawSix () {
    image(imageList[5], width/2, height/2);

  }
//YELLOW ONES
//YELLOW ONES
//YELLOW ONES

   function drawSeven () {
    image(imageList[6], width/2, height/2);

  }

   function drawEight () {
    image(imageList[7], width/2, height/2);

  }

   function drawNine () {
    image(imageList[8], width/2, height/2);

  }

   function drawTen () {
    image(imageList[9], width/2, height/2);

  }

   function drawEleven () {
    image(imageList[10], width/2, height/2);

  }

   function drawTwelve () {
    image(imageList[11], width/2, height/2);

  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~KEY PRESSED

function keyPressed() {
  if (key =='1') {
    state = stateOne;
    print("changing to 1");
  }
  if (key =='2') {
    state = stateTwo;
  }
  if (key =='3') {
    state = stateThree;
  }
  if (key =='4') {
    state = stateFour;
  }
  if (key =='5') {
    state = stateFive;
  }
  if (key =='6') {
    state = stateSix;
  }
//yellow ones
  if (key =='q') {
    state = stateSeven;
  }
  if (key =='w') {
    state = stateEight;
  }
  if (key =='e') {
    state = stateNine;
  }
  if (key =='r') {
    state = stateTen;
  }
  if (key =='t') {
    state = stateEleven;
  }
  if (key =='y') {
    state = stateTwelve;
}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHOOSING THE ITEMS

function chooseNewItem() {
  displayString = random(stringList);
  print(displayString);
}
// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewImage() {
  //img = random(imageList);
state++; //when the state is changing
if(state>stateSix)
  state=stateOne;
}
