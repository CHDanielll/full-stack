
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
    listaMsg.remove(listaMsg);
}

//validação do formulario
/*
se o input for vazio, adicionar uma mensagem
*/
if (inputNome.value == ""||inputNome.value == "" || inputNome.value == "" || inputEndereco.value == "") {
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


    li.innerHTML = `
    <span class="contato-nome">${inputNome.value}</span>
    <span class="contato-nome">${inputEmail.value}</span>
    <span class="contato-nome">${inputTelefone.value}</span>
    <span class="contato-nome">${inputEndereco.value}</span>
    `;
    
    console.log(li)

    //append
    lista.append(li)

    //botao
    li.append(btnExcluir)

    //limpar oque ja foi escrito
    form.reset();
})




