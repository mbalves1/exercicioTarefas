

let botao = document.querySelector('.btn');

botao.addEventListener('click', function(event){
    event.preventDefault();

    // busquei as info do html
    let form = document.querySelector('#formAdiciona');

    let nome = form.nome.value
    let tarefa = form.tarefas.value
     
    // create td e inserindo
    let tarefaTabelaTR = document.createElement('tr')
    tarefaTabelaTR.classList.add("teste-class")
    let nomeTd = document.createElement('td')
    nomeTd.classList.add('pesquisa')
    let tarefaTd = document.createElement('td')
    tarefaTd.classList.add('pesquisa')
    let bot = document.createElement('button')
    let botX = document.createElement('button')
    bot.classList.add('botaoclasse')
    bot.classList.add('botaoverde') 
    bot.name = "bot"     


    nomeTd.textContent = nome;
    tarefaTd.textContent = tarefa;

    tarefaTabelaTR.appendChild(nomeTd);
    tarefaTabelaTR.appendChild(tarefaTd);
    tarefaTabelaTR.appendChild(bot);
    

    let tabela = document.querySelector('#tabela-tarefas');
    tabela.appendChild(tarefaTabelaTR)

    form.nome.value = "";
    form.tarefas.value = "";
    form.nome.focus()
    //


    let array = document.querySelectorAll(".botaoclasse");
    
    array.forEach(function(bot){
        bot.addEventListener('click', function(){
            bot.classList.toggle('botaoverde');
            
        }
    )})

    let linha = document.querySelectorAll(".teste-class")
   linha.forEach(function(tarefaTabelaT){
        tarefaTabelaT.addEventListener('dblclick', function(){
            this.remove();
            
        })
    })


})



