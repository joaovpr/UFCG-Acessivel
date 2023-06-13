var destacado = true;

function destacarHeaders() {
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  
  headers.forEach(function(header) {
    header.style.border = '5px solid red';
  });

  destacado = true;
}


function removerDestaqueHeaders() {
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  
  headers.forEach(function(header) {
    header.style.border = 'none';
  });

  destacado = false;
}


var btnDestacarHeaders = document.createElement('button');

btnDestacarHeaders.setAttribute('id', 'select-headers');

var headerHighlightIcon = document.createElement("img");
headerHighlightIcon.src = "https://img.icons8.com/?size=512&id=18868&format=png";
headerHighlightIcon.id = "headerHighlightIcon"
headerHighlightIcon.className = "highIcon"
var headerHighlightText = document.createElement("p");
headerHighlightText.textContent = "Destacar Títulos"

btnDestacarHeaders.appendChild(headerHighlightIcon);
btnDestacarHeaders.appendChild(headerHighlightText);


btnDestacarHeaders.onclick = function() {
  
  if (destacado) {
    
    destacarHeaders();
    destacado = false;
    
  } else {
    
    removerDestaqueHeaders();
    destacado = true;
    
  }
};

document.body.appendChild(btnDestacarHeaders);

