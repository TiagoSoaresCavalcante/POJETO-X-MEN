/*
o que precisamos fazer? - quando passarmos o mause em cima do persongem na lista
temos que adicionar a borda azul de seleção na imagem do personagem em mostrar 
a foto do personagem com nome e descrição

OBJETIVO 1- quando passarmos o mouse em cima do personagem na lista 
devemos seleciona-lo

passo 1- pegar o 
s personagens no js para pode verificar quando o usuario passa o 
mouse em cima de um deles

passo 2- adicionar a classe "selecionado" no personagem que o usuario
passa o cursor do mouse.

passo 3- verificar se existe um personagem selecionado, se sim devemos
remover a seleção dele
*/ 
// passo 1-
const  personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , ()=>{

  
    const personagemSelecionado = document.querySelector('.selecionado');personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');
        /*
        OBJETIVO 2-

        passo 1-
        */
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2- alterar a imagem do perssonagem grande

        const idPersonagem = personagem.
        attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3- auterar o nome do personagem grande.

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //passo 4- auterar a descrição do personagem.

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})