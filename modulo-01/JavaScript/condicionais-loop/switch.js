/*O switch é uma estrutura condicional que executa uma verificação distribuindo o resultado com base em múltiplos resultados, 
testando um valor de entrada e comparação com resultados em cada linha.*/
let opcao = 2;

switch (opcao) {
    case 1: 
    console.log("Primeira opção");
    break;
    case 2:
    console.log("Segunda opção");
    break;    
    case 3:
    console.log("Terceira opção");
    break;  

    default:
        // Caso a entrada não seja nenhuma das anteriores
        console.log("Opção padrão");
}