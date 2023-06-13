var toggleButton = document.createElement('button');
var closeButton = document.createElement('button');
toggleButton.id = 'toggleButton';
closeButton.id = 'closeButton';
var parentElement = document.body;

var assistiveOptionsMenu = document.querySelector('#top-menu');

parentElement.appendChild(toggleButton);

assistiveOptionsMenu.appendChild(closeButton);

var contentDiv = document.getElementById('top-menu');
contentDiv.style.display = 'none';

var assistiveOptionsIcon = document.createElement("img");
assistiveOptionsIcon.src = "https://img.icons8.com/?size=512&id=23608&format=png";
assistiveOptionsIcon.id = "assistiveOptionsIcon"
assistiveOptionsIcon.className = "acessibilityIcon"
assistiveOptionsIcon.alt = "Opções de Acessibilidade"


var closeButtonIcon = document.createElement("img");
closeButtonIcon.src = "https://img.icons8.com/?size=512&id=46&format=png";
closeButtonIcon.id = "closeButtonIcon"
closeButtonIcon.className = "closeButton"
var closeButtonText = document.createElement("p");
closeButtonText.textContent = "Fechar"

closeButton.appendChild(closeButtonIcon);
closeButton.appendChild(closeButtonText);

toggleButton.appendChild(assistiveOptionsIcon);

function toggleDiv() {
  if (contentDiv.style.display === 'none') {
    contentDiv.style.display = 'block';
  } else {
    contentDiv.style.display = 'none';
  }
}

toggleButton.addEventListener('click', toggleDiv);

closeButton.addEventListener('click', toggleDiv);
