const OUTPUT = document.getElementById("saida");

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const FORMDATA = new FormData(this);
    let dados = Object.fromEntries(FORMDATA.entries());

    let jog1 = dados["jog1"];
    let jog2 = dados["jog2"];

    if (dados["nome1"] == ""){
        dados["nome1"] = "Jogador 1";
    }
    if (dados["nome2"] == ""){
        dados["nome2"] = "Jogador 2";
    }

    if((jog1 === "r" && jog2 === "s") || (jog1 === "p" && jog2 === "r") || (jog1 === "s" && jog2 === "p")){
        OUTPUT.innerText =  dados["nome1"].toUpperCase() + " VENCEU";
    } else if ((jog2 === "r" && jog1 === "s") || (jog2 === "p" && jog1 === "r") || (jog2 === "s" && jog1 === "p")){
        OUTPUT.innerText =  dados["nome2"].toUpperCase() + " VENCEU";
    } else {
        OUTPUT.innerText =  "EMPATOU!!";
    }
})