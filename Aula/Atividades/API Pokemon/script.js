const NOME = document.querySelector(".nome");
const TIPO = document.querySelector(".tipo");
const IMAGEM = document.querySelector(".imagem");
const REROLL = document.querySelector(".reroll");

REROLL.addEventListener("click", async function(){
    NOME.innerHTML = "";
    TIPO.innerHTML = "";
    IMAGEM.innerHTML = "";
    const URL = "https://pokeapi.co/api/v2/pokemon/" + String(Math.floor(Math.random() * 1000) + 1);
    fetch(URL)
        .then(response => {
            if(!response.ok) {
                print("bolas");
            } else {
                return response.json();
            }
        })
        .then(data => {
            const IMG = document.createElement("img");
            IMG.src = data.sprites.front_default;
            IMAGEM.appendChild(IMG);
            IMG.style.width = "100%";

            const BOLA = document.createElement("img");
            BOLA.src = `icons/balls/${Math.floor(Math.random() * 38) + 1}.png`;
            NOME.appendChild(BOLA);
            NOME.innerHTML += data.name.toUpperCase();

            let tipos = "";
            for (let i = 0; i < data.types.length; i++) {
                const element = data.types[i].type.name;

                tipos = `<div class="divTipo"><img class="icon" src="./icons/${element}.png"></img><p>${element}</p></div>`
                TIPO.innerHTML += tipos + "<br>";
            }

            console.log(data)
        })
})

window.addEventListener("load", REROLL.click())