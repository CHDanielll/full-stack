
const form = document.querySelector("form");
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
const inputEndereco = document.getElementById("endereco");
const listaMsg = document.querySelector(".lista-msg");

form.addEventListener("submit", function(event){
    event.preventDefault();

if (listaMsg){
    listaMsg.remove();
}

//validação do formulario
if (inputNome.value === "" || inputEmail.value === "" || inputTelefone.value === "" || inputEndereco.value === "") {
   alert("Digite Seus dados");
   return false;    
}


    // criando botao Excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent ="Excluir";
    btnExcluir.className = "btn-delete";

    // criar li
    const li = document.createElement("li");

    // Criando uma function para excluir os dados de cadastro
    btnExcluir.addEventListener("click", function(){
        const confirmar = confirm("Tem certeza que deseja excluir este cadastro?");
        
        if (confirmar){
            li.remove();
        }
        
    })

    // Cria os spans com as classes corretas
    const nomeSpan = document.createElement('span');
    nomeSpan.className = 'contato-nome';
    nomeSpan.textContent = inputNome.value;

    const emailSpan = document.createElement('span');
    emailSpan.className = 'contato-email';
    emailSpan.textContent = inputEmail.value;

    const telefoneSpan = document.createElement('span');
    telefoneSpan.className = 'contato-telefone';
    telefoneSpan.textContent = inputTelefone.value;

    const enderecoSpan = document.createElement('span');
    enderecoSpan.className = 'contato-endereco'; // Você pode criar um estilo para este também
    enderecoSpan.textContent = inputEndereco.value;

    // Adiciona os elementos ao 'li' e o 'li' à lista
    li.append(nomeSpan, emailSpan, telefoneSpan, enderecoSpan, btnExcluir);
    lista.append(li);
    //limpar oque ja foi escrito
    form.reset();
})
