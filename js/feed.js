//elementos HTML
    var botaopiar = document.querySelector("#botaopiar");
    var botaopesquisar = document.querySelector("#botaopesquisa");
    var campofiltro = document.querySelector("#pesquisar");
    var formpublicacao = document.querySelector("#publicar");
    var contador= document.querySelectorAll(".contador");
    var erropublicacao = document.querySelector("#erropubli");
    var feed = document.querySelector("#feed");
    var formpesquisa = document.querySelector("#formpesquisa");
    var erropesquisa = document.querySelector("#erropesq");
    var botaomenu = document.querySelector("#botaomenu");
    var header = document.querySelector("header");
    var body= document.querySelector("body");
    var main = document.querySelector("main");

//funcao carregar pius
window.onload= function(){

    var xhr = new this.XMLHttpRequest();

    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_")

    xhr.addEventListener("load",function(){
        var resposta = xhr.responseText;
        var pius = JSON.parse(resposta);
            
        pius.forEach(function(piu){

            //criando elementos
            var div = document.createElement("div");
            var usuario = document.createElement('div');
            var imagem = document.createElement('div');
            var nomes = document.createElement('div');
            var user=document.createElement('h2')
            var nome= document.createElement('h3');
            var p = document.createElement("p");
            var interacao = document.createElement("div");
            var curtidas= document.createElement("p");
            var curtir=document.createElement("button");
            var del =document.createElement("button");

            //preenchendo elementos
            var img=piu.imagem
            if(img!=0){
                imagem.style.backgroundImage= "url('"+img+"')";
            }
            nome.textContent=piu.nome;
            user.textContent=piu.username;
            p.textContent=piu.mensagem;
            curtidas.textContent="0";
            curtir.textContent="Curtir";
            del.textContent=" Deletar";

            //envelopando elementos
            interacao.appendChild(curtidas);
            interacao.appendChild(curtir);
            interacao.appendChild(del);
            nomes.appendChild(nome);
            nomes.appendChild(user);
            usuario.appendChild(imagem);
            usuario.appendChild(nomes);
            div.appendChild(usuario);
            div.appendChild(p);
            div.appendChild(interacao);
            feed.prepend(div);
                
            //classificando elementos
            div.classList.add("divfeed");
            usuario.classList.add("divusuario");
            nome.classList.add("nome");
            user.classList.add("user")
            imagem.classList.add('imagem');
            p.classList.add("piu");
            interacao.classList.add("interacao");
            curtidas.classList.add("curtidas");
            curtir.classList.add("curtir");
            del.classList.add("del");

            //funcao curtir
            var i = 0;
            var curtido=false;
            
            curtir.addEventListener("click",function(){
                event.preventDefault();
                    
                if(curtido==false){
                    i+=1;
                    curtidas.textContent=i;
                    curtido=true;
                }
            })
                
            //funcao deletar
            del.addEventListener("click",function(){
                event.preventDefault();
                div.remove();                    
            })    
            
        })
    });

    xhr.send();
}

var menu=false

//funcao abrir menu
botaomenu.addEventListener('click',function(){
    event.preventDefault;
    
    if(menu==false){
        var opcoes= document.createElement('div');
        var perfil= document.createElement("button");
        var ajuda = document.createElement("button")
        var sair= document.createElement('button');

        perfil.textContent="Perfil";
        ajuda.textContent="Ajuda";
        sair.textContent="Sair";

        opcoes.classList.add('divopcoes');
        perfil.classList.add("botaoperfil");
        ajuda.classList.add("botaoajuda");
        sair.classList.add("botaosair");

        opcoes.appendChild(perfil);
        opcoes.appendChild(ajuda);
        opcoes.appendChild(sair);
        header.appendChild(opcoes);

        perfil.addEventListener("click",function(){
            window.location='index-perfil.html';
        })

        ajuda.addEventListener("click",function(){
            window.location='index-ajuda.html';
        })

        sair.addEventListener("click",function(){
            window.location='index-login.html';
        })
       
        menu=true;
    }

})

//funcao fechar menu
main.addEventListener("click",function(){

    if (menu==true){
        var opcoes=document.querySelector(".divopcoes");
        opcoes.remove();
        menu=false;
    }
    
})

//funcao filtrar
campofiltro.addEventListener("input",function(){

    erropesquisa.innerHTML='';

    var pius=document.querySelectorAll('.piu');
    var nomes=document.querySelectorAll(".nome");
    var users=document.querySelectorAll(".user");
    var divsfeed=document.querySelectorAll(".divfeed");

    for(i=0; i<pius.length; i++){

        piu=pius[i].textContent;
        nome=nomes[i].textContent;
        user=users[i].textContent;
        divfeed=divsfeed[i];
        var expressao = new RegExp(this.value, "i");

        if (!expressao.test(piu)&&!expressao.test(nome)&&!expressao.test(user)){
            divfeed.style.display="none"; 
        }
        if(expressao.test(piu)||expressao.test(nome)||expressao.test(user)){
            divfeed.style.display="inherit";
        }
    }

})

//funcao pesquisar
botaopesquisar.addEventListener("click",function(){
    event.preventDefault();
    
    console.log("oi");
    //limpando erros
    erropesquisa.innerHTML='';
    
    //validando inputs
    var invalida = false
    var input=formpesquisa.pesquisar.value;
    var piu=formpublicacao.novopiu.value;
    
    if (input==0){
        erropesquisa.textContent= "Pesquisa Inválida!";
        invalida =true
    }
    if(input!=0){
        
        var pius=document.querySelectorAll('.piu');
        var nomes=document.querySelectorAll(".nome");
        var users=document.querySelectorAll(".user");
        var divsfeed=document.querySelectorAll(".divfeed");
        
        for(i=0; i<pius.length; i++){

            piu=pius[i].textContent;
            nome=nomes[i].textContent;
            user=users[i].textContent;
            divfeed=divsfeed[i];
            var expressao = new RegExp(campofiltro.value, "i");
            
            if (!expressao.test(piu)&&!expressao.test(nome)&&!expressao.test(user)){
                
                erropesquisa.textContent= "Nenhum resultado encontrado";

            }
        }
    }
})    

//funcao contador caracteres
function caracteres(contar,mostrar) {
    var caracteres = document.getElementById(contar).value.length;
    document.getElementById(mostrar).innerHTML = caracteres;
    if (caracteres>140){
        document.getElementById("contagem").style.color = "red";
        document.getElementById("contagem").style.fontWeight = "700";
    }
    if (caracteres<=140){
        document.getElementById("contagem").style.color = "black";
        document.getElementById("contagem").style.fontWeight = "500";
    }
}

//funcao piar
botaopiar.addEventListener("click",function(){
    event.preventDefault();
    
    //criando elementos
    var div = document.createElement("div");
    var usuario = document.createElement('div');
    var imagem = document.createElement('div');
    var nomes = document.createElement('div');
    var user=document.createElement('h2')
    var nome= document.createElement('h3');
    var p = document.createElement("p");
    var interacao = document.createElement("div");
    var curtidas= document.createElement("p");
    var curtir=document.createElement("button");
    var del =document.createElement("button");
      
    //limpando erros
    erropublicacao.innerHTML='';
    
    //validando inputs
    var invalido=false;
    var piu=formpublicacao.novopiu.value;
    
    if (piu==0){
        erropublicacao.textContent="Piu Inválido!";
        invalido=true;
    }
    if(piu.length>140){
        erropublicacao.textContent="O número máximo de caracteres por piu é 140!";
        invalido=true;
    }
    
    //criando novo piu
    if(invalido==false){
        
        //preenchendo elementos
        imagem.backgroundImage="url(+img/usuario.png+)"
        nome.textContent="Mariana Serrão";
        user.textContent="@MariS"
        p.textContent=piu;
        curtidas.textContent="0";
        curtir.textContent="Curtir";
        del.textContent=" Deletar";
        
        //envelopando elementos
        interacao.appendChild(curtidas);
        interacao.appendChild(curtir);
        interacao.appendChild(del);
        nomes.appendChild(nome);
        nomes.appendChild(user);
        usuario.appendChild(imagem);
        usuario.appendChild(nomes);
        div.appendChild(usuario);
        div.appendChild(p);
        div.appendChild(interacao);
        feed.prepend(div);
        
        //classificando elementos
        div.classList.add("divfeed");
        usuario.classList.add("divusuario");
        nome.classList.add("nome");
        user.classList.add("user")
        imagem.classList.add('imagem');
        p.classList.add("piu");
        interacao.classList.add("interacao");
        curtidas.classList.add("curtidas");
        curtir.classList.add("curtir");
        del.classList.add("del");

        formpublicacao.reset();
    }
    
    //funcao curtir
    var i = 0;
    var curtido=false;
    
    curtir.addEventListener("click",function(){
        event.preventDefault();
        
        if(curtido==false){
            i+=1;
            curtidas.textContent=i;
            curtido=true;
        }
    })
    
    //funcao deletar
    del.addEventListener("click",function(){
        event.preventDefault();
        div.remove();
    })    
    
})










