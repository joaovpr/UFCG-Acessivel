function criarBotao() {
  var botao = document.createElement('button');
  botao.textContent = 'Ativar Estilos';
  botao.addEventListener('click', function() {
    botao.removeEventListener('click', arguments.callee);
    botao.addEventListener('click', removerEstilos);
    botao.addEventListener('click', removerImagens);
  });
  document.body.appendChild(botao);
}

function removerEstilos() {
  var elementos = document.querySelectorAll('[id]:not(#top-menu, #top-menu *,#toggleButton, #toggleButton *)');
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    elemento.style.cssText = 'color: inherit !important; background-color: transparent !important; font-size: inherit !important; font-weight: inherit !important; font-style: inherit !important; text-decoration: none !important; border: none !important; padding: 0 !important; margin: 0 !important;';
  }
  var botoes = document.getElementsByTagName("button");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].disabled = true;
  }
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].disabled = true;
  }
}

function removerImagens() {
  var imagens = document.getElementsByTagName('img');
  for (var i = 0; i < imagens.length; i++) {
    var imagem = imagens[i];
    imagem.remove();
  }
}

criarBotao();
