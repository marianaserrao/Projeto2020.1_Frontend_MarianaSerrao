//elementos HTML
var botaomenu = document.querySelector("#botaomenu");
var main = document.querySelector("main");
var galeria=document.querySelectorAll(".divfoto");

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
        var perfil= document.createElement("button");
        var novasenha = document.createElement("button");
        var sair= document.createElement('button');

        //preenchendo elementos
        feed.textContent="Feed";
        perfil.textContent="Perfil"
        novasenha.textContent="Redefinir Senha";
        sair.textContent="Sair";
        
        //classificando elementos
        opcoes.classList.add('divopcoes');
        feed.classList.add("botaofeed");
        perfil.classList.add("botaoperfil");
        novasenha.classList.add("botaosenha");
        sair.classList.add("botaosair");
        
        //envelopando elementos
        opcoes.appendChild(feed);
        opcoes.appendChild(perfil);
        opcoes.appendChild(novasenha);
        opcoes.appendChild(sair);
        divmenu.appendChild(opcoes);
        
        //funcao botao feed
        feed.addEventListener("click",function(){
            window.location='index-feed.html';
        })

        //funcao botao perfil
        perfil.addEventListener("click",function(){
            window.location='index-perfil.html';
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
        
        //atualizando variavel
        menu=false;
    }

    //atualizando variavel
    menuclick+=1;    
})

//funcao curtidas
window.onload=function(){

    //percorrendo fotos
    galeria.forEach(function(foto){
        
        //criando elementos
        var divcurtidas=document.createElement("div");
        var curtidas = document.createElement("span");
        var botaocurtir=document.createElement("button");

        //preenchendo elementos
        botaocurtir.textContent="Curtir";
        curtidas.textContent="0";

        //classificando elementos
        divcurtidas.classList.add("divcurtidas");
        curtidas.classList.add("curtidas");
        botaocurtir.classList.add("botaocurtir");

        //envelopando elementos
        divcurtidas.appendChild(curtidas);
        divcurtidas.appendChild(botaocurtir);
        foto.appendChild(divcurtidas);

        //definindo variaveis de controle (funcao curtir)
        var i = 0;
        var curtido=0;
        
        //funcao curtir
        botaocurtir.addEventListener("click",function(){
            event.preventDefault();
            
            //ainda nao foi curtido
            if(curtido%2==0){
                
                //atualizando variaveis de controle
                i+=1;
        
                //incrementando curtida
                curtidas.textContent=i;
        
                //alterando cor curtidas
                curtidas.style.opacity="0.7";
                botaocurtir.style.opacity="0.7";
            }
        
            //ja foi curtido
            if(curtido%2!=0){
        
                //atualizando variavel de controle
                 i-=1
        
                //removendo curtida
                curtidas.textContent=i;
        
                //alterando cor curtidas
                curtidas.style.opacity="1";
                botaocurtir.style.opacity="1";
        
            }
        
            //atualizando variavel de controle
            curtido+=1
        })
    })
}
