const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");


/*const inputTelefone = document.getElementById("nome", "email", "telefone");*/


function cadastrado(event){
    /*alert("Vc clicou em um botão");*/
    console.log(event);
    console.log(inputNome.value);
    console.log(inputEmail.value);
    console.log(inputTelefone.value);
    event.preventDefault();
}

