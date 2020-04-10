var enviar = document.querySelector("#enviar");
var sendcode = document.querySelector("#sendcode");

//gerando codigo aleatorio de 6 digitos
var code=Math.floor(Math.random() * 899999) + 100000;

//funcao mandar email
sendcode.addEventListener("click",function(){
    console.log(code);
})

//validando inputs
enviar.addEventListener("click",function(){

    //chamando elementos html
    var form = document.querySelector("form");
    var desigualdade = document.querySelector("#desigualdade");
    var codigoerrado = document.querySelector("#codigoerrado");
    var digitesenha = document.querySelector("#digitesenha");

    //chamando values
    var passwordvalue1 = document.getElementById('senha').value;
    var passwordvalue2 = document.getElementById('confirmar').value;
    console.log(passwordvalue1);
    console.log(passwordvalue2);
    
    //limpando erros
    desigualdade.innerHTML='';
    codigoerrado.innerHTML='';
    digitesenha.innerHTML='';

    if(passwordvalue1==0 || passwordvalue2==0){
        digitesenha.textContent="Digite a senha nova em ambos os campos!"
    }

    if(passwordvalue1!=passwordvalue2 && !passwordvalue1==0 && !passwordvalue2==0){
        desigualdade.textContent="Senhas diferentes!";
    }
    
    if(form.codigo.value!=code){
        codigoerrado.textContent="Código incorreto!";
    }
})