// EJERCICIO 7 
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("Escriba el primer número"));
let numero2 = parseInt(prompt("Escriba el segundo número"));
let numero3 = parseInt(prompt("Escriba el tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write("El " + numero1 + " es el número más grande");
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("El " + numero2 + " es el número más grande");
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write("El " + numero3 + " es el número más grande");
} else{
    document.write("Hay dos o tres números iguales");
}
