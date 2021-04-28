//variables go up here
let img1;
let img2;
let img3;
let sound;

function preload(){
  img1 = loadImage('assets/clock.jpg');
  img2 = loadImage('assets/garden.jpg');
  img3 = loadImage('assets/grass.jpg');
  //sound = loadSound('assets/water.mp3');
  //stuff to prepare gets done here
}

function setup() {
  createCanvas(1920, 1080);
//things to establish the "sandbox" go here
}

function draw() {
  background(255, 204, 0);
  image(img1, 0, 0);
  image(img2, 450, 300);
  image(img3, 1500, 100);
  //think of this area as a looping function that continuall puts things on screen, in order
}

function mousePressed() {
  //what happens when I click?
  if (sound.isPlaying()) {
    sound.stop();
  }
  else {
    sound.play();
    }
  }
