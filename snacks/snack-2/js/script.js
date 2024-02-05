// chiediamo all'utente di inserire un numero per 10 volte

// inizializing l'array vuoto prima del cliclo
let numberList = [];

// creiamo un ciclo do-while perché volgiamo che prima l'utente inserisca dei numeri ripetutamente
//  e solo dopo che il numero è stato inserito vogliamo controllare se nell'array ci sono 10 numeri
do {

    let number = parseInt(prompt('Inserisci un numero'));
    console.log(number);


    // controlliamo se l'utente ha inserito un numero
    if (isNaN(number)) {
        alert('Non hai inserito un numero');
    }
    else {
        numberList.push(number);
    }
}
while (numberList.length < 10)
console.log('I numeri inseriti sono: ' + numberList);

// calcoliamo la somma dei numeri inseriti allinterno dell'array
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}
console.log('La somma dei numeri inseriti è: ' + sum);


// visualizziamo il risultato in pagina 
const result = sum

document.querySelector('#result').innerHTML = `<span class="display-1"> ${result} </span>`;






