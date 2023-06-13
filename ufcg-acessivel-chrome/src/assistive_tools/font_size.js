var increaseFontIcon = document.createElement("img");
increaseFontIcon.src = "https://img.icons8.com/?size=512&id=1716&format=png";
increaseFontIcon.id = "increaseFontIcon"
increaseFontIcon.className = "fontIcon"
var increaseFontText = document.createElement("p");
increaseFontText.textContent = "Aumentar Fonte"

var decreaseFontIcon = document.createElement("img");
decreaseFontIcon.src = "https://img.icons8.com/?size=512&id=1718&format=png";
decreaseFontIcon.id = "decreaseFontIcon"
decreaseFontIcon.className = "fontIcon"
var decreaseFontText = document.createElement("p");
decreaseFontText.textContent = "Diminuir Fonte"

function increaseFontSize() {
    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      let fontSize = parseInt(window.getComputedStyle(elements[i]).fontSize);
      fontSize = fontSize + 1 + 'px';
      elements[i].style.fontSize = fontSize;
    }
  }
  
  function decreaseFontSize() {
    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      let fontSize = parseInt(window.getComputedStyle(elements[i]).fontSize);
      fontSize = fontSize - 1 + 'px';
      elements[i].style.fontSize = fontSize;
    }
  }
  
  function addButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'font-controls';
    const increaseButton = document.createElement('button');
    increaseButton.name = 'Aumentar Fonte';
  
    increaseButton.appendChild(increaseFontIcon);
    increaseButton.appendChild(increaseFontText);
    increaseButton.addEventListener('click', increaseFontSize);
    const decreaseButton = document.createElement('button');
    
    decreaseButton.name = 'Diminuir Fonte';
    decreaseButton.appendChild(decreaseFontIcon);
    decreaseButton.appendChild(decreaseFontText);
    decreaseButton.addEventListener('click', decreaseFontSize);
    buttonContainer.appendChild(increaseButton);
    buttonContainer.appendChild(decreaseButton);
    document.body.appendChild(buttonContainer);
  }
  
  addButton();
  