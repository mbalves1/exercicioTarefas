// botao para criar o card

let botaoCartao = document.querySelector('.btnCartao');

botaoCartao.addEventListener('click', function(event){
    event.preventDefault();
    
    let cartao = document.createElement('p')
    cartao.classList.add('bordasCartao')
    
// botao cancela
    let butCar = document.createElement('button')
    butCar.classList.add('botaocard')
    butCar.classList.add('delete-forever')
    butCar.classList.add('btn-danger')
    butCar.id = "idBotaoCartao"


    // botao verde
    let butCar1 = document.createElement('button')
    butCar1.classList.add('botaocard1')
    
    //botao amarelo
    let butCar2 = document.createElement('button')
    butCar2.classList.add('botaocard2')


    let mural = document.querySelector('.mural')
    
    let recado = document.querySelector('#cartaoRecado');

    let recadoCartao = recado.value


    //botao no cartao
   

    cartao.textContent = recadoCartao

    cartao.appendChild(butCar2)
    cartao.appendChild(butCar1)
    cartao.appendChild(butCar)
    

    mural.appendChild(cartao)

   recado.value=""

    
    
    let botaoDoCartao = document.querySelectorAll('.botaocard');

    botaoDoCartao.forEach(function(butCar){
        butCar.addEventListener('click', function(event){
            event.preventDefault();
            butCar.parentNode.remove()
        }); 
    })
    
    let botaoMudaCor = document.querySelectorAll('.botaocard1');
    botaoMudaCor.forEach(function(butCar1){
        butCar1.addEventListener('click', function(event){
            event.preventDefault();
            butCar1.parentNode.classList.add('verde')
            butCar1.parentNode.classList.remove('amarelo')
            
        })
    })

    let botaoMudaCorAmarelo = document.querySelectorAll('.botaocard2');
    botaoMudaCorAmarelo.forEach(function(butCar2){
        butCar2.addEventListener('click', function(event){
            event.preventDefault();
            butCar2.parentNode.classList.add('amarelo')
            butCar2.parentNode.classList.remove('verde')
            
            
        })
    })
    
})


// botao dentro do card

