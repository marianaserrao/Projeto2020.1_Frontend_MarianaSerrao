//elementos HTML
var botaomenu = document.querySelector("#botaomenu");
var main = document.querySelector("main");
var inputimgperfil = document.querySelector("#inputimgperfil");
var botaodescricao= document.querySelector("#botaodescricao");
var inputdescricao= document.querySelector("#inputdescricao");
var inputfotos= document.querySelector("#inputfotos");

//definindo variavel de controle (funcoes abrir e fechar menu)
var menu=false;
var menuclick=0;

//funcao menu
botaomenu.addEventListener('click',function(){
event.preventDefault;

    //chamando elementos html
    var divmenu = document.querySelector("#divmenu");

    //abrindo menu
    if(menu==false&&menuclick%2==0){

        //criando elementos
        var opcoes= document.createElement('div');
        var feed= document.createElement("button");
        var novasenha = document.createElement("button")
        var sair= document.createElement('button');

        //preenchendo elementos
        feed.textContent="Feed";
        novasenha.textContent="Redefinir Senha";
        sair.textContent="Sair";
        
        //classificando elementos
        opcoes.classList.add('divopcoes');
        feed.classList.add("botaofeed");
        novasenha.classList.add("botaosenha");
        sair.classList.add("botaosair");
        
        //envelopando elementos
        opcoes.appendChild(feed);
        opcoes.appendChild(novasenha);
        opcoes.appendChild(sair);
        divmenu.appendChild(opcoes);
        
        //funcao botao feed
        feed.addEventListener("click",function(){
            window.location='index-feed.html';
        })
        
        //funcao botao redefinir senha
        novasenha.addEventListener("click",function(){
            window.location='index-senha.html';
        })

        //funcao botao sair
        sair.addEventListener("click",function(){
            window.location='index-login.html';
        })
    
        //atualizando variavel de controle
        menu=true;
    }

    //fechando menu
    if (menuclick%2!=0){
        var opcoes=document.querySelector(".divopcoes");
        opcoes.remove();
            
        //atualizando variavel
        menu=false;
    }

    //atualizando variavel
    menuclick+=1;
})

//funcao fechar menu
main.addEventListener("click",function(){

    //fechando menu
    if (menu==true){
        var opcoes=document.querySelector(".divopcoes");
        opcoes.remove();
        
        //atualizando variaveis
        menu=false;
    }
    
    //atualizando variavel
    menuclick+=1;    
})

//funcao foto perfil
inputimgperfil.addEventListener("change",function(){
    
    //chamando elementos html
    var divfoto= document.querySelector("#imgperfil");
    var fotoperfil =document.querySelector(".fotoperfil");

    //definindo variaveis
    var files= inputimgperfil.files;

    //limpando div
    divfoto.style.backgroundImage="none";

    if(divfoto.childElementCount!=0){

        fotoperfil.remove();
    }

    //percorrendo arquivos
    for(var file of files){

        //criando elementos
        var foto=document.createElement("img");

        //preenchendo elementos
        foto.src = URL.createObjectURL(file);

        //classificando elementos
        foto.classList.add("fotoperfil");

        //envelopando elementos
        divfoto.appendChild(foto);        
    }

    //limpando input
    inputimgperfil.value="";
})

//funcao botao descricao
botaodescricao.addEventListener("click",function(){
    botaodescricao.style.opacity="0.5"
})

//funcao input descricao
inputdescricao.addEventListener("input",function(){
    botaodescricao.style.opacity="1"
})

//funcao fotos galeria
inputfotos.addEventListener("change",function(){

    //chamando elementos html
    var divnovasfotos= document.querySelector("#divnovasfotos");
    var semfotos= document.querySelector("#semfotos");

    //definindo variaveis
    var files= inputfotos.files;

    //percorrendo arquivos
    for(var file of files){

        //criando elementos
        var divfoto= document.createElement("div");
        var foto=document.createElement("img");
        var botaodel=document.createElement("button");
        
        //preenchendo elementos
        foto.src = URL.createObjectURL(file);
        botaodel.textContent= "Deletar";
        
        //classificando elementos
        divfoto.classList.add("divfoto");
        foto.classList.add("foto");
        botaodel.classList.add("botaodelfoto");    
        
        //envelopando elementos
        divfoto.appendChild(foto);
        divfoto.appendChild(botaodel);
        divnovasfotos.prepend(divfoto);
        
        //removendo mensagem sem fotos
        semfotos.style.display="none";
        
        //funcao deletar
        botaodel.addEventListener("click",function(){
            event.preventDefault;
            
            //deletando foto
            divfoto.remove();
            
            //todas as fotos deletadas
            if(divnovasfotos.childElementCount==0){
                
                //exibindo mensagem sem fotos
                semfotos.style.display="inherit";
            }
        })
        
        //limpando input
        inputfotos.value="";
    }
})