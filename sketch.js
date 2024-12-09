var spritejogador,spriteinimigo,spritesolo,spritetiro;
var inimigos=[];
var tiros=[];
var fundoimg;
var personagemimg;
function preload(){
fundoimg = loadImage("./ativos/fundo.png");
personagemimg =loadImage("./ativos/personagem.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight-5);
    spritesolo =createSprite(width/2,height,width,13);
    spritejogador =createSprite(width/2,height/2,80,80);
    spritejogador.addImage(personagemimg);
   // spriteinimigo =createSprite(width/4,height/4,100,85);
}

function draw(){
background(255,0,0);
image(fundoimg, 0,0);

if(keyDown("right") && spritejogador.position.x <width-40 ){
spritejogador.position.x +=2;
}


if(keyDown("left") && spritejogador.position.x >40 ){
    spritejogador.position.x -=2; 
} 
spritejogador.position.y +=10
spritejogador.collide(spritesolo)
if(spritejogador.position.y > height-13-40){
    spritejogador.position.y= height-13-40
}
if(keyDown("up") && spritejogador.position.y >40){
    spritejogador.position.y -=20
}
criar_inimigos()
    //console.log(spritejogador.position.y)

    if(keyDown("space") )  {
        disparos()
    }
for(let i=0; i<inimigos.length; i++ ){
  //  console.log("inimigo "+inimigos[i])
    for(let t=0;  t<tiros.length; t++){
      //  console.log("disparo "+tiros[t])
if(tiros[t].position.x>inimigos[i].position.x){
   inimigos[i].remove(); 
   inimigos.splice(i, 1);
   tiros[t].remove();
   tiros.splice(t, 1);
   
}

    }
}

drawSprites();

}

function criar_inimigos(){
if(frameCount %120 ===0)
   { spriteinimigo = createSprite(width+100, height-20, 25,100);
    spriteinimigo.velocity.x=-2;
    spriteinimigo.lifetime = 300;
    inimigos.push(spriteinimigo);
   }

}
function disparos(){
spritetiro = createSprite(spritejogador.position.x, spritejogador.position.y,5,5);
spritetiro.velocity.x =5;
spritetiro.lifetime=500;
tiros.push(spritetiro);


}
function windowResized(){
location.reload();
}