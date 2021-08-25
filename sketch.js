var Width 
var Height

function setup() {
  createCanvas(1366 ,677);
}

function draw() {
  Height = window.height/ 2
  Width = window.width / 2
  
  
  background(1,200,150);
  color(0,0,0)
  text("Kaka Website",Width,100)
  let a = createA('https://drive.google.com/uc?export=download&id=16krCF89JfBw5MH9mU4wqClQn5whn5xDq', 'DownloadSample');
  a.position(Width, 200);}
