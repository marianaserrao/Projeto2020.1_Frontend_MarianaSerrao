var enviar = document.querySelector("#enviar");

//funcao enviar
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
            usuario: form.usuario.value,
            senha:form.senha.value,
            dia: form.dia.value,
            mes: form.mes.value,
            ano: form.ano.value,
            genero:form.genero.value,
    }

    //limpando erros
    errodata.innerHTML='';
    erronome.innerHTML='';
    errosobrenome.innerHTML='';
    erroemail.innerHTML='';
    errousuario.innerHTML='';
    errosenha.innerHTML='';

    
    //validando inputs
    var erro=false

    if(user.dia>31 || user.dia<1 || user.mes>12 || user.mes<1 || user.ano==0){
        errodata.textContent="Data inválida!";
        erro=true;
    }
    if (user.nome==0){
        erronome.textContent="Nome Inválido!";
        erro=true;
    }
    if (user.sobrenome==0){
        errosobrenome.textContent="Sobrenome Inválido!";
        erro=true;
    }
    if (user.email==0){
        erroemail.textContent="Email Inválido!";
        erro=true;
    }
    if (user.usuario==0){
        errousuario.textContent="Usuário Inválido!";
        erro=true;
    }
    if (user.senha==0){
        errosenha.textContent="Senha Inválida!";
        erro=true;
    }
    if (erro==false){
        window.location='index-login.html';
    }

})
