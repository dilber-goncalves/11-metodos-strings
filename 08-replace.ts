//replace -> substitui parte de uma string por outra
//replaceAll -> substitui todas as partes de uma string por outra 

const texto: string = 'Meu texto de exemplo de texto string';

console.log(texto);

const novoTexto = texto.replace('texto', 'novo texto');

console.log(novoTexto);

const novoTexto2 = texto.replaceAll('texto', 'outro novo texto');

console.log(novoTexto2);