// Exercicio com lógica de programação

// Escreva uma função que recebe dois números e retorne o maior deles

// Três maneiras de resolver

function max1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function max2(x, y) {
  return x > y ? x : y;
}

const max3 = (x, y) => (x > y ? x : y);

console.log(max3(15, 50));
