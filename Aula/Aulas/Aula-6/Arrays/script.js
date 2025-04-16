const FORM = document.getElementById("formulario");
const LISTA_TAREFAS = document.getElementById("tarefas");
let tarefas = [];

FORM.addEventListener("submit", (event) => {
    event.preventDefault();                                   // prevenção do comportamento padrão do submit
    LISTA_TAREFAS.textContent = "";                           // reseta o conteúdo da lista de tarefas (já que tudo fica salvo na lista)

    let tarefa = document.getElementById("tarefa").value;     // puxa o valor inserido pelo usuário no text field
    tarefas.push(tarefa);                                     // adiciona o valor na lista
    document.getElementById("tarefa").value = "";             // reseta o valor no text field (pra ficar bunitinho)

    tarefas.forEach((element) => {                            // loop forEach para adicionar os valores na lista de tarefas
        let li = document.createElement("li");                // cria um elemento no "cache" do navegador para ser exibido depois (ser adicionado como child)
        li.textContent = element;                             // define o texto do elemento como o elemento atual do array
        LISTA_TAREFAS.appendChild(li);                        // finalmente, adiciona o elemento à lista de tarefas, tornando-o visível
    })
})