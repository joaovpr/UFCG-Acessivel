

//CADASTRO

if(window.location.href == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoCadastro"){
    const infoClass = document.querySelectorAll('.col-sm-3');

    infoClass.forEach(function(infoClass) {
        infoClass.setAttribute('tabindex', '0');
    });


    const infoDataClass = document.querySelectorAll('.col-sm-9')


    infoDataClass.forEach(function(infoDataClass) {
        infoDataClass.setAttribute('tabindex', '0');
    })
}


//HISTORICO
if(window.location.href == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoHistorico"){
    

    const infoHistClass = document.querySelectorAll('td')

    infoHistClass.forEach(function(infoHistClass) {
        infoHistClass.setAttribute('tabindex', '0');
    })
}

if(window.location.href == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoCurriculo"){
    

    const infoCurClass = document.querySelectorAll('td')

    infoCurClass.forEach(function(infoCurClass) {
        infoCurClass.setAttribute('tabindex', '0');
    })
}



//HORARIO

if(window.location.href.slice(0, window.location.href.length - 19) == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoHorarioConfirmar"){
    const infoHorClass = document.querySelectorAll('td')

    infoHorClass.forEach(function(infoHorClass) {
        infoHorClass.setAttribute('tabindex', '0');
    })
}


//NOTAS
if(window.location.href.slice(0, window.location.href.length - 32) == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoTurmaNotas&codigo"){
    const infoNotaClass = document.querySelectorAll('td');

    infoNotaClass.forEach(function(infoNotaClass) {
        infoNotaClass.setAttribute('tabindex','0');
    })
}

//Frequencia

if(window.location.href.slice(0, window.location.href.length - 32) == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoTurmaFrequencia&codigo"){
    const infoFreqClass = document.querySelectorAll('td');

    infoFreqClass.forEach(function(infoFreqClass) {
        infoFreqClass.setAttribute('tabindex','0');
    })
}

//Turmas Ofertadas

if(window.location.href == "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=AlunoDisciplinasOfertadas"){
    const infoDisOfClass = document.querySelectorAll('td');

    infoDisOfClass.forEach(function(infoDisOfClass) {
        infoDisOfClass.setAttribute('tabindex','0');
    })
}