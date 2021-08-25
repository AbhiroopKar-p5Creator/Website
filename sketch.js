var Width 
var Height
var comicFont

function setup()
{
 createCanvas(1366 ,677);
}

function preload()
{
  comicFont = loadFont('Assets/ComicSans.ttf');
}

function draw() 
{
  Height = window.height/ 2
  Width = window.width / 2  
  
  background(1,200,150);
  color(0,0,0)
  textSize(30)
  textFont(comicFont);
  text("Sudipta Duttta Roy",Width,100)
}
