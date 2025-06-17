// Alert 
// A caixa de mensagem alert, como o próprio nome sugere, exibe um alerta para o usuário. 
function exemplo_alert(){
    alert("Seja bem-vindo ao site!");
}

// Prompt
// Além de exibir uma mensagem, exibe também uma caixa de texto para coletar alguma informação do usuário
function exemplo_prompt() {
    let nome = prompt("Qual é o seu nome?");
    document.writeln(nome + ", seja bem-vindo ao site!");
}

// Confirm
//  Como o próprio nome sugere, serve para efetuarmos confirmações
function exemplo_confirm() {
    let opcao = confirm("Deseja encerrar?");
    document.writeln("Sua escolha foi: " + opcao);
}