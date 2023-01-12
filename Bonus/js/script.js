
let gridContainer = document.querySelector('.grid-container');
const playButton = document.querySelector('#play-button');
const level = document.querySelector('#level');
const restartButton = document.querySelector('#restart-button');
const youLose = document.querySelector('.lose');
const punteggio = document.querySelector('#punteggio');

let counter = 0; //conatore click effettuati

const numeriGenerati = []; // costante dove salvo l'array di numeri casuali generati dalla funzione getRandomNumber

// richiamo la funzione che mi genera la grilgia base
const newGrid = cellGeneratorEasy (); 

// utilizzo il playButton per resettare la griglia al livello selezionato
playButton.addEventListener('click',
    function() {

        gridContainer.innerHTML = '';

        if (level.value == 'easy') {  
        // richaimo la funzione per generare la nuova griglia  
            const easyLevel = cellGeneratorEasy();  
        }
        else if (level.value == 'medium') {  
            // richaimo la funzione per generare la nuova griglia  
            const mediumLevel = cellGeneratorMedium();  
        }
        else {
            const hardLevel = cellGeneratorHard();  
        }    
    }
)


// Dichiaro la funzione che genera la griglia "FACILE"
function cellGeneratorEasy () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 100; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell','easy-level');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {

                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');

                    counter = counter + 1;
                    punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
                    // counter = counter + 1;
                }

                for (let i = 0; i < numeriGenerati.length; i++) {
                    if (numeriGenerati[i] == this.innerText) {
                        gridCell.classList.add('bomb');
                        youLose.classList.remove('d-none');
                    }
                }

                if (counter == 84) {
                    alert('complimenti, hai vinto!!');
                }
            }
        )
    }
}

// Dichiaro la funzione che genera la griglia "MEDIA"
function cellGeneratorMedium () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 81; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell','medium-level');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {

                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');

                    counter = counter + 1;
                    punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
                }

                for (let i = 0; i < numeriGenerati.length; i++) {
                    if (numeriGenerati[i] == this.innerText) {
                        gridCell.classList.add('bomb');
                        youLose.classList.remove('d-none');
                    }
                }

                if (counter == 65) {
                    alert('complimenti, hai vinto!!');
                }
            }
        )
    }
}

// Dichiaro la funzione che genera la griglia "DIFFICILE"
function cellGeneratorHard () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 49; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell','hard-level');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {
                console.log('numero cliccato: ' + i);

                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');

                    counter = counter + 1;
                    punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
                }

                for (let i = 0; i < numeriGenerati.length; i++) {
                    if (numeriGenerati[i] == this.innerText) {
                        gridCell.classList.add('bomb');
                        youLose.classList.remove('d-none');
                    }
                }

                if (counter == 33) {
                    alert('complimenti, hai vinto!!');
                }
            }
        )
    }
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ciclo per generare i 16 numeri casuali delle bombe
for (let j = 1; j <= 16 ; j++) {

    let randomNumber = getRandomNumber(1, 49);

    if (level.value == 'easy') {

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 100);
        }
    }

    else if (level.value == 'medium') {  

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 81);
        }
    }

    else {

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 49);
        }
    }

    numeriGenerati.push(randomNumber);
}


// Bottone per resettare la partita
restartButton.addEventListener('click',
    function() {

        gridContainer.innerHTML = '';
        youLose.classList.add('d-none');

        if (level.value == 'easy') {

            cellGeneratorEasy();
        }

        else if (level.value == 'medium') {  

            cellGeneratorMedium();
        }

        else {
            cellGeneratorHard();
        }

        counter = 0;
        punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
    }
)


// function getRandomNumber1(min, max, amount) {
//     const numArr = [];
//     for (let i = 1; i <= amount; i++) {
//     let newNumber = (Math.floor(Math.random() * (max - min + 1)) + min);

//     while(numArr.includes(newNumber)){
//         newNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
//     }
//     numArr.push(newNumber);
//     }
//     return numArr;
// }

// const random100 = getRandomNumber1(1,16,100);
// console.log(random100);

