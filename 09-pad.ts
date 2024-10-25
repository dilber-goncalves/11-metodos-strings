//padStart -> adiciona um caractere a esquerda
//padEnd -> adiciona um caractere a direita     

const texto: string = 'O sol';

console.log(texto);

const novoTexto = texto.padStart(2, '=');

console.log(novoTexto);

const novoTexto2 = texto.padEnd(2, '=');

console.log(novoTexto2);