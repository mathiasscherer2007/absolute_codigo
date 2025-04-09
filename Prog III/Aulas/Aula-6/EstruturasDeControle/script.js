const CAMPO_IDADE = document.getElementById("idade");
CAMPO_IDADE.addEventListener("input", (event) => {
    const IDADE = parseInt(event.target.value);

    let mensagem = "";

    if (!isNaN(IDADE)) {
        mensagem = (IDADE >= 18) ? "É maior de idade." : "É menor de idade.";    
    } else {
        mensagem = "Valor inválido!";
    }
    
    document.getElementById("resposta_idade").textContent = mensagem;
});

const CALCULAR = document.getElementById("calcular");
const TABUADA = document.getElementById("tabuada");
const INP_VALOR = document.getElementById("valor");

CALCULAR.addEventListener("click", () => {
    let valor = parseInt(INP_VALOR.value);
    let mensagem = "";

    TABUADA.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        mensagem = `${i} * ${valor} = ${(i*valor)}`;

        let li = document.createElement("li");
        li.textContent = mensagem;
        (i % 2 === 0) ? li.classList.add("blue") : li.classList.add("red");

        TABUADA.appendChild(li);
    }
});