var textx=550;
var diam1=100;
var diam2=50;
var diam3=0;

function setup() {
	createCanvas(700,300);
	background("#000000");
  // put setup code here
}

function draw() {
	fill("#FF0000");
	stroke("#DB7093");
	strokeWeight(1);
	ellipse(mouseX, mouseY, 50, 50);

	fill("#C71585");   
   	stroke("#48D1CC");
   	strokeWeight(2);   
   	textSize(30);   
   	textFont("Verdana");   
  	textStyle(ITALIC);   
   	textAlign(LEFT);   
   	text("Click me!",150,100);

   	fill("#8B4513");
   	stroke("#EE82EE");
   	strokeWeight(3.5);
   	textSize(20);
   	textFont("Verdana");
   	textAlign(LEFT);
   	text("Anxiety", random(550),random(550));

   	fill("#ffb6c1");
   	stroke("#f08080");
   	strokeWeight(2);
   	ellipse(200,200,diam1, diam1);

   	fill("#2f4f4f");
   	stroke("#ff8c00");
   	strokeWeight(3);
   	rect(30,90,diam2,diam2);

   	fill("#bdb76b");
   	stroke("#8fbc8f");
   	strokeWeight(5);
   	rect(300,70,random(90),random(90));
   	fill("#778899");
   	stroke("#00FF00");
   	strokeWeight(3);
   	ellipse(550, 90,random(200), random(150));

   	fill("#483d8b");
   	translate(580, 200);
  	noStroke();
  	for (let i = 0; i < 10; i ++) {
    ellipse(diam2, diam2, 20, 80);
    rotate(PI/5);
     }

 
	 //put drawing code here

  
}

function mousePressed() {
	textx=textx+10;
	if (textx>100) {
		textx=5;
	}
	else {
		textx=textx+10;
	}

	diam1=diam1+15;
	if (diam1>150) {
		diam1=10;
	}
	else {
		diam1=diam1+15;
	}

	diam2=diam2+5;
	if (diam2>100) {
		diam2=0;
	}
	else {
		diam2=diam2+5;
	}
}