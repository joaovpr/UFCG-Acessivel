const divMenu = document.createElement("div");
const divToRemove = document.getElementById("menu");
divMenu.setAttribute("id", "menu-div");

let menu_options = ["","Cadastro", "Histórico", "Currículo", "Turmas em curso","Turmas ofertadas","Solicitar matrícula(mínimo/máximo)","Calendário do campus","Calendário do curso","Estágios","Trancamento","Solicitar desvínculo","Alterar senha","Ajuda","Sair"];

let options_sources = ["Controlador?command=Home","Controlador?command=AlunoCadastro","Controlador?command=AlunoHistorico","Controlador?command=AlunoCurriculo","Controlador?command=AlunoTurmasListar","Controlador?command=AlunoDisciplinasOfertadas","Controlador?command=AlunoMatriculaExcepcionalSolicitar","Controlador?command=AlunoCalendarioCampus","Controlador?command=AlunoCalendarioCurso","Controlador?command=AlunoEstagios","Controlador?command=AlunoTrancamento","Controlador?command=AlunoDesvinculoSolicitar","Controlador?command=AlunoSenhaGetFormAlterar","Controlador?command=AlunoAjuda","Controlador?command=SairDoSistema"];

for (let i = 0; i <= menu_options.length-1; i++) {
  const button = document.createElement("button");
  button.innerText = menu_options[i];
  button.setAttribute("name", menu_options[i]);
  button.setAttribute('onclick', "window.location.href='https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/"+options_sources[i]+"'");
  button.setAttribute('id', 'menu-button'+i);
  divMenu.appendChild(button);
}

divToRemove.appendChild(divMenu);

function removeDivMenu() {
  const menu = document.getElementById("menu-div");
  if (menu) {
    menu.remove();
  }
}

btnHome = document.getElementById("menu-button0");

var homeIcon = document.createElement("img");
homeIcon.src = "https://img.icons8.com/?size=512&id=73&format=png";
homeIcon.id = "homeIcon"
homeIcon.className = "homeIc"
homeIcon.alt = "Home"
var homeText = document.createElement("p");
homeText.textContent = "Home"

btnHome.appendChild(homeIcon);
btnHome.appendChild(homeText);
