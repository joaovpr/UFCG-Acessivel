var destacado = true;

function destacarCamposDeDigitacao() {
  var camposDeDigitacao = document.querySelectorAll('input[type="text"], input[type="password"], textarea');
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  camposDeDigitacao.forEach(function(campo) {
    campo.style.border = '5px solid red';
  });

  checkboxes.forEach(function(campo) {
    campo.style.border = '5px solid red';
  });

  destacado = true;
}

function removerDestaqueCamposDeDigitacao() {
  var camposDeDigitacao = document.querySelectorAll('input[type="text"], input[type="password"], textarea');
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  camposDeDigitacao.forEach(function(campo) {
    campo.style.border = 'none';
  });

  checkboxes.forEach(function(campo) {
    campo.style.border = 'none';
  });

  destacado = false;
}

var btnDestacarCamposDeDigitacao = document.createElement('button');

btnDestacarCamposDeDigitacao.setAttribute('id', 'select-typing-fields');

var campoHighlightIcon = document.createElement("img");
campoHighlightIcon.src = "https://img.icons8.com/?size=512&id=18868&format=png";
campoHighlightIcon.id = "campoHighlightIcon"
campoHighlightIcon.className = "highIcon"
var campoHighlightText = document.createElement("p");
campoHighlightText.textContent = "Destacar Campos de Digitação";

btnDestacarCamposDeDigitacao.appendChild(campoHighlightIcon);
btnDestacarCamposDeDigitacao.appendChild(campoHighlightText);

btnDestacarCamposDeDigitacao.onclick = function() {
  if (destacado) {
    destacarCamposDeDigitacao();
    destacado = false;
  } else {
    removerDestaqueCamposDeDigitacao();
    destacado = true;
  }
};

document.body.appendChild(btnDestacarCamposDeDigitacao);
