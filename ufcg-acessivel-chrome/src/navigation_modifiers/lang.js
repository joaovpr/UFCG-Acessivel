
const headTag = document.querySelector('head');
const htmlTag = document.querySelector('html');

const langMetaTag = document.createElement('meta');

htmlTag.setAttribute('lang', 'pt-br');

langMetaTag.setAttribute('lang', 'pt-BR');

headTag.appendChild(langMetaTag);
