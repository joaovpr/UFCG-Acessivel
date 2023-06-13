var increaseCharSpaceIcon = document.createElement("img");
increaseCharSpaceIcon.src = "https://img.icons8.com/?size=512&id=56205&format=png";
increaseCharSpaceIcon.id = "increaseCharSpaceIcon"
increaseCharSpaceIcon.className = "fontIcon"
var increaseCharSpaceText = document.createElement("p");
increaseCharSpaceText.textContent = "Aumentar Espaçamento"

var decreaseCharSpaceIcon = document.createElement("img");
decreaseCharSpaceIcon.src = "https://img.icons8.com/?size=512&id=56205&format=png";
decreaseCharSpaceIcon.id = "decreaseCharSpaceIcon"
decreaseCharSpaceIcon.className = "fontIcon"
var decreaseCharSpaceText = document.createElement("p");
decreaseCharSpaceText.textContent = "Diminuir Espaçamento"

var count = 0;

function increaseCharSpaceSize() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      var wordSpacing = parseInt(window.getComputedStyle(elements[i]).wordSpacing);
      wordSpacing = wordSpacing + 3 + 'px';
      elements[i].style.wordSpacing = wordSpacing;
      count++;
    }
  }
  
  function decreaseCharSpaceSize() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      if(count != 0) {
        var wordSpacing = parseInt(window.getComputedStyle(elements[i]).wordSpacing);
        wordSpacing = wordSpacing - 3 + 'px';
        elements[i].style.wordSpacing = wordSpacing;
        count--;
      }
    }
  }
  
  function addButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'space-controls';
    const increaseButton = document.createElement('button');
    increaseButton.name = 'Aumentar Espaçamento';
  
    increaseButton.appendChild(increaseCharSpaceIcon);
    increaseButton.appendChild(increaseCharSpaceText);
    increaseButton.addEventListener('click', increaseCharSpaceSize);
    const decreaseButton = document.createElement('button');
    decreaseButton.name = 'Diminuir Espaçamento';
    decreaseButton.appendChild(decreaseCharSpaceIcon);
    decreaseButton.appendChild(decreaseCharSpaceText);
    decreaseButton.addEventListener('click', decreaseCharSpaceSize);
    buttonContainer.appendChild(increaseButton);
    buttonContainer.appendChild(decreaseButton);
    document.body.appendChild(buttonContainer);
  }
  
  addButton();
  