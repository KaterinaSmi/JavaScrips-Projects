// spriteAnimation = [
//     "idle"={
//         width: 525,
//         height:523,
//         loc:[
//             {x:0,y0},
//             {x:575,y:0},
//             {x:1150,y:0},
//             {x:1725,y:0},
//             {x:2300,y:0},
//             {x:2875,y:0},
//             {x:3450,y:0}
//         ]
//     }
//     "jump"={
//         width:120,
//         height: 120,
//         loc: [
//             {x: , y: },
//         ]
//     }
//     "run"={
//         width:1200,
//         height: 1250,
//         loc: []
//     }
// ];
// console.log(spriteAnimation["idle"].loc[2].x); //1150
// console.log(spriteAnimation["idle"].loc.length); //7
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e){
    playerState = e.target.value
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;


// let frameX = 0; //different stages 
// let frameY = 4; //different lines from top to down, CHANGING VALUE
let gameFrame = 0;
const staggerFrames = 5; //how fast is animation , smaller=faster, higher=slower
const spriteAnimation = []
const animationStates=[
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 7,
    },
    {
        name:'run',
        frames: 9,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'gethit',
        frames: 4,
    }
];
animationStates.forEach((state,index)=> {
    let frames = {
        loc:[],
    }
    for (let j=0; j<state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX, y: positionY});
    }
    spriteAnimation[state.name] = frames;
}); //state.name  = 'idle' or 'jump'

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame /staggerFrames) % spriteAnimation[playerState].loc.length; //cycle between 0 and last value in the sent
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;

   //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh) 
    ctx.drawImage(playerImage, frameX  ,frameY , spriteWidth, spriteHeight,0,0,spriteWidth, spriteHeight);
    //(playerImage(picture to use), sx,sy,sw,sh=values for rectangular to cut from the pic, last 4 values=where to put the cropped rect )
    //ctx.drawImage(playerImage,1*spriteWidth,sy,spriteWidth,spriteHeight,50,50,spriteWidth, spriteHeight); if we add 1*, 2*, 3* to the 1st value after pic(sx(source x), the rect will be moving next to next) using it, it moves in line as the value for width, if we want verticallu, 2nd value(sy(source y)) 
    // SECOND CHOICE:
    //if(gameFrame % staggerFrames ==0){
    //     if (frameX < 4)frameX++; //CHANGING VALUE 
    //     else frameX = 0; 
    // }

   

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();