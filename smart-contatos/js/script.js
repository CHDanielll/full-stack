
const form = document.querySelector("form");
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
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
if (inputNome.value == ""||inputNome.value == "" || inputNome.value == "") {
   alert("Digite Seus dados");
   return false;    
}

/*if (inputNome.value == "") {
   alert("Digite um Nome:");
   return false;    
}
if (inputNome.value == "") {
   alert("Digite um Nome:");
   return false;    
}*/


/*while(){
    inputNome=("")
    inputEmail=("")
    inputTelefone=("")
    alert("Digite algo ai")
    return false false;
}*/



    
    /*console.log("Nome:", inputNome.value);
    console.log("Email:",inputEmail.value);
    console.log("telefone:",inputTelefone.value);*/

    // criando botao Excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent ="Excluir";
    btnExcluir.className = "btn-delete";


    
    // criar li
    const li = document.createElement("li");

    // Criando uma function para excluir os dados de cadastro
    btnExcluir.addEventListener("click", function(){
        alert("teste")
    })


    li.innerHTML = `
    <span class="contato-nome">${inputNome.value}</span>
    <span class="contato-nome">${inputEmail.value}</span>
    <span class="contato-nome">${inputTelefone.value}</span>
    `;
    
    console.log(li)

    //append
    lista.append(li)

    //botao
    li.append(btnExcluir)

    //limpar oque ja foi escrito
    form.reset();
})




