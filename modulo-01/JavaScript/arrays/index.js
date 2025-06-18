/*
Arrays ou vetores são formas de organizar um conjunto de valores de maneira ordenada e estruturada numa única variável.
*/

let frutas = ["Maça", "Banana", "Uva"];
console.log(frutas);

// Para acessar um elemento específico desse array
console.log(frutas[0]);

// Para modificar o conteúdo do array
frutas[0] = "Goiaba";

// Os valores podem também ser inseridos numa posição que ainda não exista
let letras = ["A", "B"];
console.log(letras);

frutas[2] = "C";
console.log(letras);

// Os valores podem também ser inseridos numa posição que ainda não exista
letras[6] = "D";
console.log(frutas);

// Métodos e propriedades do Array
/*
Para adicionar elementos em um Array com JavaScript, podemos utilizar o método push(), que significa “empurrar”. Dessa forma, o próximo dado será sempre inserido ao final e não precisamos nos preocupar com a posição do índice.
*/

let pessoas = [];

pessoas.push("José");
pessoas.push("Ana");
pessoas.push("Maicon");

console.log(pessoas);

/* 
Para reduzir as nossas linhas de código, podemos adicionar todos os elementos de uma vez usando o push () 
*/
pessoas.push("José", "Luiz", "Vitória");

console.log(pessoas);

/*
Podemos também remover um elemento do Array. Para isso, o primeiro método de remoção que usamos é o pop(). Ele remove simplesmente e apenas o último elemento de um Array.
*/
pessoas.pop();
console.log(pessoas);

/*
O método splice() possui dois parâmetros que servirão para remover um elemento que está na posição e apenas ele mesmo (quantidade 1, que é o segundo parâmetro), removendo o valor “Ana”.
-> The splice() method adds and/or removes array elements.
*/
pessoas.splice(1,1); // remove um elemento específico

console.log(pessoas);
/*
Por fim, temos o método shift(), que, ao contrário do pop(), remove o primeiro elemento de um Array.
*/
pessoas.shift();

console.log(pessoas);

/*
Para saber a quantidade de elementos existentes em um Array usamos a propriedade length, que significa comprimento.
*/
console.log(pessoas.length);

// Ordenação do Array
/*
Quando adicionamos elementos em um Array, eles são organizados por ordem de inserção. Ou seja, o primeiro valor adicionado ocupará o índice 0 , o segundo valor estará no índice 1 e assim sucessivamente. 
*/
pessoas.sort();

console.log(pessoas);
