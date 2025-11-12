let idade = Number(prompt("Digite sua idade"));

function votoS(){
    document.write ("<br>");
}
if (idade >= 13){
    document.write("quero nem comentar sobre")
}
if (idade >= 16){
    votoS();
    document.write("voce pode votar")


} else{
    votoS();
    document.write("voce nao pode votar")
}
