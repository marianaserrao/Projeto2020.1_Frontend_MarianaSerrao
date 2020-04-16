var login = document.querySelector("#login");

//funcao login
login.addEventListener("click",function(){
    event.preventDefault();

    //chamando elementos html
    var form = document.querySelector("form");
    var errouser = document.querySelector("#errouser");
    var erropassword = document.querySelector("#erropassword");

    //definindo objeto user
    var user={
        usuario:form.usuario.value,
        senha:form.senha.value,
    }

    //limpando erros
    errouser.innerHTML='';
    erropassword.innerHTML='';

    //validando inputs
    if (user.usuario==0){
        errouser.textContent="Usuário Inválido!";
    }
    if (user.senha==0){
        erropassword.textContent="Senha Inválida!";
    }
})
