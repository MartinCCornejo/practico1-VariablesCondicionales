// EJERCICIO 9
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen 

let frase = prompt("Escriba una palabra o frase y nombraremos las vocales que contenga");
let vocales = "";

for (let i in frase){
    let caracteres = frase[i].toLowerCase();

    if (caracteres == 'a' || caracteres == 'e' || caracteres == 'i' || caracteres == 'o' || caracteres == 'u') {
        vocales += caracteres;
    }
}

document.write("Palabra o frase: " + frase + "<br>" + "Vocales: " + vocales)