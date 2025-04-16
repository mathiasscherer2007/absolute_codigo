function repetirTexto(texto, num){
    num = Number(num);
    for (let i = 0; i < num; i++) {
        console.log(texto);
    }
}

let lorem = "Lorem ipsum dolor sit amet";

repetirTexto(lorem, 50);

/*
----------------------------------------------
*/

function adicao(a, b){
    return a+b;
}

console.log(adicao(4, 5));