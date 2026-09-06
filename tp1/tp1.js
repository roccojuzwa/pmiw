let fondo;
let logoMinecraft;
let imgBloque;

let steve = [];
let creeper = [];

let estado = "steve";

let frameSteve = 0;
let frameCreeper = 0;

let tiempoAnterior = 0;

let velocidadSteve = 160;
let velocidadCreeper = 150;

let xSteve = -250;
let ySteve = 250;

let xCreeper = -250;
let yCreeper = 250;

let velocidadMovimiento = 5;

let mostrarLogo = false;

let xLogo = 100;
let yLogo = -150;
let yLogoFinal = 150;

let velocidadLogo = 6;


let bloques = [];
let anchoBloque = 60;
let ultimoBloqueX = -60;
let yBloques = 500;

function preload() {
  fondo = loadImage("data/background.jpg");
  logoMinecraft = loadImage("data/titulo.png");
  imgBloque = loadImage("data/bloque1.png");


  for (let i = 0; i < 4; i++) {
    steve[i] = loadImage("data/steve" + (i + 1) + ".png");
  }


  for (let i = 0; i < 3; i++) {
    creeper[i] = loadImage("data/creeper" + (i + 3) + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
  tiempoAnterior = millis();
}

function draw() {
  dibujarFondoAdaptado(fondo);

  for (let i = 0; i < bloques.length; i++) {
    image(imgBloque, bloques[i].x, bloques[i].y, anchoBloque, anchoBloque);
  }

  if (estado == "steve") {
    xSteve = xSteve + velocidadMovimiento;


    if (xSteve + 125 > ultimoBloqueX + anchoBloque) {
      ultimoBloqueX = ultimoBloqueX + anchoBloque;
      bloques.push( {
      x:
      ultimoBloqueX, y:
        yBloques
      }
      );
    }

    actualizarSteve();

    dibujarAnimacion(steve, frameSteve, xSteve, ySteve, 250, 250);

    if (xSteve > width) {
      estado = "creeper";

      frameCreeper = 0;
      xCreeper = -250;

      tiempoAnterior = millis();
    }
  } else if (estado == "creeper") {
    xCreeper = xCreeper + velocidadMovimiento;

    actualizarCreeper();

    dibujarAnimacion(creeper, frameCreeper, xCreeper, yCreeper, 250, 250);

    if (xCreeper >= width / 2 - 125) {
      mostrarLogo = true;

      xLogo = 100;
      yLogo = -150;

      estado = "final";

      tiempoAnterior = millis();
    }
  } else if (estado == "final") {
    dibujarCartelReiniciar();
  }

  if (mostrarLogo) {
    image(logoMinecraft, xLogo, yLogo, 600, 100);

    if (yLogo < yLogoFinal) {
      yLogo = yLogo + velocidadLogo;
    }

    if (yLogo >= yLogoFinal) {
      yLogo = yLogoFinal;
    }
  }
}

function actualizarSteve() {
  if (millis() - tiempoAnterior > velocidadSteve) {
    frameSteve = frameSteve + 1;

    if (frameSteve >= steve.length) {
      frameSteve = 0;
    }

    tiempoAnterior = millis();
  }
}

function actualizarCreeper() {
  if (millis() - tiempoAnterior > velocidadCreeper) {
    frameCreeper = frameCreeper + 1;

    if (frameCreeper >= creeper.length) {
      frameCreeper = 0;
    }

    tiempoAnterior = millis();
  }
}

function dibujarFondoAdaptado(img) {
  let escala = max(width / img.width, height / img.height);

  let nuevoAncho = img.width * escala;
  let nuevoAlto = img.height * escala;

  let x = (width - nuevoAncho) / 2;
  let y = (height - nuevoAlto) / 2;

  image(img, x, y, nuevoAncho, nuevoAlto);
}

function dibujarAnimacion(animacion, frame, x, y, ancho, alto) {
  image(animacion[frame], x, y, ancho, alto);
}

function dibujarCartelReiniciar() {
  rectMode(CENTER);

  stroke(35, 20, 10);
  strokeWeight(7);

  fill(139, 195, 74);
  rect(width / 2, 520, 380, 80, 15);

  stroke(30);
  strokeWeight(4);

  noFill();
  rect(width / 2, 520, 360, 62, 12);

  noStroke();

  fill(25);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(25);

  text("PRESIONA R PARA REINICIAR", width / 2, 520);

  textStyle(NORMAL);
  rectMode(CORNER);
}

function keyPressed() {
  if (key == "r" || key == "R") {
    estado = "steve";

    frameSteve = 0;
    frameCreeper = 0;

    xSteve = -250;
    xCreeper = -250;

    mostrarLogo = false;

    xLogo = 100;
    yLogo = -150;


    bloques = [];
    ultimoBloqueX = -60;

    tiempoAnterior = millis();
  }
}
