// Cria a div do menu assistivo 

const div1 = document.querySelector('#contrast-button');
const div2 = document.querySelector('#font-controls');
const div3 = document.querySelector('#monoChrome-button');
const div4 = document.querySelector('#select-links');
const div5 = document.querySelector('#select-headers');
const div6 = document.querySelector('#space-controls');
const div7 = document.querySelector('#select-typing-fields');

const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
headerDiv.setAttribute('class', 'cabecalho');

const titleH1 = document.createElement('h3');
titleH1.textContent = 'Opções de Acessibilidade';

const subtitleH2 = document.createElement('h4');
subtitleH2.textContent = 'UFCG Acessível';

headerDiv.appendChild(titleH1);
headerDiv.appendChild(subtitleH2);


var menuAssistivoTop = document.createElement("div");
menuAssistivoTop.setAttribute('id', 'top-menu');

menuAssistivoTop.appendChild(headerDiv);
menuAssistivoTop.appendChild(div2);
menuAssistivoTop.appendChild(div6);
menuAssistivoTop.appendChild(div1);
menuAssistivoTop.appendChild(div3);
menuAssistivoTop.appendChild(div4);
menuAssistivoTop.appendChild(div5);
menuAssistivoTop.appendChild(div7);

// Adiciona a div ao corpo da página
document.body.appendChild(menuAssistivoTop);