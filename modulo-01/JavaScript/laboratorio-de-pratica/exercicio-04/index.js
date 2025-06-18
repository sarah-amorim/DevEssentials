/*
    Utilizando conceitos de array e function, crie uma função utilizando JavaScript, 
    que pede para o usuário digitar 5 números pelo prompt e coloque-os dentro de um vetor, 
    ordene esses números em ordem crescente e depois usando o return e document.write, retorne esse vetor 
    ordenado no HTML. A função deve ser executada ao clicar um botão com nome “Ordenar Valores” no HTML. 
    O código em JS deve ficar em um arquivo externo.
*/
function ordenaNumeros() {
    let numeros = [];
    for (let contador = 1; contador <= 5; contador++){
        let numero = prompt(contador + "º número: ");
        numeros.push(numero);
    }
    return numeros.sort();
};