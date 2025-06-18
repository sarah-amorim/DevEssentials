/*
    Vamos criar um código em JavaScript usando a estrutura if, else e a estrutura for para 
    calcular a média final de um aluno, usando o comando prompt para receber as notas e a quantidade de 
    notas que se deseja obter a média. Após realizado o cálculo da média, verificar se é maior ou igual a 6, 
    se for, retorna o valor da média e o texto APROVADO. Se não for maior ou igual a 6, 
    retorna o valor da média e o texto REPROVADO. Coloque o código JS em um arquivo externo.
*/
let quantidade_notas = prompt("Quantas notas você deseja adicionar para calcular sua nota final? ");

let nota; 
let soma = 0;
let media;

for (contador = 1; contador <= quantidade_notas; contador++){
    nota = prompt("Nota " + contador + ": ");
    soma += parseFloat(nota);
    media = soma/quantidade_notas;
}

if (media < 6) {
    console.log("REPROVADO");
}
else {
    console.log("APROVADO");
}