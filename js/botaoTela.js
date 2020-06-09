
let botaoTelaCartao = document.querySelector('.botaodeTesteCartao');

botaoTelaCartao.addEventListener('click', function(event){
    event.preventDefault();

    let tela = document.querySelector('#formAdiciona');
    tela.classList.toggle("some")

    let containerTabela = document.querySelector('.contai');
    containerTabela.classList.toggle('some')
})

let botaoTelatarefa = document.querySelector('.botaodeTeste');

botaoTelatarefa.addEventListener('click', function(event){
    event.preventDefault();

    let tela = document.querySelector('#form-cartao');
    tela.classList.toggle("some")
})