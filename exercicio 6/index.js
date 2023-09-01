/* Escreva uma função ePaisagem que 
recebe dois argumentos, largura e altura
de imagem (number).
Retorne true se a imagem estiver no modo paisagem
*/

function ePaisagem1(largura, altura) {
  return largura > altura ? true : false;
}

const ePaisagem2 = (largura, altura) => (largura > altura ? true : false);

console.log(ePaisagem2(1080, 1920));
