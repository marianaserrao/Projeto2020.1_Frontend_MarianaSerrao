var enviar = document.querySelector("#enviar");
var sendcode = document.querySelector("#sendcode");

//gerando codigo aleatorio de 6 digitos
var code=Math.floor(Math.random() * 899999) + 100000;

//funcao mandar codigo
sendcode.addEventListener("click",function(){
    console.log(code);
})

//funcao enviar
enviar.addEventListener("click",function(){

    //chamando elementos html
    var form = document.querySelector("form");
    var desigualdade = document.querySelector("#desigualdade");
    var codigoerrado = document.querySelector("#codigoerrado");
    var digitesenha = document.querySelector("#digitesenha");

    //definindo objeto user
    var user={
        senha: form.senha.value,
        confirmar: form.confirmar.value,
        codigo: form.codigo.value,
    }
    
    //limpando erros
    desigualdade.innerHTML='';
    codigoerrado.innerHTML='';
    digitesenha.innerHTML='';

    //validando inputs
    if(user.senha==0 || user.confirmar==0){
        digitesenha.textContent="Digite a senha nova em ambos os campos!"
    }

    if(user.senha!=user.confirmar && !user.senha==0 && !user.confirmar==0){
        desigualdade.textContent="Senhas diferentes!";
    }
    
    if(user.codigo!=code){
        codigoerrado.textContent="Código incorreto!";
    }
})