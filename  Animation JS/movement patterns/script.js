const canvas  =document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000; //same as in css
const numberOfEnimies = 100;
const enemiesArray=[];

//using custom images instead of shapes:

let gameFrame= 0;


//create numerous emenies: , it produce many objects when we ask
class Enemy {
    //mandotory methos each clas must have, contain blueprint under whch each object will be ctreated
    //this key word use to indicate creation within current object
    constructor(){
        this.image = new Image();
        this.image.src = 'enemies/enemy1.png'
        
        this.spriteWidth = 293; //the size of exact pic we are using
        this.spriteHeight = 155; 
        // this.speed = Math.random()* 4 - 2;  //between -2 and 4 (the last number represents the startof the range)
   
        this.width = this.spriteWidth/2.5;
        this.height = this.spriteHeight/2.5;     
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random()* 3 +1);
    }
    //its job is to update coordinates
    update(){
        this.x+=Math.random() * 5 - 2.5;
        this.y+=Math.random() * 5 - 2.5;
        //animate spites
        if(gameFrame %this.flapSpeed ===0){//run the code evry two loops of main animation loop
            this.frame > 4 ? this.frame = 0 : this.frame++;
    }
}
    //to draw all enemies at the same time:
    draw(){
        ctx.drawImage(this.image, this.frame *this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height); //want to crop one frame of enemy 
    }//passing 9 arguments . 1st four the image we want to draw, the next is the area we want to crop out, the last is where we want to place .
};

// const enemy1 = new Enemy(); //new is a key word for creation a class which is stored in variable
for (let i=0; i< numberOfEnimies;i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    //to move it,travel to the right:
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });

    gameFrame++
    //create endless loop:
    requestAnimationFrame(animate);
}
animate();