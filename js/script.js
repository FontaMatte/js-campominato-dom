
let gridContainer = document.querySelector('.grid-container');
const playButton = document.querySelector('#play-button');
const level = document.querySelector('#level');
const restartButton = document.querySelector('#restart-button');
const youLose = document.querySelector('.lose');
const punteggio = document.querySelector('#punteggio');
let counter = 1; //conatore click effettuati

const numeriGenerati = [];

// richiamo la funzione che mi genera la grilgia
const newGrid = cellGeneratorEasy (); 

// utilizzo il playButton per resettare la griglia 
playButton.addEventListener('click',
    function() {

        gridContainer.innerHTML = '';

        // ripulisco la console  
        // console.clear();  

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

                    punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
                    counter = counter + 1;
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
                console.log('numero cliccato: ' + i);

                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');
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
                }
            }
        )
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let j = 1; j <= 16 ; j++) {

        let randomNumber = getRandomNumber(1, 100);

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 100);
        }

        numeriGenerati.push(randomNumber);

        console.log(numeriGenerati);
}


restartButton.addEventListener('click',
    function() {
        gridContainer.innerHTML = '';
        youLose.classList.add('d-none');
        cellGeneratorEasy();
        counter = 0;
        punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
    }
)


function getRandomNumber1(min, max, amount) {
    const numArr = [];
    for (let i = 1; i <= amount; i++) {
    numArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numArr;
}

// const random100 = getRandomNumber1(1,16,100);
// console.log(random100);

