// Objetos são uma coleção de atributos e/ou métodos relacionados
// Podem representar coisas da vida real (pessoas, produtos, lugares)

const pessoa1 = {
    nome: "Jair",
    sobrenome: "Borsonairo",
    idade: 69,
    trabalha: false,
    dinheiroRoubado: 3000000000,
    digaVerdade: function(){return (`R$${this.dinheiroRoubado} no meu bolso kkkkkkkkkkkkkkk`)},
}

const pessoa2 = {
    nome: "Luli",
    sobrenome: "Ignácium",
    idade: 300,
    trabalha: false,
    dinheiroRoubado: 5000000000,
    digaVerdade: function(){return (`R$${this.dinheiroRoubado} no meu bolso kkkkkkkkkkkkkkk`)},
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa1.trabalha);
console.log(pessoa1.digaVerdade());
console.log("-----------------")
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
console.log(pessoa2.trabalha);
console.log(pessoa2.digaVerdade());