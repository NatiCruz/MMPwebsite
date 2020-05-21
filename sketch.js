
var diam1=0;
var textx=0;
var diam2=0;

function setup() {
  	createCanvas(550,600);
}

function draw() {
  	background("#330000");
  	fill("#00b8e6");
  	stroke("#e6faff");
  	strokeWeight(2);
  	ellipse(250,150,200,200);
  	fill("#85e085");
  	ellipse(215,130,25,25);
  	ellipse(285,130,25,25);
  	fill("#000000");
  	noStroke();
  	ellipse(215,130,5,5);
  	ellipse(285,130,5,5);
  	fill("#990000");
  	stroke("#000000");
  	arc(252,165,110,70,0, PI / 1.0);
  	ellipse(150,370,diam1,diam1);
  	fill("#8A2BE2");
  	stroke("#ffe4c4");
  	rect(300,300,diam2,diam2);
  	fill("#e0e0d1");
  	stroke("#000000");
  	strokeWeight(1);
  	ellipse(mouseX,mouseY,15,15);
  	fill("#000000");
  	stroke("#e0e0d1");
  	strokeWeight(0.5);
  	textSize(30);
  	textFont("Courier");
  	textStyle(BOLD);
  	textAlign(LEFT);
  	text("Hello World",textx,450);
  	if(textx>600){     
     textx = 0;   
  }
  	else{     
     textx=textx + 2;   
  }
  fill("#ff1493");
  noStroke();
  textSize(20);
  textFont("Times New Roman");
  textAlign(CENTER);
  text("Click anywhere for a surprise",150,300);
  	console.log(diam1);
  }

function mousePressed(){
	if(diam1>50){
		diam1=0;
	}
	else {
		diam1=diam1+3;
	}
	diam1=diam1+2;

	if(diam2>40)
	{
		diam2=0;
	}
	else {
		diam2=diam2+10;
	}
}