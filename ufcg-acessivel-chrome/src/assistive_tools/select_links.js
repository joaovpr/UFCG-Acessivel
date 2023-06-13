var destacado = true;

function destacarLinks() {
  var links = document.querySelectorAll('a, link');

  
  links.forEach(function(link) {
    link.style.border = '5px solid red';
  });

  destacado = true;
}


function removerDestaqueLinks() {
  var links = document.querySelectorAll('a, link');

  
  links.forEach(function(link) {
    link.style.border = 'none';
  });

  destacado = false;
}


var btnDestacarLinks = document.createElement('button');

btnDestacarLinks.setAttribute('id', 'select-links');

var linkHighlightIcon = document.createElement("img");
linkHighlightIcon.src = "https://img.icons8.com/?size=512&id=Ed0GaJ4GWTTW&format=png";
linkHighlightIcon.id = "linkHighlightIcon"
linkHighlightIcon.className = "highIcon"
var linkHighlightText = document.createElement("p");
linkHighlightText.textContent = "Destacar Links"

btnDestacarLinks.appendChild(linkHighlightIcon);
btnDestacarLinks.appendChild(linkHighlightText);




btnDestacarLinks.onclick = function() {
  
  if (destacado) {
    
    destacarLinks();
    destacado = false;
   
  } else {
    
    removerDestaqueLinks();
    destacado = true;
    
  }
};

document.body.appendChild(btnDestacarLinks);

