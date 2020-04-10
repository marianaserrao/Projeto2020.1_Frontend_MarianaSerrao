var login = document.querySelector("#login");

//funcao de login
login.addEventListener("click",function(){
    event.preventDefault();

    //chamando elementos html
    var form = document.querySelector("form");
    var errouser = document.querySelector("#errouser");
    var erropassword = document.querySelector("#erropassword");

    //chamando values
    var uservalue = document.getElementById('usuario').value;
    var passwordvalue = document.getElementById('senha').value;

    //limpando erros
    errouser.innerHTML='';
    erropassword.innerHTML='';

    //validando inputs
    if (erroinsert(uservalue)){
        errouser.textContent="Usuário Inválido!"
    }
    if (erroinsert(passwordvalue)){
        erropassword.textContent="Senha Inválida!"
    }
})

//funcao de validacao de inputs
function erroinsert(insert){
    if (insert==0){
        return true;
    }
}