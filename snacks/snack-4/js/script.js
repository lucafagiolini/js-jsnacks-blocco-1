// chidiamo all'utente di inserire un numero di 4 cifre

// inizializing l'array vuoto prima del cliclo

let userNumber = parseInt(prompt('Inserisci un numero di 4 cifre'));
console.log(userNumber);

// controlliamo se l'utente ha inserito un numero di quattro cifre
do {
    if (isNaN(userNumber) || userNumber < 1000 || userNumber > 9999) {
        alert('Non hai inserito un numero di 4 cifre');
        userNumber = parseInt(prompt('Inserisci un numero di 4 cifre'));
    }
}

while (isNaN(userNumber) || userNumber < 1000 || userNumber > 9999)

// trasformiamo il numero inserito dall'utente in una stringa
let userNumberString = userNumber.toString();
console.log(userNumberString);


// calcoliamo la somma delle cifre del numero inserito
let result = 0;
for (let i = 0; i < userNumberString.length; i++) {
    result += parseInt(userNumberString[i]);
}

// visualizziamo il risultato in pagina

document.querySelector('#result').innerHTML = `<span class="display-1"> ${result} </span>`;