//https://youtu.be/klqS2nwLpZo
// variables principales
let imagenes = [];
let cantidadEscenas = 24;

let personajes = [];
let cantidadPersonajes = 8;
let frameActual = 0;

let imagenFondo;
let imagenTitulo;
let imagenStart;

// variables para las animaciones
let posX;
let posY = 240;
let posTituloY = -400;
let posCreditosY = 450; 

let pantalla = 0; 

let sonidoclick;
let musica;

function preload() {
  
  sonidoclick = loadSound('data/sonidoclick.mp3');
  musica = loadSound('data/musica.mp3');
  
  imagenFondo = loadImage('data/background.jpg');
  imagenTitulo = loadImage('data/titulo.png');
  imagenStart = loadImage('data/start.png');
  
  for (let i = 1; i <= cantidadEscenas; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpeg');
  }

  for (let i = 0; i < cantidadPersonajes; i++) {
    personajes[i] = loadImage('data/rey' + (i+1) + '.png');
  }
}

function setup() {
  createCanvas(800, 450);
  posX = -200;
}

function intro() {
  
  image(imagenFondo, 0, 0, width, height);

  let anchoPersonaje = personajes[0].width * 0.5;
  let altoPersonaje = personajes[0].height * 0.5;
  image(personajes[frameActual], posX, posY, anchoPersonaje, altoPersonaje);

  let anchoTitulo = imagenTitulo.width * 0.6;
  let altoTitulo = imagenTitulo.height * 0.6;

  if (posTituloY < -100) {
    posTituloY += 2;
  }
  image(imagenTitulo, (width - anchoTitulo) / 2, posTituloY, anchoTitulo, altoTitulo);

  if (posX > width) {
    let anchoStart = imagenStart.width * 0.15;
    let altoStart = imagenStart.height * 0.15;
    image(imagenStart, (width - anchoStart) / 2, 250, anchoStart, altoStart);
  }

  if (frameCount % 7 == 0) {
    frameActual = (frameActual + 1) % cantidadPersonajes;
  }
  posX += 3;
}

// funciones de textos y botones
function textoPantallas(texto) {
  fill(0, 0, 0, 180);
  noStroke();
  rect(100, 30, 600, 80, 10);

  fill(255);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(texto, 100, 30, 600, 80);
}

function boton(x, y, ancho, alto, textoBoton) {
  fill(40, 40, 150, 220);
  stroke(255, 200, 0);
  strokeWeight(2);
  rect(x, y, ancho, alto, 20);

  noStroke();
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(textoBoton, x, y, ancho, alto);
}

function clickBoton(x, y, ancho, alto) {
  if (mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto) {
    if (sonidoclick && sonidoclick.isLoaded()) {
      sonidoclick.setVolume(0.5);
      sonidoclick.play();
    }
    return true;
  } else {
    return false;
  }
}
