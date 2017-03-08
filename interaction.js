var pic = document.getElementById("vimage")
var clear = document.getElementById("clear")
var move = document.getElementById("move")
var total = pic.childNodes.length

var createDot = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var xcor = event.clientX;
    var ycor = event.clientY;
    
    c.setAttribute("cx", xcor-10);
    c.setAttribute("cy", ycor-80);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    console.log(c.getAttribute("cx"));
};

pic.addEventListener("click", createDot);

var clearStuff = function() {
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
};

clear.addEventListener("click", clearStuff);

var moveCircles = function() {
    console.log(total)
    //while (total > 0){
	//console.log(total)
};

move.addEventListener("click", moveCircles);
