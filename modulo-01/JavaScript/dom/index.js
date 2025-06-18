// Largura da página web (em px)
console.log(window.innerWidth); // é dinâmico

// Largura do computador inteiro
console.log(screen.width);

// Evento -> onresize, ação -> function()
// Quando a janela for redimensionada, o console mostra a largura da página
window.onresize = function(){
    console.log(window.innerWidth);
    // Conforme a página é redimensionada, o conteúdo acompanha
    window.scroll(0, window.innerWidth);
};

