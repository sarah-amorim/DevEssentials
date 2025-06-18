// While 
// Este bloco será repetido enquanto (while, em inglês) a condição for verdadeira, ou seja, enquanto o contador for menor ou igual a 10. 
let tabuada = 7;
let contador = 1; // variável de controle

while (contador <= 10){ // condição
  console.log(
    tabuada, 'x', contador, '=',
    tabuada * contador++ // Incremento
  );
}

// Loop for
// Essa estrutura do loop for não permite, por exemplo, que esqueçamos de adicionar o incremento, evitando os loops infinitos. 
for (contador = 1; contador <= 10; contador++) {// variável de controle - condição - contador ++ 
  console.log(
    tabualda, 'x', contador, '=', tabuada * contador
  );
}
