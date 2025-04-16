let nome = "aaaBigXera             ";

nome = nome.trim();        // Remove os espaços em branco no começo e no final da string
nome = nome.toUpperCase(); // AAABIGXERA
nome = nome.toLowerCase(); // aaabigxera

let nomeRep = nome.repeat(3);
console.log(nomeRep);

console.log(nome.charAt(0));
console.log(nome.indexOf("X"));
console.log(nome.lastIndexOf("a"));
console.log(nome.length);