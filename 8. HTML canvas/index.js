const canvas= document.querySelector('#draw');
const ctx= canvas.getContext('2d'); // drawing in 2d or 3d
//ctx is where we do the drawing

// properties of the canvas
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;   

ctx.strokeStyle= 'teal'; // color
ctx.lineJoin= 'round';  //end of a line or two lines joining can be squared or round
ctx.lineCap= 'round';
ctx.lineWidth= 10;

let isDrawing= false;   // draws only when the mouse is clicked
// flag to check whether the mouse is actually clicked or just hovering
 
//coordinates for the starting and end points
let lastX=0;
let lastY=0;
let hue =0;

function draw(event)    //called when mouse is updated
{
    if(!isDrawing)
        return;     // stops function from running when mouse is not clicked
    console.log(event);
    ctx.strokeStyle= `hsl(${hue},100%,50%)`;    //hue,saturation,lighness 

    //begining drawing 
    ctx.beginPath();

    ctx.moveTo(lastX,lastY);    //starts from
    ctx.lineTo(event.offsetX,event.offsetY);    //end at
    ctx.stroke();   //can't draw without this 

    [lastX,lastY]=[event.offsetX,event.offsetY];    //sets the end of the line
    //destructuring an array

    hue++;
    if(hue>=360)    //hue ranges from 0 to 360
        hue=0;
}

canvas.addEventListener('mousemove',draw);  //calls draw whenever mouse moves
canvas.addEventListener('mousedown',(event)=>{      //sets true only when mouse is clicked
    isDrawing=true;
    [lastX,lastY]=[event.offsetX,event.offsetY];   //sets the beggining of a new line     
});  
canvas.addEventListener('mouseup',()=>(isDrawing=false));   // sets false when mouse is not clicked (might be moving)
canvas.addEventListener('mouseout',()=>(isDrawing=false));  // sets false when mouse is outside the canvas