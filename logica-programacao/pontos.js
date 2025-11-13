/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pesando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/
const vitoria = Number(prompt("Quantos jogos seu time venceu?"));
const empates = Number(prompt("Quantos empates rolou?"));

const pontos = (vitoria * 3) + empates;

function pularLinha (){
    document.write("<br>");
    
}

function mostra(mensagem){
    document.write(mensagem + pontos)
}

if (pontos > 10){
    pularLinha();
    mostra("voces está indo bem jao ");

}else if(pontos < 5){
    pularLinha();
    mostra("Seu time está muito mal na fita em jao ");
}else {
    mostra("Seu time está na média. ");
}

