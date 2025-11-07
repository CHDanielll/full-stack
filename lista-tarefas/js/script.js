// Função em JavaScript
function adicionar() {
    // Variaveis
    let tarefa = docgitument.getElementById("tarefa");
    let lista = document.getElementById("lista");
    let checkbox = document.getElementById("checkbox")
    
    let item = document.createElement("checkbox")
    let item = document.createElement("li");
    item.textContent = tarefa.value;
    item.textContent = checkbox.value;

    lista.appendChild(item);
}
    