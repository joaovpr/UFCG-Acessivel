var btnMonoChrome = document.createElement("button");
btnMonoChrome.setAttribute('id', 'monoChrome-button');


var monochromeIcon = document.createElement("img");
monochromeIcon.src = "https://img.icons8.com/?size=512&id=25944&format=png";
monochromeIcon.id = "monochromeIcon"
monochromeIcon.className = "highIcon"
var monochromeText = document.createElement("p");
monochromeText.textContent = "Escala de Cinza"

btnMonoChrome.appendChild(monochromeIcon);
btnMonoChrome.appendChild(monochromeText);

var monocromaticoAplicado = false;

btnMonoChrome.onclick = function() {
  if (monocromaticoAplicado) {
    document.body.style.filter = "none";
    monocromaticoAplicado = false;
  } else {
    document.body.style.filter = "grayscale(100%)";
    monocromaticoAplicado = true;
  }
};

document.body.appendChild(btnMonoChrome);
