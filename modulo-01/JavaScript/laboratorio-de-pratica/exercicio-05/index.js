/*
let dadosAluno = {
    Nome: "Sarah Amorim",
    Curso: "Sistemas de informação",
    Modulo: "Programação Web",
    Professor: "Carlos"
};

let propriedades = [] = Object.keys(dadosAluno);
let valores = [] = Object.values(dadosAluno);

let th = [];
let td = [];

let trh = document.createElement('tr');
let trd = document.createElement('tr');
let table = document.createElement('table');
*/

let dadosAluno = {
  Nome: 'Gabriel',
  Curso: 'Direito',
  Modulo: '3º',
  Professor: 'Juraci'
};

let propriedades = [] = Object.keys(dadosAluno);
let valores = [] = Object.values(dadosAluno);
let th = [];
let td = [];

let trh = document.createElement('tr');
let trd = document.createElement('tr');
let table = document.createElement('table');

for (let i = 0; i <= 3; i++) {
  th[i] = document.createElement('th');
  td[i] = document.createElement('td');
  th[i].innerHTML = propriedades[i];
  td[i].innerHTML = valores[i];
}

for (let i = 0; i <= 3; i++) {
  trh.appendChild(th[i]);
  trd.appendChild(td[i]);
}

table.setAttribute('border', '1');
table.appendChild(trh);
table.appendChild(trd);
document.body.appendChild(table);
