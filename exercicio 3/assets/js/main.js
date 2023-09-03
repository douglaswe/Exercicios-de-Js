const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const tagCrianda = document.createElement(tag);
  tagCrianda.innerText = texto;
  div.appendChild(tagCrianda);
}
container.appendChild(div);

// const p = document.createElement('p'); // Cria um <p></p>
// const text = document.createTextNode('Olá mundo'); // Cria um texto
// p.appendChild(text); // Adiciona o texto ao p <p>Olá mundo</p>
// document.body.appendChild(p); // Adiciona o p ao body

// (function (){
//     const elementos = [
//         {tag: 'p', texto: 'Frase 1'},
//         {tag: 'div', texto: 'Frase 2'},
//         {tag: 'footer', texto: 'Frase 3'},
//         {tag: 'section', texto: 'Frase 4'}
//     ];
//     const container = document.querySelector('.container');
//     let tagHtml = '';

//     for (let i = 0; i < elementos.length; i++){
//          //desestruturando o 'elementos'
//          let {tag, texto} = elementos[i];
//          tagHtml += `<${tag}>${texto}</${tag}>`;

//      }
//     container.innerHTML += `<div>${tagHtml}</div>`;

// }) ()
