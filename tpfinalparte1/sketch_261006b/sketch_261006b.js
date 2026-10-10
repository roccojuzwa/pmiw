
}let sprites = [];
let bgImage; 
let totalFrames = 8; 
let currentFrame = 0;

let posX; 
let posY;
let scaleFactor = 0.5; 
let fixedWidth, fixedHeight; // Ancho y alto fijos para evitar que se deforme

function preload() {
  bgImage = loadImage('data/background.jpg'); 
  
  sprites[0] = loadImage('data/rey1.png');
  sprites[1] = loadImage('data/rey2.png');
  sprites[2] = loadImage('data/rey3.png');
  sprites[3] = loadImage('data/rey4.png');
  sprites[4] = loadImage('data/rey5.png');
  sprites[5] = loadImage('data/rey6.png');
  sprites[6] = loadImage('data/rey7.png');
  sprites[7] = loadImage('data/rey8.png');
}

function setup() {
  createCanvas(800, 450); 
  noSmooth();
  
  // Definimos un tamaño fijo estricto basado en el primer sprite 
  // para que todos los demás respeten exactamente las mismas dimensiones.
  fixedWidth = sprites[0].width * scaleFactor;
  fixedHeight = sprites[0].height * scaleFactor;
  
  posX = -fixedWidth; 
  posY = 240; // Mantén tu posición perfecta
}

function draw() {
  // 1. Dibuja el fondo
  image(bgImage, 0, 0, width, height); 
  
  // 2. Dibuja al rey usando el ancho y alto fijos (fixedWidth y fixedHeight)
  image(sprites[currentFrame], floor(posX), posY, fixedWidth, fixedHeight);
  
  // 3. Control de velocidad de la animación
  if (frameCount % 6 === 0) {
    currentFrame = (currentFrame + 1) % totalFrames;
  }
  
  // 4. Movimiento horizontal
  posX += 2.5; 
  
  // Reinicia el ciclo cuando cruza la pantalla
  if (posX > width) {
    posX = -fixedWidth;
  }
}
