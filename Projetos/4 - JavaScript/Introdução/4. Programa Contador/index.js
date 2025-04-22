const contador = document.getElementById("contador");
const botaoDiminuir = document.getElementById("diminuir");
const botaoResetar = document.getElementById("reset");
const botaoAumentar = document.getElementById("aumentar");
let cont = 0;

botaoDiminuir.addEventListener("click", function(){
    console.log("diminuir");
    cont--;
    contador.textContent = cont;
})

botaoResetar.addEventListener("click", function(){
    console.log("resetar");
    cont = 0;
    contador.textContent = cont;
})

botaoAumentar.addEventListener("click", function(){
    console.log("aumentar");
    cont++;
    contador.textContent = cont;
})