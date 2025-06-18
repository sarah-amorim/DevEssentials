/*
JSON (JavaScript Object Notation)
Com ele, é possível representar e transferir dados entre clientes e servidores, ou ainda, entre aplicações que precisam se comunicar. 

Os dados ficam estruturados em hierarquias e armazenados em pares de chave-valor.
*/

// Convertendo uma String em JSON
let exemploJson = '{"ong": "Recode", "telefone": "22223333"}';
let exemploConversao = JSON.parse(exemploJson);

console.log(exemploConversao);

// Conversão de JSON para String
let objeto = {ong: 'Recode', telefone: '22223333'};
let exemploConversao2 = JSON.stringify(objeto);

console.log(exemploConversao2);

/*
Como o JSON é uma notação para objetos, podemos imaginar que 
seu acesso ocorre como um objeto normal, de classe ou função, onde seus atributos desempenham um papel de atributos de objeto, e seus valores podem conter uma função, que será considerada como um método também.
*/

let recode = {
    ong: "Recode",
    endereco: {
        cep: "20231-046",
        bairro: "Centro, Lapa - RJ"
    },
    email: "contato@recode.org.br",
    telefones: [
        {
            representante: "Maria",
            telefone: "1111111"
        },
        {
            representante: "João",
            telefone: "2222222"
        }
    ]
    // Poderia ter uma função aqui, por exemplo
};

console.log(recode.ong);
console.log(recode.telefones[0]);