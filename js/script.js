

let botao = document.querySelector('.btn');

botao.addEventListener('click', function(event){
    event.preventDefault();

    // busquei as info do html
    let form = document.querySelector('#formAdiciona');

    let nome = form.nome.value;
    let tarefa = form.tarefas.value;
    let calendario = form.calendario.value;
    let calendario2 = form.calendario2.value;
     
    // create td e inserindo
    let tarefaTabelaTR = document.createElement('tr')
    tarefaTabelaTR.classList.add("teste-class")
    let nomeTd = document.createElement('td')
    nomeTd.classList.add('pesquisa')
    let tarefaTd = document.createElement('td')
    tarefaTd.classList.add('pesquisa')
    let bot = document.createElement('button')

    let botX = document.createElement('button')
    botX.classList.add('glyphicon')
    botX.classList.add('glyphicon-trash')

    bot.classList.add('botaoclasse')
    bot.classList.add('botaoverde') 
    bot.name = "bot"     


    // funcao calendario
    let calendarioTd = document.createElement('td')
    let calendario2Td = document.createElement('td')


    calendarioTd.textContent = calendario;
    
    calendario2Td.textContent = calendario2;
    
    

    // fim calendario

    nomeTd.textContent = nome;
    tarefaTd.textContent = tarefa;

    tarefaTabelaTR.appendChild(nomeTd);
    tarefaTabelaTR.appendChild(tarefaTd);
    tarefaTabelaTR.appendChild(calendarioTd)
    tarefaTabelaTR.appendChild(calendario2Td)
    tarefaTabelaTR.appendChild(bot);
    tarefaTabelaTR.appendChild(botX);
    

    let tabela = document.querySelector('#tabela-tarefas');
    tabela.appendChild(tarefaTabelaTR)

    form.nome.value = "";
    form.tarefas.value = "";
    form.calendario.value = "";
    form.calendario2.value = "";
    
    form.nome.focus()
    //


    // let array = document.querySelectorAll(".botaoclasse");
    
    // array.forEach(function(bot){
        bot.addEventListener('click', function(){
            bot.classList.toggle('botaoverde');
            
        })
    // )})

     let linha = document.querySelectorAll(".glyphicon")
        linha.forEach(function(tarefaTabelaTR){
        tarefaTabelaTR.addEventListener('click', function(){
            this.parentNode.remove();
        
        })
    })

    // let botaoRemover = document.querySelectorAll('.glyphicon');

    // botaoRemover.addEventListener('click', function(event){
    //     event.preventDefault();
    //     console.log("fuiclicado")


    //     })

})



