// Expressões de funções são um meio de definir funções como valores ou variáveis

const ola = function(){  // Uma função declarada dentro de uma variável
    console.log("Olá!");
}

ola();


setTimeout(function(){
    console.log("holy moly");
}, 3000);


const nums = [1, 2, 3, 4, 5, 6];
const quadrados = nums.map(function(element){
    return Math.pow(element, 2);
});

console.log(quadrados);