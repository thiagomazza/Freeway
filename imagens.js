// Declarar variáveis
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

// Função para carregar imagens
function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro1 = loadImage("imagens/carro-1.png")
    imagemCarro2 = loadImage("imagens/carro-2.png")
    imagemCarro3 = loadImage("imagens/carro-3.png")
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3];
}