/*
    vamos criar um programa, onde o usuario executa uma função
    e dentro dessa fuçao eiste uma frase.
    pode pular linhas.
*/
function frasesA (frases){
    document.write(frases)
}

function pularLinha(){
    document.write("<br>");
}

frasesA("Lorem ipsum dolor sit amet"); 
pularLinha();
frasesA("consectetur adipisicing elit.");
pularLinha();
frasesA("Accusamus exercitationem facilis ducimus");


