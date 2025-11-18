
const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");

form.addEventListener("submit", function(event){
    event.preventDefault();


//validação do formulario
/*
se o input for vazio, adicionar uma mensagem
*/
if (inputNome.value == "") {
   alert("Digite um Nome:");
   return false;    
}



    console.log("Olá mundo");
    console.log("Nome", inputNome.value);
    console.log("Email",inputEmail.value);
    console.log("telefone",inputTelefone.value);
})


