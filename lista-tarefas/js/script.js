function adicionar() {
  let tarefa = document.getElementById("tarefa");
  let lista = document.getElementById("lista");

  let item = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let texto = document.createTextNode(tarefa.value);

  item.appendChild(checkbox);
  item.appendChild(texto);

  lista.appendChild(item);

  tarefa.value = "";
}
