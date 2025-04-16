const NTIME1 = document.getElementById("nTime1"); //
const GTIME1 = document.getElementById("gTime1"); // Puxa os elementos do documento HTML 
const NTIME2 = document.getElementById("nTime2"); // para acesso mais fácil
const GTIME2 = document.getElementById("gTime2"); //
const RESULTADO = document.getElementById("resultado"); // Puxa o elemento onde o resultado será exibido

let nomeT1; //
let golsT1; // Variáveis que irão conter
let nomeT2; // coisas importantes depois :)
let golsT2; //

// Bloco de código que define o valor das variáveis quando um valor é alterado e chama a função testaVencedor()
NTIME1.onchange = function(){
    nomeT1 = NTIME1.value;
    testaVencedor();
}
NTIME2.onchange = function(){
    nomeT2 = NTIME2.value;
    testaVencedor();
}
GTIME1.onchange = function(){
    golsT1 = Number(GTIME1.value);
    testaVencedor();
}
GTIME2.onchange = function(){
    golsT2 = Number(GTIME2.value);
    testaVencedor();
}

// Função que testa se tudo foi definido e quem é o vencedor
function testaVencedor(){
    if (nomeT1 != undefined && nomeT2 != undefined && !isNaN(golsT1) && !isNaN(golsT2)){
        if (golsT1 > golsT2){
            RESULTADO.innerText = "O VENCEDOR É " + nomeT1.toUpperCase();
        } else if (golsT1 === golsT2){
            RESULTADO.innerText = "EMPATE!!!";
        } else {
            RESULTADO.innerText = "O VENCEDOR É " + nomeT2.toUpperCase();
        }
    } else{
        console.log("deu nada");
    }
}