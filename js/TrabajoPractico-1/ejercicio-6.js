// EJERICICIO 6 
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt("Escriba el primer número"));
let numero2 = parseInt(prompt("Escriba el segundo número"));

if (numero1 > numero2) {
    document.write("El " + numero1 + " es el número mas grande");
} else if (numero2 > numero1) {
    document.write("El " + numero2 + " es el número mas grande");
} else{
    document.write('Los números son iguales');
}