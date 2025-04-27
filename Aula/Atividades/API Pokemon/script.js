const URL = "https://pokeapi.co/api/v2/pokemon/" + String(Math.floor(Math.random() * 250) + 1);
const NOME = document.querySelector(".nome");
const TIPO = document.querySelector(".tipo");
const IMAGEM = document.querySelector(".imagem");

fetch(URL)
    .then(response => {
        if(!response.ok) {
            print("bolas");
        } else {
            return response.json();
        }
    })
    .then(data => {
        NOME.textContent = data.name.toUpperCase();

        let tipos = "";
        for (let i = 0; i < data.types.length; i++) {
            const element = data.types[i].type.name;
            tipos += (i === data.types.length - 1) ? element : element + " - ";
        }
        TIPO.textContent = tipos;

        const IMG = document.createElement("img");
        IMG.src = data.sprites.front_default;
        IMAGEM.appendChild(IMG);
        IMG.style.width = "100%";

        console.log(data)
    })