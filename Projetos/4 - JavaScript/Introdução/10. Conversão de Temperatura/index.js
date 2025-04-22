const BUTTON = document.getElementById("botao");

BUTTON.addEventListener("click", function(){
    let valor = 0;
    const ENTRADA = Number(document.getElementById("entrada").value);
    const ESTADO = document.getElementById("selecao").value;
    const SAIDA = document.getElementById("saida");

    switch (ESTADO){
        case "CF":
            valor = (ENTRADA * 9/5) + 32;
            SAIDA.innerText = String(Number(valor.toFixed(4))) + "°F";
            break;
        case "FC":
            valor = (ENTRADA - 32) * 5/9;
            SAIDA.innerText = String(Number(valor.toFixed(4))) + "°C";
            break;
    }
})