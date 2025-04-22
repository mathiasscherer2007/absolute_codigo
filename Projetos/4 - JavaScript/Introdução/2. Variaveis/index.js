// 1. declaração       let x;
// 2. atribuição       x = 1;

let x;
x = 100;
// let x = 100;
console.log(x);

let idade = 23;
console.log(`Você tem ${idade} anos de idade`);
console.log(typeof idade);

console.log(`\n`);

let nome = "xerão";
console.log(`Seu nome é ${nome}!`);
console.log(typeof nome);

console.log(`\n`);

let online = true;
console.log(typeof online);

document.getElementById("p1").textContent = document.getElementById("p1").textContent + " " + nome;
document.getElementById("p2").textContent = document.getElementById("p2").textContent + " " + idade;
document.getElementById("p3").textContent = document.getElementById("p3").textContent + " " + online;