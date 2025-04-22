// Gerador de Números Aleatórios

// let numAle = Math.random();
// console.log(numAle); // retorna um número decimal entre 0 e 1;

// let d6 = Math.floor(Math.random() * 6) + 1;
// console.log(d6);

// let d20 = Math.floor(Math.random() * 20) + 1;
// console.log(d20);

const botao = document.getElementById("botao");
const texto = document.getElementById("numero");
const entradaMax = document.getElementById("max");
const entradaMin = document.getElementById("min");

botao.addEventListener("click", function(){
    let max = Number(entradaMax.value);
    let min = Number(entradaMin.value);

    if(max <= 0 || max == null || max == NaN || max < min){
        texto.style.color = "rgb(210, 0, 0)";
        texto.textContent = "defina um val. máximo válido";
        setTimeout(() => {
            texto.style.color = "rgb(255, 255, 255)";
            texto.textContent = "-";
        }, 2000);
    } else if(min < 0){
        texto.style.color = "rgb(210, 0, 0)";
        texto.textContent = "defina um val. mínimo válido";
        setTimeout(() => {
            texto.style.color = "rgb(255, 255, 255)";
            texto.textContent = "-";
        }, 2000);
    } else{
        max += 1;
        texto.style.color = "rgb(255, 255, 255)";
        let numAle = Math.floor(Math.random() * (max - min)) + min;
        texto.textContent = numAle;
    }
})