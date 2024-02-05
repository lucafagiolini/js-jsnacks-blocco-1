// creo un array vuoto
alert('inserisci 6 numeri dispari per prcedere');
let numberList = [];

// chiedo per 6 volte all'utente di inserire un numero 
// e inserisco solo i numeri dispari nell'array

do {

    let number = parseInt(prompt('Inserisci un numero'));
    console.log(number);

    // controlliamo se l'utente ha inserito un numero
    if (isNaN(number)) {
        alert('Non hai inserito un numero');
    }

    // controlliamo se il numero inserito è dispari 
    if (number % 2 !== 0) {
        numberList.push(number);
        console.log('Il numero inserito è dispari');
    }

} while (numberList.length < 6)
console.log('I numeri inseriti sono: ' + numberList);


document.querySelector('#result').innerHTML = `<span class="display-1"> ${numberList} </span>`;