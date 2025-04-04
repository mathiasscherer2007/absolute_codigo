const SAIDA_VALOR = document.getElementById("valor");

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
   
    const FORMDATA = new FormData(this);
    let dados = Object.fromEntries(FORMDATA.entries());

    console.log(dados);

    let preco = 0;
    
    switch (dados["tamanho"]){
        case "p":
            preco += 10;
            break;
        case "m":
            preco += 15;
            break;
        case "g":
            preco += 20;
            break;
    }

    if (FORMDATA.has("calabresa")){
        preco += 3.5;
    }
    if (FORMDATA.has("queijo")){
        preco += 4;
    }
    if (FORMDATA.has("morango")){
        preco += 8;
    }

    preco *= Number(dados["quant"]);

    switch (dados["entOuBus"]){
        case "entrega":
            preco += 5;
    }

    console.log(preco);
    SAIDA_VALOR.innerText = `R$${preco.toFixed(2)}`;
})