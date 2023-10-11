const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaNumerosDois = [20, 50, 1, 100, 2, 6, 5, 3, 4, 200, -20, -1, -200];
const frase = `O rato roeu a roupa do rei de Roma`;

/* 1. Print all even numbers from 0 – 10 */

function numerosPares(num) {
    const listaNumeros = [];
    const listaNova = [];

    for (let i = 0; i < num + 1; i++) {
        listaNumeros.push(i);
    }

    for (const numero of listaNumeros) {
        if (numero % 2 == 0) listaNova.push(numero);
    }

    console.log(listaNova);
}

/* 2. Print a table containing multiplication tables */

function tabuada(num) {
    const listaNova = [];

    for (const numero of listaNumeros) {
        let frase = `${numero} x ${num} = ${numero * num}`;
        listaNova.push(frase);
    }

    console.log(listaNova);
}

/* 
3. Create a length converter function that convert from kilometers to miles. The function should include the input in kilometers and return the answer in miles.
*/

function conversorKm(km) {
    const conta = km / 1.609;
    console.log(`${km} km são ${conta.toFixed(4)} milhas.`);
}

/*
4. Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.
*/

function soma(numeroInicial, numeroFinal) {
    const listaNumeros = [];

    for (let i = numeroInicial; i < numeroFinal + 1; i++) {
        listaNumeros.push(i);
    }

    const valorInicial = 0;
    const total = listaNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial);

    console.log(total);
}

/* 5. Create a function that reverses an array */

const reverte = lista => console.log(lista.reverse());

/* 6. Sort an array from lowest to highest */

function compara(lista) {
    lista.sort((a, b) => a - b);
    console.log(lista);
}

/* 7. Create a function that filters out negative numbers */

function retiraNegativos(lista) {
    const listaNova = []
    for (const numero of lista) {
        if (numero >= 0) listaNova.push(numero);
    }
    console.log(listaNova);
}

/* 8. Remove the spaces found in a string */

const removeEspaço = frase => console.log(frase.split(' ').join(''));

/* 9. Return a Boolean if a number is divisible by 10 */

const divisivelPorDez = num => console.log(num % 10 == 0);

/*
10. Return the number of vowels in a string
Create a function that'll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.
*/

function contaLetras(frase, letra) {
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

function contaVogais(frase) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let total = 0;
    for (const vogal of vogais) {
        total = total + contaLetras(frase, vogal);
    }
    console.log(total);
}

numerosPares(10);
tabuada(7);
conversorKm(1);
soma(10, 200);
reverte(listaNumeros);
compara(listaNumerosDois);
retiraNegativos(listaNumerosDois);
removeEspaço(frase);
divisivelPorDez(5);
contaVogais(frase);