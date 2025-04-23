const FORMULARIO = document.getElementById("form");
let pagAtual = 0;

window.addEventListener('load',function(){
    pagAtual = this.localStorage.getItem("pagAtual");
    if(localStorage.getItem("pagAtual")){
        this.localStorage.setItem("pagAtual", pagAtual++)
        console.log("PINGOU")
    }else{
        this.localStorage.setItem("pagAtual", 1);
        console.log("PINGOU DOIS")
    }
    pagAtual = this.localStorage.getItem("pagAtual");
})

ENVIAR.addEventListener("submit", function(event){
    event.preventDefault();

    localStorage.removeItem("pagAtual"); 
    localStorage.setItem("pagAtual", String(pagAtual++)); 
})