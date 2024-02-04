document.querySelector('#run-btn').addEventListener('click', runProgram)
function runProgram() {

    console.log('The button was clicked');

    let firstWord = document.querySelector('#first-word').value;
    console.log(firstWord);

    let secondWord = document.querySelector('#second-word').value;
    console.log(secondWord);

    const firstWordLength = firstWord.length;
    console.log(firstWordLength);

    const secondWordLength = secondWord.length;
    console.log(secondWordLength);

    if (firstWordLength > secondWordLength) {
        document.querySelector('#result-2').innerText = firstWord;

    }

    else if (firstWordLength < secondWordLength) {
        document.querySelector('#result-1').innerText = firstWord;

    }

    if (secondWordLength > firstWordLength) {
        document.querySelector('#result-2').innerText = secondWord;

    }

    else if (secondWordLength < firstWordLength) {
        document.querySelector('#result-1').innerText = secondWord;

    }

    else if (firstWordLength === secondWordLength) {
        document.querySelector('#result-1').innerText = firstWord;
        document.querySelector('#result-2').innerText = secondWord;
    }
}