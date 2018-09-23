 

// CONSTANTS
var minStepLength = 0.05;
var maxStepLength = 0.5;

var minNSteps = 1;
var maxNSteps = 10000;

var minNFieldLines = 6;
var maxNFieldLines = 20;
// END CONSTANTS

var needsRedraw = false;
var particles = [];
var stepLength = 0.5;
var nSteps = 10000;
var nFieldLines = 12;
var initialCharge = 1.0;
var addingCharge = false;

function initialize() {
    particles[0] = {
        position: [window.innerWidth/2, window.innerHeight/2],
        charge: initialCharge
    }
    onResize();
    controllersChanged(0);
}

function controllersChanged(event) {
    nFieldLines = document.getElementById('nFieldLines').value;
    redraw();
}

function E(position) {
    var Ex = 0.0;
    var Ey = 0.0;
    var sign = 1;
    for(var j = 0; j < particles.length; j++) {
        var xdiff = position[0] - particles[j].position[0];
        var ydiff = position[1] - particles[j].position[1];
        
        var distanceSquared = xdiff*xdiff + ydiff*ydiff;
        var distance = Math.sqrt(distanceSquared);
        
        var rsq = distanceSquared;
        
        sign = -sign;
        
        Ex += particles[j].charge * xdiff / (distance * distanceSquared);
        Ey += particles[j].charge * ydiff / (distance * distanceSquared);
    }
        
    return [Ex, Ey];
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

    
// var centerx = 200;
// var centery = 200;
var drawing = false;

function redraw() {
    needsRedraw = true;
}

function removeAll() {
    particles.length = 0;
    redraw();
}

function addCharge() {
	addingCharge = true;
	canvas.style.cursor = "crosshair";
}

function drawFieldLines() {
    if(!needsRedraw) {
        return;
    }
    drawing = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Restore the transform
    ctx.restore();

    // Testing
    ctx.lineWidth = 8;

    var x = 0.0;
    var y = 0.0;
    var radius = 15;
    // we first draw the lines and then the charges, so that the latter are always on top of the former
    for(var j = 0; j < particles.length; j++) {
        var xa = particles[j].position[0];
        var ya = particles[j].position[1];
        var sign = particles[j].charge > 0 ? 1 : -1;

        var nLines = nFieldLines * Math.abs(particles[j].charge);
        for(var a = 0; a < nLines; a++) {
            x = xa + radius * Math.cos(a / nLines * 2 * 3.14);
            y = ya + radius * Math.sin(a / nLines * 2 * 3.14);
            ctx.beginPath();
            ctx.moveTo(x,y);
            for(var i = 0; i < nSteps; i++) {
                var field = E([x,y]);
                var stepx = field[0];
                var stepy = field[1];
                
                // use Euler's method
                var E_mod = Math.sqrt(stepx * stepx + stepy * stepy);
                x += sign * stepLength * stepx / E_mod;
                y += sign * stepLength * stepy / E_mod;
                
                ctx.lineTo(x,y);
            }
            ctx.lineWidth = 1;
            ctx.strokeStyle="#000000";
            ctx.stroke();
        }
    }
    
    for(var j = 0; j < particles.length; j++) {
        var xa = particles[j].position[0];
        var ya = particles[j].position[1];
        if(particles[j].charge > 0) {
        	var sphere_color = "rgba(250, 150, 0, 1)";
        	var text_color = "rgba(0, 0, 0, 1)";
        	var text = "+" + particles[j].charge.toString();
        	var x_shift = 15;
        } 
        else {
        	var sphere_color = "rgba(0, 150, 250, 1)";
        	var text_color = "rgba(0, 0, 0, 1)";
        	var text = particles[j].charge.toString();
        	var x_shift = 10;
        }
        ctx.fillStyle = sphere_color;
        ctx.beginPath();
        ctx.arc(xa, ya, radius, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
        
        ctx.font = "20px Georgia";
        ctx.fillStyle = text_color;
        ctx.fillText(text, xa - x_shift, ya + 8);
    }
    
    drawing = false;
    needsRedraw = false;
}

var dragging = false;

var dragX = 0;
var dragY = 0;

var dragStartX = 0;
var dragStartY = 0;

var draggingParticle = 0;

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;


function onResize() {
    console.log("Resized!");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    redraw();
}

function onMouseDown(e) {    
    coords = canvas.relMouseCoords(e);
    dragStartX = coords.x;
    dragStartY = coords.y;
    
    for(var i = 0; i < particles.length; i++) {
        var diffX = dragStartX - particles[i].position[0];
        var diffY = dragStartY - particles[i].position[1];
        
        if((diffX*diffX + diffY*diffY) < 1000) {
            draggingParticle = i;
            dragging = true;
            break;
        }
    }
    return false;
}

function onMouseMove(e) {
    if(!drawing) {
        coords = canvas.relMouseCoords(e);
        dragX = coords.x;
        dragY = coords.y;
        if(dragging) {
            particles[draggingParticle].position[0] = dragX;
            particles[draggingParticle].position[1] = dragY;
            // drawFieldLines();
            redraw();
        }
    }
    return false;
}

function onMouseUp(e) {
    e.ctrlKey;
    
    dragging = false;
    
    var diffX = dragStartX - dragX;
    var diffY = dragStartY - dragY;
    
    if(addingCharge) {
    	addingCharge = false;
    	canvas.style.cursor = "pointer";
    	
    	do {
    	    var choice = window.prompt("Inserisci il valore della carica", "-1");
    	    if(choice == null) {
    	    	break;
    	    }
    	    var charge = parseInt(choice);
    	}
    	while(isNaN(charge) || charge == 0);
    	
    	particles[particles.length] = {
            position: [dragX,dragY],
            charge: charge
        }
        redraw();
    }
    
    return false;
}

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// usage:
// instead of setInterval(render, 16) ....

(function animloop(){
  requestAnimFrame(animloop);
  drawFieldLines();
})();
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.

initialize();
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('mouseup', onMouseUp, false);
window.addEventListener('resize', onResize, false);
canvas.onselectstart = function () { return false; } // ie

console.log("Done!");


