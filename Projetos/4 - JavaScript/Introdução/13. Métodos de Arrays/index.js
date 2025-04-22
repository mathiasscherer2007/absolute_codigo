// forEach() = itera um array aplicando uma função a cada elemento.
// o método forEach() envia o elemento atual, o index, e o array para a função.

function adicionarUm(element, index, array){
    array[index] = element + 1;
}

let numeros = [1, 2, 3, 4, 5];

numeros.forEach(adicionarUm);
console.log(numeros);

// map() é parecido, mas retorna um array novo.

function uppercase(element, index, array){
    return array[index] = element.toUpperCase();
}

const frutas = ["banana", "maçã", "kiwi"];

const frutasGramdes = frutas.map(uppercase);
console.log(frutasGramdes)

// filter() cria um array novo filtrando certos elementos.

function isEven(element){
    return (element % 2 === 0);
}

numeros = [1, 2, 3, 4, 5];
let numsPares = numeros.filter(isEven);

console.log(numsPares);

// reduce() reduz os elementos de um array para um único valor.

function soma(acumulador, element){
    return acumulador + element;
}

const precos = [1, 5, 86, 43, 13];
const total = precos.reduce(soma);

console.log(`R$${total}`);