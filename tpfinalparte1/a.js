//https://youtu.be/klqS2nwLpZo

function draw() {
  
  if (pantalla == 0) {
    intro();
  }

  if (pantalla == 1) {
    image(imagenes[1], 0, 0, width, height);
    textoPantallas("Sir Arthur con Prim Prim descansando en el cementerio");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 2) {
    image(imagenes[2], 0, 0, width, height);
    textoPantallas("Astaroth aparece, secuestra a la princesa y se la lleva a su castillo");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 3) {
    image(imagenes[3], 0, 0, width, height);
    textoPantallas("Sir Arthur comienza el viaje para rescatar a Prim Prim.");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 4) {
    image(imagenes[4], 0, 0, width, height);
    textoPantallas("Toma una decisión: ¿Hacia donde vas primero?");
    boton(80, 395, 190, 40, "Izquierda");
    boton(305, 395, 190, 40, "Centro");
    boton(530, 395, 190, 40, "Derecha");
  }
  if (pantalla == 5) {
    image(imagenes[5], 0, 0, width, height);
    textoPantallas("Subes por las murallas y aparecen murcielagos");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 6) {
    image(imagenes[6], 0, 0, width, height);
    textoPantallas("¡Te han derrotado!");
    boton(290, 395, 220, 40, "Volver a empezar");
  }
  if (pantalla == 7) {
    image(imagenes[7], 0, 0, width, height);
    textoPantallas("Entras a una cueva inhabitada");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 8) {
    image(imagenes[8], 0, 0, width, height);
    textoPantallas("Pasas tranquilamente la cueva sin ningun peligro");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 9) {
    image(imagenes[9], 0, 0, width, height);
    textoPantallas("Bajas al bosque oscuro y aparecen zombies");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 10) {
    image(imagenes[10], 0, 0, width, height);
    textoPantallas("Los zombies se distrajeron con un ruido y pudiste avanzar ¡Tuviste Suerte!");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 11) {
    image(imagenes[11], 0, 0, width, height);
    textoPantallas("Llegas al castillo y encuentras dos escaleras. ¿Hacia donde te diriges?");
    boton(130, 390, 240, 50, "Izquierda");
    boton(430, 390, 240, 50, "Derecha");
  }
  if (pantalla == 12) {
    image(imagenes[12], 0, 0, width, height);
    textoPantallas("Te encuentras con unos guardias que intentan atacarte");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 13) {
    image(imagenes[13], 0, 0, width, height);
    textoPantallas("Son muchos, intentas escapar pero cada vez estan mas cerca. ¡Decide rápido!");
    boton(130, 390, 240, 50, "Pelear");
    boton(430, 390, 240, 50, "Esconderte");
  }
  if (pantalla == 14) {
    image(imagenes[14], 0, 0, width, height);
    textoPantallas("Te encuentran y te encarcelan junto a la princesa");
    boton(290, 395, 220, 40, "Volver a empezar");
  }
  if (pantalla == 15) {
    image(imagenes[15], 0, 0, width, height);
    textoPantallas("¡Heroico! Vences a todos");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 16) {
    image(imagenes[16], 0, 0, width, height);
    textoPantallas("Te encuentras a la princesa como prisionera");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 17) {
    image(imagenes[17], 0, 0, width, height);
    textoPantallas("Intentas rescatarla pero Astaroth te sorprende con un ataque feroz");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 18) {
    image(imagenes[18], 0, 0, width, height);
    textoPantallas("Estas debilitado. ¿Te retiras para planear una estretegia o luchas contra Astharoth?");
    boton(130, 390, 240, 50, "Pelear");
    boton(430, 390, 240, 50, "Retirada");
  }
  if (pantalla == 19) {
    image(imagenes[19], 0, 0, width, height);
    textoPantallas("Te enfrentas y te termina derrotando. ¡Piensa una estrategia la proxima!");
    boton(290, 395, 220, 40, "Volver a empezar");
  }
  if (pantalla == 20) {
    image(imagenes[20], 0, 0, width, height);
    textoPantallas("Te retiras y mientras recuperas energía, piensas en un plan para derrotar a Astaroth");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 21) {
    image(imagenes[21], 0, 0, width, height);
    textoPantallas("¡El tiempo se acaba! Decides atacar a Astaroth por la espalda");
    boton(290, 395, 220, 40, "Continuar");
  }
  if (pantalla == 22) {
    image(imagenes[22], 0, 0, width, height);
    textoPantallas("Lo debilitas con tu ataque, ¡Es tu momento! Tienes que decidir:");
    boton(130, 390, 240, 50, "Salvas a la princesa");
    boton(430, 390, 240, 50, "Acabar con él");
  }
  if (pantalla == 23) {
    image(imagenes[23], 0, 0, width, height);
    textoPantallas("Logras escapar con la princesa pero dejas a Astaroth con vida. ¡Vuelve con cuidado!");
    boton(290, 395, 220, 40, "Créditos"); 
  }
  if (pantalla == 24) {
    image(imagenes[24], 0, 0, width, height);
    textoPantallas("Derrotaste a Astaroth y lograste rescatar a la princesa.");
    boton(290, 395, 220, 40, "Créditos"); 
  }
  if (pantalla == 25) {
    // creditos 
    background(0); 
    
    let anchoTitulo = imagenTitulo.width * 0.6;
    let altoTitulo = imagenTitulo.height * 0.6;
    
    // animacion del titulo
    if (posTituloY < -160) {
      posTituloY += 1.5;
    }
    image(imagenTitulo, (width - anchoTitulo) / 2, posTituloY, anchoTitulo, altoTitulo);

    // animacion del texto.. sube y frena antes del titulo
    if (posCreditosY > 170) {
      posCreditosY -= 1.5; 
    }

    fill(255); 
    textAlign(CENTER, CENTER);
    noStroke();
    
    textSize(26);
    text("AUTORES", width / 2, posCreditosY);
    textSize(20);
    text("Valentin Mauregui y Rocco Juzwa", width / 2, posCreditosY + 30);

    textSize(26);
    text("PROGRAMADORES", width / 2, posCreditosY + 100);
    textSize(20);
    text("Valentin Mauregui y Rocco Juzwa", width / 2, posCreditosY + 130);

    boton(290, 395, 220, 40, "Volver a empezar");
  }
}

function mousePressed() {
  // controla a que pantalla vamos
  if (pantalla == 0) {
    if (musica.isLoaded() && !musica.isPlaying()) {
      musica.setVolume(0.6);
      musica.loop();
    }
    
    if (posX > width) {
      let anchoBoton = imagenStart.width * 0.15;
      let altoBoton = imagenStart.height * 0.15;
      let posXBoton = (width - anchoBoton) / 2;
      
      if (clickBoton(posXBoton, 250, anchoBoton, altoBoton)) {
        pantalla = 1;
      }
    }
  } else if (pantalla == 1) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 2;
    }
  } else if (pantalla == 2) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 3;
    }
  } else if (pantalla == 3) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 4;
    }
  } else if (pantalla == 4) {
    if (clickBoton(80, 395, 190, 40)) {
      pantalla = 9;
    } else if (clickBoton(305, 395, 190, 40)) {
      pantalla = 7;
    } else if (clickBoton(530, 395, 190, 40)) {
      pantalla = 5;
    }
  } else if (pantalla == 5) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 6;
    }
  } else if (pantalla == 7) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 8;
    }
  } else if (pantalla == 8) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 11;
    }
  } else if (pantalla == 9) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 10;
    }
  } else if (pantalla == 10) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 11;
    }
  } else if (pantalla == 11) {
    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 16;
    } else if (clickBoton(430, 390, 240, 50)) {
      pantalla = 12;
    }
  } else if (pantalla == 12) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 13;
    }
  } else if (pantalla == 13) {
    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 15;
    } else if (clickBoton(430, 390, 240, 50)) {
      pantalla = 14;
    }
  } else if (pantalla == 15) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 18;
    }
  } else if (pantalla == 16) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 17;
    }
  } else if (pantalla == 17) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 18;
    }
  } else if (pantalla == 18) {
    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 19;
    } else if (clickBoton(430, 390, 240, 50)) {
      pantalla = 20;
    }
  } else if (pantalla == 20) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 21;
    }
  } else if (pantalla == 21) {
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 22;
    }
  } else if (pantalla == 22) {
    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 23;
    } else if (clickBoton(430, 390, 240, 50)) {
      pantalla = 24;
    }
  } else if (pantalla == 6 || pantalla == 14 || pantalla == 19) {
    // si perdiste resetea las posiciones
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 0;
      posX = -200;
      posTituloY = -400;
    }
  } else if (pantalla == 23 || pantalla == 24) {
    // prepara las posisiones para que arranque la animacion de creditos
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 25;
      posTituloY = -400; 
      posCreditosY = 450; 
    }
  } else if (pantalla == 25) {
    //ssi volves a empezar desde creditos resetea para la intro
    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 0;
      posX = -200;
      posTituloY = -400;
    }
  }
}
