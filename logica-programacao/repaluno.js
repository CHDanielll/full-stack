/*🍎 Exercício: Verificar se o aluno foi aprovado

Enunciado:
Crie um programa que peça a nota de um aluno (de 0 a 10) e mostre:

"Aprovado" se a nota for maior ou igual a 6

"Recuperação" se a nota for entre 4 e 5.9

"Reprovado" se a nota for menor que 4*/

/*Enunciado:
Crie um programa que peça um número e mostre uma mensagem 
dizendo se ele é positivo, negativo ou igual a zero.*/

let media = Number(prompt("Digite um número:"));

if (media >= 6) {
    document.write("voce está aprovado.");
} 
else if (media >= 4 && media < 6){
    document.write("Recuperacão.");
} 
else {
    document.write("Reprovado");
}
