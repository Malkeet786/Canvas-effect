var canvas=document.querySelector('canvas');//Element selector

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

// c.fillStyle='rgba(255,0,0,0.6)';
// c.fillRect(100,200,100,100);
// c.fillStyle='rgba(0,255,0,0.6)';
// c.fillRect(400,200,100,100);
// c.fillStyle='rgba(0,0,255,0.6)';
// c.fillRect(600,200,100,100);

// //Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.strokeStyle="#fa34a3"
// c.stroke();

//c.arc(x:Int,y:int,r:int,straight Angke:float,endAnge,Float,drawCounterCLockWise:bool(false));
// c.arc(300,300,30,0,Math.PI*2,false);
// c.strokeStyle='blue';
// c.stroke();

// for(var i=0;i<100;i++)
// {
//     var x=Math.random()*window.innerHeight;
//     var y=Math.random()*window.innerWidth;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle='blue';
//     c.stroke();
// }
// var circle=new Circle(200,200,3,3,30);
// var x=Math.random()*innerWidth;
// var y=Math.random()*innerHeight;
// var dx=(Math.random()-0.5)*7;
// var dy=(Math.random()-0.5)*7;
// var radius=30;

var mouse={
    x: undefined,
    y:undefined
}
var maxRadius=40;
//var minRadius=2;

var colorArray=[
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3489DB',
    '#ff1100',
];
console.log();
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
})
window.addEventListener('resize',function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    init();
});

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw=function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();

    }
    this.update=function(){
        if(this.x + this.radius>innerWidth  || this.x-this.radius
            < 0){
            this.dx=-this.dx;
        }
        if(this.y + this.radius>innerHeight  || this.y-this.radius
            < 0){
            this.dy=-this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if(mouse.x - this.x < 50 && mouse.x -this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y -this.y > -50){
            if(this.radius < maxRadius){
                this.radius +=1;
            }}else if(this.radius> this.minRadius){
            this.radius -=1;
        }
        this.draw();

    }
}


// console.log(circleArray);

var circleArray=[];
function init(){
    circleArray=[];
    for(var i=0;i<600;i++){
    var radius=Math.random()*3+1;
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5)*4;
    var dy=(Math.random()-0.5)*4;
    circleArray.push(new Circle(x,y,dx,dy,radius));
    // var circle =new Circle(200,200,3,3,30);
}

}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    // circle.update();
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();

    }
    
}
init();
animate();





// function Circle(x,y,dx,dy,radius){
//     this.x=x;
//     this.y=y;
//     this.dx=dx;
//     this.dy=dy;
//     this.radius=radius;
