//elementos HTML
    var botaopiar = document.querySelector("#botaopiar");
    var formpublucacao = document.querySelector("#publicar");
    var botaopesquisar = document.querySelector("#botaopesquisa");
    var campofiltro = document.querySelector("#pesquisar");
    var contador= document.querySelectorAll(".contador");
    var erropublicacao = document.querySelector("#erropubli");
    var feed = document.querySelector("#feed")
    var formpesquisa = document.querySelector("#formpesquisa");
    var erropesquisa = document.querySelector("#erropesq");

//funcao carregar pius
    window.onload= function(){

        var xhr = new this.XMLHttpRequest();

        xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_")

        xhr.addEventListener("load",function(){
            var resposta = xhr.responseText;
            var pius = JSON.parse(resposta);
            
            pius.forEach(function(){

                console.log(this.nome);

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
                imagem.style.backgroundImage= "url("pius.imagem")";
                nome.textContent=this.nome;
                user.textContent=this.username;
                p.textContent=this.mensagem;
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
    var piu=formpublucacao.novopiu.value;
    
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

        formpublucacao.reset();
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

//funcao filtrar
campofiltro.addEventListener("input",function(){

    console.log(campofiltro.value);
    var pius=document.querySelectorAll('.piu');
    for(i=0; i<pius.length; i++){

        piu=pius[i];
        console.log(piu);
    }

})

//funcao pesquisar
botaopesquisar.addEventListener("click",function(){
    event.preventDefault();
    
    //limpando erros
    erropesquisa.innerHTML='';
    
    //validando inputs
    var invalida = false
    var input=formpesquisa.pesquisar.value;
    var piu=formpublucacao.novopiu.value;
    
    if (input==0){
        erropesquisa.textContent= "Pesquisa Inválida!";
        invalida =true
    }
})








