//código do carro
let yCarros = [40, 95, 150, 210, 265, 320];
let xCarros = [800, 800, 800, 800, 800, 800];
let velocidadeCarros = [2.8, 3, 4, 2.5, 4.2, 3.8];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    if (xCarros[i] < -50){
      xCarros[i] = 800
    }
  }
}