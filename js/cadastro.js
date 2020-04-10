var enviar = document.querySelector("#enviar");

//funcao do envio de formulario
enviar.addEventListener("click",function(){
    event.preventDefault();

    //chamando elementos do html
    var form = document.querySelector("form");
    var erronome = document.querySelector("#erronome");
    var errosobrenome = document.querySelector("#errosobrenome");
    var erroemail = document.querySelector("#erroemail");
    var errousuario = document.querySelector("#errousuario");
    var errosenha = document.querySelector("#errosenha");
    var errodata = document.querySelector("#errodata");
    
    //definindo objeto user
    var user={
            nome:form.nome.value,
            sobrenome:form.sobrenome.value,
            email: form.email.value,
            senha:form.senha.value,
            dia: form.dia.value,
            mes: form.mes.value,
            ano: form.ano.value,
            genero:form.genero.value,
    }

    //chamando values   
    var nomevalue = document.getElementById('nome').value;
    var sobrenomevalue = document.getElementById('sobrenome').value;
    var emailvalue = document.getElementById('email').value;
    var usuariovalue = document.getElementById('usuario').value;
    var senhavalue = document.getElementById('senha').value;

    //limpando erros
    errodata.innerHTML='';
    erronome.innerHTML='';
    errosobrenome.innerHTML='';
    erroemail.innerHTML='';
    errousuario.innerHTML='';
    errosenha.innerHTML='';

    //validando inputs
    if(user.dia>31 || user.dia<1 || user.mes>12 || user.mes<1 || user.ano==0){
        errodata.textContent="Data inválida!";
    }
    if (erroinsert(nomevalue)) {
        erronome.textContent="Nome Inválido!";
    }
    if (erroinsert(sobrenomevalue)) {
        errosobrenome.textContent="Sobrenome Inválido!";
    }
    if (erroinsert(emailvalue)) {
        erroemail.textContent="Email Inválido!";
    }
    if (erroinsert(usuariovalue)) {
        errousuario.textContent="Usuário Inválido!";
    }
    if (erroinsert(senhavalue)) {
        errosenha.textContent="Senha Inválida!";
    }
    else{
        window.location='index-login.html';
    } 

})

//funcao de validacao de inputs
function erroinsert(insert){
    if (insert==0){
        return true;
    }
}