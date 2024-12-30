var spritejogador,spriteinimigo,spritesolo,spritetiro;
var inimigos=[];
var tiros=[];
var fundoimg;
var personagemimg;
var inimigoimg1;
var ultimodisparo=0;
var delaydisparo=30;
var placar=300;
var spriteplacar;

function preload(){
fundoimg = loadImage("./ativos/fundo.png");
personagemimg =loadImage("./ativos/personagem.png");
inimigoimg1 =loadImage("./ativos/inimigo1.png");
arma1.png =loadImage("./ativos/arma1.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight-5);
    spritesolo =createSprite(width/2,height,width,13);
    spritejogador =createSprite(width/5,height/2,80,80);
    spritejogador.addImage(personagemimg);
    spriteplacar = createSprite(165,30,300,30);
    
  
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

    if(keyDown("space")  && frameCount - ultimodisparo >delaydisparo)  {
        disparos();
        ultimodisparo = frameCount;
    }
for(let i=inimigos.length -1; i>0; i-- ){
  //  console.log("inimigo "+inimigos[i])
    for(let t=tiros.length -1;  t>0; t--){
      //  console.log("disparo "+tiros[t])
if(tiros[t].overlap(inimigos[i])){
   inimigos[i].remove(); 
   inimigos.splice(i, 1);
   tiros[t].remove();
   tiros.splice(t, 1);
   break;
}

    }
}
for(let i = inimigos.lenght -1; i>0;i--){
if(inimigos[i].overlap(spritejogador)){
    console.log("tocou!");
    inimigos[i].remove();
    inimigos.splice(i,1);
    placar -=100;
}

}
drawSprites();

}

function criar_inimigos(){
if(frameCount %120 ===0)
   { spriteinimigo = createSprite(width+100, height-140, 25,100);
    spriteinimigo.addImage(inimigoimg1);
    spriteinimigo.scale=0.4;
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