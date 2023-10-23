// EJERCICIO 11
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt('Escriba un número'));
let divisiblePor = '';
let divisible = false;
let mensaje = "El número " + numero + " es divisible por " + divisiblePor;

if (numero % 2 == 0) {
    divisible = true;
    divisiblePor+= "2, ";
} if (numero % 3 == 0) {
    divisible = true;
    divisiblePor+= "3, ";
} if (numero % 5 == 0) {
    divisible = true;
    divisiblePor+= "5 y ";
} if (numero % 7 == 0) {
    divisible = true;
    divisiblePor+= "7  ";
}

if (divisible == true) {
    document.write(mensaje + divisiblePor.slice(0,-2));
} else {
    document.write('El número ' + numero + ' NO es divisible ni por 2, 3, 5 o 7');
}

