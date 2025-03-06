// console.log("Au revoir, Shoshanna!");

// var data = "05/03/2025";     // escopo global
// let nome = "Mathias";        // escopo local
// const PI = 3.1415;           // variável constante

// console.log(`Olá, ${nome}`); // formatação

// let infinito = Infinity;
// let notANumber = NaN;

// let hoje = new Date();
// console.log(hoje);

// console.log(`\n`);

const botao = document.getElementById("botao");
// console.log(botao);
botao.style.backgroundColor = "rgb(255, 0 ,0)";

const formulario = document.getElementById("form");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("O que é teu tá guardado");
})