const BOTAO = document.getElementById("botao");
const SAIDA = document.getElementById("saida");
const ENTRADA = document.getElementById("input");
const DIV_DADOS = document.getElementById("div_dados");

BOTAO.addEventListener("click", function(){
    let dados = Number(ENTRADA.value);
    console.log(`Jogando ${dados} dados...`);
    let valorTot = 0;

    if(dados === 0 || isNaN(dados)){
        SAIDA.textContent = "insira um valor válido";
        SAIDA.style.color = "red";
    } else {
        DIV_DADOS.innerHTML = "";
        SAIDA.style.color = "white";
        for (let i = 0; i < dados; i++) { // loop para decidir os valores
            const r = Math.floor(Math.random() * 6) + 1; // roda um valor
    //      console.log(r);
            valorTot += r; // adiciona o valor rolado no total
    
            const img = document.createElement("img"); //-------------------------------------------------------------------------------------------//
            img.src = `imagens/${r}.png`;              // cria um objeto de imagem, carrega a imagem de dado correspondente e apende à div de dados //
            DIV_DADOS.appendChild(img);                //-------------------------------------------------------------------------------------------//
        }
        SAIDA.textContent = "Total: " + String(valorTot);
    }

    
})