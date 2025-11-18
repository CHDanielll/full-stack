
const form = document.querySelector("form");
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");

form.addEventListener("submit", function(event){
    event.preventDefault();


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

    
    // criar li
    const li = document.createElement("li");

    li.innerHTML = `
    <span class="contato-nome">${inputNome.value}</span>
    <span class="contato-nome">${inputEmail.value}</span>
    <span class="contato-nome">${inputTelefone.value}</span>
    `;
    
    console.log(li)

    //append
    lista.append(li)

    //limpar oque ja foi escrito
    form.reset();
})



