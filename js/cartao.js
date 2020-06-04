let botaoCartao = document.querySelector('.btnCartao');

botaoCartao.addEventListener('click', function(event){
    event.preventDefault();
    
    let cartao = document.createElement('p')
    cartao.classList.add('bordasCartao')
    let mural = document.querySelector('.mural')
    
    let recado = document.querySelector('#cartaoRecado');

    let recadoCartao = recado.value

    cartao.textContent = recadoCartao
    mural.appendChild(cartao)

   recado.value=""

    // buscando informações
    

        
    
})