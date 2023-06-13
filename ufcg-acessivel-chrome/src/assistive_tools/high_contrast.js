var btnContraste = document.createElement("button");

btnContraste.setAttribute('id', 'contrast-button');

var highContrastIcon = document.createElement("img");
highContrastIcon.src = "https://img.icons8.com/?size=512&id=25958&format=png";
highContrastIcon.id = "highContrastIcon"
highContrastIcon.className = "highIcon"
var highContrastText = document.createElement("p");
highContrastText.textContent = "Modo Alto Contraste"

btnContraste.appendChild(highContrastIcon);
btnContraste.appendChild(highContrastText);

var contrasteAplicado = false;

btnContraste.onclick = function() {
  if (contrasteAplicado) {
    document.body.style.filter = "none";
    contrasteAplicado = false;
    
  } else {
    document.body.style.filter = "invert(100%)";
    contrasteAplicado = true;
    
  }
};

document.body.appendChild(btnContraste);
