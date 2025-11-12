/*Enunciado:
Crie um programa que peça um número e mostre uma mensagem 
dizendo se ele é positivo, negativo ou igual a zero.*/

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    document.write("Seu número é positivo.");
} 
else if (numero < 0) {
    document.write("Seu número é negativo.");
} 
else {
    document.write("Seu número é zero.");
}
