const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 20; //can be reassigned later because of let

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'backgroundLayers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'backgroundLayers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'backgroundLayers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'backgroundLayers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'backgroundLayers/layer-5.png';

windows.addEventListener('load',function(){
//check that only if the page is loaded the code starts to run
//to the span of changing speed
const slider = document.getElementById('slider');
slider.value=gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change',function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML=e.target.value; 
});
// let x = 0;
// let x2 = 2400;
class Layer {
constructor(image, speedModifier){
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.image = image; 
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;

} 
update(){ 
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width){
        this.x = 0;
    }
    
    this.x =this.x -this.speed
 
}
draw(){ //take info about this object and draw on canvas, redraw on new position 
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x+ this.width, this.y, this.width, this.height);
}

}
const layer1 = new Layer(backgroundLayer1, 0.2); 
const layer2 = new Layer(backgroundLayer2, 0.4); 
const layer3 = new Layer(backgroundLayer3, 0.6); 
const layer4 = new Layer(backgroundLayer4, 0.8); //call Layer class constructor, create layer4 , last value is the speed.
const layer5 = new Layer(backgroundLayer5, 1); 

const gameObjects=[ layer1,layer2,layer4,layer5]

function animate(){
ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)//delete canvas

gameObjects.forEach(object => {
    object.update();
    object.draw();
})
// ctx.drawImage(backgroundLayer4,x,0);
// ctx.drawImage(backgroundLayer4,x2,0);
// if (x < -2400) x = 2400 + x2- gameSpeed;//exactlly this pic is 2400 wide
// else x-= gameSpeed;
// if (x2 < -2400) x2 = 2400 + x - gameSpeed;
// else x2-= gameSpeed;
requestAnimationFrame(animate);
};

animate()
});
