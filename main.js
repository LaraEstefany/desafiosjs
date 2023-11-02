const numerosBaseUmADez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosBaseAleatorio = [20, 50, 1, 100, 2, 6, 5, 3, 4, 200, -20, -1, -200];
const fraseBase = `O rato roeu a roupa do rei de Roma`;

/* 1. Print all even numbers from 0 – 10 */

function retornaNumerosParesDeZeroALimite(limite) {
    const listaNumeros = [];
    const numerosPares = [];

    for (let i = 0; i < limite + 1; i++) {
        listaNumeros.push(i);
    }

    for (const numero of listaNumeros) {
        if (numero % 2 == 0) numerosPares.push(numero);
    }

    return numerosPares;
}

/* 2. Print a table containing multiplication tables */

function tabuada(multiplicador) {
    const tabuadaCompleta = [];

    for (const numero of numerosBaseUmADez) {
        let frase = `${numero} x ${multiplicador} = ${numero * multiplicador}`;
        tabuadaCompleta.push(frase);
    }

    return tabuadaCompleta;
}

/* 
3. Create a length converter function that convert from kilometers to miles. The function should include the input in kilometers and return the answer in miles.
*/

const convensaoMatematicaKmParaMilhas = 1.609;

function conversorKmParaMilhas(km) {
    const milhas = km / convensaoMatematicaKmParaMilhas;
    return `${km} km são ${milhas.toFixed(4)} milhas.`;
}

/*
4. Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.
*/

function somaArrayDeNumeros(numeroInicial, numeroFinal) {
    const listaNumeros = [];

    for (let i = numeroInicial; i < numeroFinal + 1; i++) {
        listaNumeros.push(i);
    }

    const valorInicial = 0;
    const total = listaNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial);

    return total;
}

/* 5. Create a function that reverses an array */

const reverteArray = lista => lista.reverse();

/* 6. Sort an array from lowest to highest */

function retornaArrayEmOrdemCrescente(lista) {
    lista.sort((a, b) => a - b);
    return lista;
}

/* 7. Create a function that filters out negative numbers */

function filtraNumerosNegativosDeArray(lista) {
    const listaNova = []

    lista.forEach(e => {
        if (e >= 0) listaNova.push(e);
    });

    return listaNova;
}

/* 8. Remove the spaces found in a string */

const regexPatternParaEspacos = /\s/g
const removeEspacosDeStrings = frase => frase.replace(regexPatternParaEspacos, "");

/* 9. Return a Boolean if a number is divisible by 10 */

const retornaSeNumeroForDivisivelPorDez = num => num % 10 == 0;

/*
10. Return the number of vowels in a string
Create a function that'll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.
*/

function contaLetrasDeString(frase, letra) {
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;
    let inicio = frase.indexOf(`${letra}`);

    while (inicio != -1) {
        contador++;
        inicio = frase.indexOf(`${letra}`, inicio + 1);
    }

    return contador;
}

function contaQuantasVogaisTemAString(frase) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let total = 0;
    for (const vogal of vogais) {
        total = total + contaLetrasDeString(frase, vogal);
    }
    if (total == 0) total = 'A frase não possui vogais';
    return total;
}

console.log(retornaNumerosParesDeZeroALimite(10));
console.log(tabuada(7));
console.log(conversorKmParaMilhas(1));
console.log(somaArrayDeNumeros(10, 200));
console.log(reverteArray(numerosBaseUmADez));
console.log(retornaArrayEmOrdemCrescente(numerosBaseAleatorio));
console.log(filtraNumerosNegativosDeArray(numerosBaseAleatorio));
console.log(removeEspacosDeStrings(fraseBase));
console.log(retornaSeNumeroForDivisivelPorDez(5));
console.log(contaQuantasVogaisTemAString(fraseBase));