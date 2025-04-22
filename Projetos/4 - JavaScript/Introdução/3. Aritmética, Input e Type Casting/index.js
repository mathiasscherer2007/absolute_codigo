// operadores = + - * /

let alunos = 30;

alunos += 1;
alunos -= 1;
alunos *= 2;
alunos /= 2;
alunos **= 2;
alunos %= 2;

console.log(alunos);
console.log(`\n`);

// input
let nome;

document.getElementById("botao").onclick = function(){
    nome = document.getElementById("entrada").value;
    document.getElementById("texto").textContent = `Seu nome é ${nome}`;
}

// type casting

let idade = 23;
console.log(typeof idade);

idade = String(idade);
console.log(typeof idade);

idade = Boolean(idade);
console.log(typeof idade);