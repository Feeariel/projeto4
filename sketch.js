let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = fabin();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem.jpg");
  som = loadSound("som.mp3");
}

function draw() {
  
  batata();
  fabin();
  let maximo= width;
  let minimo= 0;
  let aparecer = map(mouseX, 0,width,1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300,300);
}

function batata(){
  background('purple');
  image(imagem,0,0,600,600);
  fill('lighwhite');
  textSize(40);
  textAlign(CENTER,CENTER);
}

function fabin() {
  let palavras=['real madrid', 'goat', 'bola de ouro','essa foi goti', 'fabin maravilindo', 'fabin aquariano nato'];
  return random(palavras);
}