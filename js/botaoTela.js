
let botaoTelaCartao = document.querySelector('.botaodeTesteCartao');

botaoTelaCartao.addEventListener('click', function(event){
    event.preventDefault();

    let tela = document.querySelector('#formAdiciona');
    tela.classList.toggle("some")

    let containerTabela = document.querySelector('.contai');
    containerTabela.classList.toggle('some')
})

let botaoTelatarefa1 = document.querySelector('.botaodeTeste');

botaoTelatarefa1.addEventListener('click', function(event){
    event.preventDefault();

    let tela2 = document.querySelector('#form-cartao');
    tela2.classList.toggle("some")
})