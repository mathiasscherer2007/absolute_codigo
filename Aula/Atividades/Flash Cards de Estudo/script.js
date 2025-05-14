const divCARD1 = document.querySelector("#c0");
const divCARD2 = document.querySelector("#c1");
const divCARD3 = document.querySelector("#c2");
const divCARD4 = document.querySelector("#c3");
const divCARD5 = document.querySelector("#c4");
const divCARD6 = document.querySelector("#c5");
const IMAGEM = document.querySelector("img");
const CARDLIST = [divCARD1, divCARD2, divCARD3, divCARD4, divCARD5, divCARD6];
const butNEXT = document.querySelector(".next");
const butPREV = document.querySelector(".prev");

let page = 0;

const questoesHTML = [
    "Qual é a principal função da linguagem HTML?",
    "Como inserir o arquivo “foto.png” em uma página html?",
    "Quais são os valores possíveis para a propriedade <target> da tag <a>?",
    "Qual a diferença entre a tag <div> e a tag <span>?",
    "O que é semântica em HTML? Dê exemplos de tags.",
    "Qual é o valor padrão para a propriedade method de um <form>?"
];
const questoesCSS = [
    "Qual é a principal função da linguagem CSS?",
    "Qual é a vantagem de estilizar um documento com CSS via documento externo?",
    "Como adicionar um arquivo CSS em um arquivo HTML?",
    "O que faz a propriedade “color”?",
    "Qual a diferença entre class e id?",
    "O que é o Box Model?"
];
const questoesJS = [
    "Qual a diferença entre Java e JavaScript?",
    "Como adicionar um arquivo .js em um arquivo HTML?",
    "Como se converte um valor String para um valor Int em JS?",
    "Como funcionam os eventos no JS?",
    "Para que serve o método .forEach()?",
    "O que são as Arrow Functions?"
];

const respostasHTML = [
    "Organizar o conteúdo visual e fornecer a base para outros recursos interativos. O HTML é como o esqueleto da página.",
    "Utilizamos a tag <img> e mudamos o seu atributo src para o caminho da imagem.",
    "O atributo target define onde o link será aberto. Temos os valores '_blank', que abre numa nova janela, '_self', que abre no mesmo frame onde o link foi clicado, '_parent', que abre o link no frame pai, e '_top', que abre o link no corpo inteiro da window.",
    "O elemento <div> é um elemento de nível de bloco, enquanto <span> é um elemento inline. Isso significa que <div> ocupa toda a largura disponível e sempre inicia uma nova linha, enquanto <span> se adapta ao conteúdo e pode estar na mesma linha de outros elementos.",
    "Refere-se à escolha de tags HTML que melhor representam o significado do conteúdo da página, em vez de apenas a sua aparência visual. Alguns exemplos de tags semânticas são <header>, <footer>, <section>, etc.",
    "O method padrão é o GET, que adiciona os dados do formulário ao URL em pares nome/valor."
];
const respostasCSS = [
    "",
    "",
    "",
    "",
    "",
    ""
];
const respostasJS = [
    "",
    "",
    "",
    "",
    "",
    ""
];

window.addEventListener("load", () => {
    page++;
    carregarQuestoes();
})

butNEXT.addEventListener("click", () => {
    page++;
    carregarQuestoes();
})

butPREV.addEventListener("click", () => {
    page--;
    carregarQuestoes();
})

for (let i = 0; i < CARDLIST.length; i++) {
    const card = CARDLIST[i];
    card.addEventListener("click", () => {
        if (card.classList.contains("resposta")) {
            card.classList.remove("resposta");
            card.classList.add("pergunta");
            setTimeout(() => {
                const ID = card.id[1];
                if (page === 1) {
                    card.textContent = questoesHTML[ID];
                } else if (page === 2) {
                    card.textContent = questoesCSS[ID];
                } else {
                    card.textContent = questoesJS[ID];
                }
            }, 250);
        } else {
            card.classList.remove("pergunta");
            card.classList.add("resposta");
            const ID = card.id[1];
            if (page === 1) {
                card.textContent = respostasHTML[ID];
            } else if (page === 2) {
                card.textContent = respostasCSS[ID];
            } else {
                card.textContent = respostasJS[ID];
            }
        }
    })
}

function carregarQuestoes(){
    if (page === 1) {
        for (let i = 0; i < CARDLIST.length; i++) {
            const card = CARDLIST[i];
            card.classList.remove("resposta");
            card.classList.add("pergunta");
            card.textContent = "";
            card.textContent = questoesHTML[i];
        }
        butPREV.disabled = true;
        butNEXT.disabled = false;
        IMAGEM.src = "./images/htmlLogo.png";
    } else if (page === 2) {
        for (let i = 0; i < CARDLIST.length; i++) {
            const card = CARDLIST[i];
            card.classList.remove("resposta");
            card.classList.add("pergunta");
            card.textContent = "";
            card.textContent = questoesCSS[i];
        }
        butPREV.disabled = false;
        butNEXT.disabled = false;
        IMAGEM.src = "./images/cssLogo.png";

    } else {
        for (let i = 0; i < CARDLIST.length; i++) {
            const card = CARDLIST[i];
            card.classList.remove("resposta");
            card.classList.add("pergunta");
            card.textContent = "";
            card.textContent = questoesJS[i];
        }
        butPREV.disabled = false;
        butNEXT.disabled = true;
        IMAGEM.src = "./images/jsLogo.png";
    }
}