// São um jeito melhor e mais organizado de trabalhar com abstração
// Função relativamente nova, mas muito útil

class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProd(){
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço  : R$${this.preco.toFixed(2)}`);
    }
}

const produto1 = new Produto("Abacate", 30);
const produto2 = new Produto("Cueca", 400);
const produto3 = new Produto("Celular", 4299.99);

produto1.mostrarProd();
produto2.mostrarProd();
produto3.mostrarProd();