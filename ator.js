//código do ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    // Ação para ator não sair da tela
    if (yAtor > 366){
      yAtor = 366;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      yAtor = 366;
      if (meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function mostraPonto(){
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, 400, 27);
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos += 1;
    yAtor = 366;
  }
}