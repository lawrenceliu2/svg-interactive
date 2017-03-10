var pic = document.getElementById("vimage")
var clear = document.getElementById("clear")
var move = document.getElementById("move")
var total = pic.childNodes.length - 1
var intervalID

//invisible barrier line from (0,250) to (500,250)
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", 0);
line.setAttribute("x2", 500);
line.setAttribute("y1", 250);
line.setAttribute("y2", 250);

var createDot = function(xcor,ycor) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", xcor);
    c.setAttribute("cy", ycor);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xmove", 1);
    c.setAttribute("ymove", 1);
    pic.appendChild(c);
    total++;

    c.addEventListener("click", function(event){
	event.stopPropagation();
	if (c.getAttribute("fill") == "green"){
	    event.stopPropagation();
	    pic.removeChild(c);
	    createDot(Math.random() * 440 + 30, Math.random() * 440 + 30, false);
	}
    });
    
    c.addEventListener("click", function(event){
	event.stopPropagation();
	if (c.getAttribute("fill") == "blue"){
	    event.stopPropagation();
	    c.setAttribute("fill", "green");
	}
    });
    
};

pic.addEventListener("click", function (event){
    createDot(event.clientX - 10, event.clientY - 80);
});

var clearStuff = function() {
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
    total = 0;
    clearInterval(intervalID);
};

clear.addEventListener("click", clearStuff);

var moveCircles = function() {
    clearInterval(intervalID);
    var count = 0;
    var c;
    while (count < total){
	c = pic.children[count];

	//see if the circle hit a wall, if so change its direction
	if (c.getAttribute("cx") >= 500){
	    c.setAttribute("xmove", -1);
	};
	if (c.getAttribute("cx") <= 0){
	    c.setAttribute("xmove", 1);
	};
	if (c.getAttribute("cy") >= 500){
	    c.setAttribute("ymove", -1);
	};
	if (c.getAttribute("cy") <= 0){
	    c.setAttribute("ymove", 1);
	};
	
	if (c.getAttribute("xmove") == -1) {
	    c.setAttribute("cx", parseInt(c.getAttribute("cx")) - 2);
	}else{
	    c.setAttribute("cx", parseInt(c.getAttribute("cx")) + 2);
	}
	if (c.getAttribute("ymove") == -1) {
	    c.setAttribute("cy", parseInt(c.getAttribute("cy")) - 2);
	}else{
	    c.setAttribute("cy", parseInt(c.getAttribute("cy")) + 2);
	}

	//if a circle passed the line (x,250)

	count++;
    };
    intervalID = window.setInterval(moveCircles,10);
};

move.addEventListener("click", moveCircles);
