var player = 1;
var oplayer = 2;
var xcenter = [200, 375, 575, 200, 375, 575, 200, 375, 575];
var ycenter = [150, 150, 150, 300, 300, 300, 445, 445, 445];
var space = [0,0,0,0,0,0,0,0,0];
let space2d = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];
var win = false;

function setup() {
  createCanvas(750,500);
  fill(0);
  line(275,100,275,600);
  line(475,100,475,600);
  line(125,225,650,225);
  line(125,375,650,375);
}

function draw() {
/*  background(255);
  line(275,100,275,600);
  line(475,100,475,600);
  line(125,225,650,225);
  line(125,375,650,375); */

  if(mouseIsPressed){
    if(!win){
    PlaceShape(pickPosition(mouseX, mouseY));
    win = checkWin();
    }
    else{
      fill(0);
      textSize(50);
      text('Player ' + oplayer + " Wins!!!", 250, 50);
    }
  }
}

function pickPosition(x, y){
  if (x >= 125 && x <= 275 && y >= 100 && y <= 225){
    return 0;
  }
  else if (x >= 275 && x <= 475 && y >= 100 && y <= 225){
    return 1;
  }
  else if (x >= 475 && x <= 650 && y >= 100 && y <= 225){
    return 2;
  }
  else if (x >= 125 && x <= 275 && y >= 225 && y <= 375){
    return 3;
  }
  else if (x >= 275 && x <= 475 && y >= 225 && y <= 375){
    return 4;
  }
  else if (x >= 475 && x <= 650 && y >= 225 && y <= 375){
    return 5;
  }
  else if (x >= 125 && x <= 275 && y >= 375 && y <= 500){
    return 6;
  }
  else if (x >= 275 && x <= 475 && y >= 375 && y <= 500){
    return 7;
  }
  else if (x >= 475 && x <= 650 && y >= 375 && y <= 500){
    return 8;
  }
  return -1;
}

function PlaceShape(num){
  if (space[num]==0){
  if (player == 1){
    line(xcenter[num]-40, ycenter[num]+40, xcenter[num]+40, ycenter[num]-40);
    line(xcenter[num]-40, ycenter[num]-40, xcenter[num]+40, ycenter[num]+40);
  }
  else {
    fill(255);
    ellipse(xcenter[num], ycenter[num], 80, 80);
  }
  space[num] = player;
  if(player == 1 ){
    player = 2;
    oplayer =1;
  }
  else{
    player = 1;
    oplayer =2;
  }
}
}

function checkWin(){
  for (var i = 0; i < 3; i++){
    space2d[0][i] = space[i];
  }
  for (var i = 3; i < 6; i++){
    space2d[1][i-3] = space[i];
  }
  for (var i = 6; i < 9; i++){
    space2d[2][i-6] = space[i];
  }

  for(var i = 0; i < 3; i++){
      if (space2d[i][0] == space2d[i][1] && space2d[i][1] == space2d[i][2] && space2d[i][2] != 0){
        return true;
      }
  }
  for(var i = 0; i < 3; i++){
      if (space2d[0][i] == space2d[1][i] && space2d[1][i] == space2d[2][i] && space2d[2][i] != 0){
        return true;
      }
  }
  if (space2d[0][0] == space2d[1][1] && space2d[1][1] == space2d[2][2] && space2d[2][2] != 0){
    return true;
  }
  if (space2d[2][0] == space2d[1][1] && space2d[1][1] == space2d[0][2] && space2d[0][2] != 0){
    return true;
  }
  return false;
}
