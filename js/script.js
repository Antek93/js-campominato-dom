console.log('HI, I am java and I am working fine'); //Verifica javascript funzioni correttamente;

// Creazione Array per contenere i num. generati

let numGenerati = [];

const play = document.getElementById('play'); // Manipolato il dom per selezionare il button play dell'HTML


play.addEventListener('click', //Se clicco sul tasto play
    function () {

       let selection = document.getElementById('difficulty').value; //Ottengo il valore di selection: difficulty: easy/medium/hard
       const gridContainer = document.getElementById('grid-container'); // Selezione il grid-container nel DOM


       if (selection == 'A') {  //SE L'UTENTE HA SELEZIONATO OPZIONE EASY

            for (let i =+ 1; i < 101; i++) { //Creo un ciclo per eseguire 100 volte:

                const newCell = document.createElement('div'); // Per creare un elemento DIV
                newCell.classList.add('cell'); // Per aggiungere la classe cell al DIV
                gridContainer.append(newCell); // Per esportare il DIV creato nel grid-container
                gridContainer.classList.remove('hidden'); //Per rimuovere l'elemento display:none
                play.classList.add('hidden'); //Per rimuovere play dopo averci cliccato la prima volta

                newCell.classList.add('easy');

                const allNumbers = [i]; //Per ogni ripetizione del ciclo, allNumbers assume un valore progressivo ['1','2','3'...ecc]
                newCell.innerHTML += allNumbers; // Allnumberse viene inserito all'interno di newCell (stilizzato su css)

                newCell.addEventListener('click', //Quando clicco sul div creato (newCell)
                
                function() {

                    console.log('Clicked') //in console compare la voce clicked come verifica

                    console.log('Numero della casella', allNumbers) // in console compare il numero della casella selzionata


                    if (this.classList.contains('clicked')) { //SE la casella selezioanta CONTIENE la classe CLICKED:
                        
                        this.classList.remove('clicked') // RIMUOVI la classe clicked

                    } else {                             // ALTRIMENTI

                        this.classList.add('clicked')    // AGGIUNGI la classe clicked
                        
                    }

            
                }
                );

        }

       } else if (selection == 'B') { //SE L'UTENTE HA SELEZIONATO OPZIONE MEDIUM

        for (let i =+ 1; i < 82; i++) {

            const newCell = document.createElement('div'); // Per creare un elemento DIV
            newCell.classList.add('cell'); // Per aggiungere la classe cell al DIV
            gridContainer.append(newCell); // Per esportare il DIV creato nel grid-container
            gridContainer.classList.remove('hidden'); //Per rimuovere l'elemento display:none
            play.classList.add('hidden'); //Per rimuovere play dopo averci cliccato la prima volta

            newCell.classList.add('medium');

            const allNumbers = [i]; //Per ogni ripetizione del ciclo, allNumbers assume un valore progressivo ['1','2','3'...ecc]
            newCell.innerHTML += allNumbers; // Allnumberse viene inserito all'interno di newCell (stilizzato su css)

            newCell.addEventListener('click', //Quando clicco sul div creato (newCell)
            
            function() {

                console.log('Clicked') //in console compare la voce clicked come verifica

                console.log('Numero della casella', allNumbers) // in console compare il numero della casella selzionata


                if (this.classList.contains('clicked')) { //SE la casella selezioanta CONTIENE la classe CLICKED:
                    
                    this.classList.remove('clicked') // RIMUOVI la classe clicked

                } else {                         

                    this.classList.add('clicked')    // AGGIUNGI la classe clicked
                    
                }

          
            }
            );

        }

       } else { // ALTRIMENTI //SE L'UTENTE HA SELEZIONATO OPZIONE HARD

        for (let i =+ 1; i < 50; i++) {

            const newCell = document.createElement('div'); // Per creare un elemento DIV
            newCell.classList.add('cell'); // Per aggiungere la classe cell al DIV
            gridContainer.append(newCell); // Per esportare il DIV creato nel grid-container
            gridContainer.classList.remove('hidden'); //Per rimuovere l'elemento display:none
            play.classList.add('hidden'); //Per rimuovere play dopo averci cliccato la prima volta

            newCell.classList.add('hard');

            const allNumbers = [i]; //Per ogni ripetizione del ciclo, allNumbers assume un valore progressivo ['1','2','3'...ecc]
            newCell.innerHTML += allNumbers; // Allnumberse viene inserito all'interno di newCell (stilizzato su css)

            newCell.addEventListener('click', //Quando clicco sul div creato (newCell)
            
            function() {

                console.log('Clicked') //in console compare la voce clicked come verifica

                console.log('Numero della casella', allNumbers) // in console compare il numero della casella selzionata


                if (this.classList.contains('clicked')) { //SE la casella selezioanta CONTIENE la classe CLICKED:
                    
                    this.classList.remove('clicked') // RIMUOVI la classe clicked

                } else {                             // ALTRIMENTI

                    this.classList.add('clicked')    // AGGIUNGI la classe clicked
                    
                }

          
            }
            );
       }
       }

    }
);


// FUNZIONI

// Logica per generare un numero random compreso tra min e max 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Logica per la creazione di una funzione che:

function bombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 100;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 100

    let randomNum = getRandomNumber(1,100);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(numGenerati.includes(randomNum)){
        randomNum = getRandomNumber(1, 100);
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    numGenerati.push(randomNum);

    console.log('Numero generato:', randomNum,)
    console.log('Array numeri generati', numGenerati)

    

}

}

//Richiamo della funzione bombsGenerator per verifica funzionamento

let x = bombsGenerator();
console.log('bombs:', x);