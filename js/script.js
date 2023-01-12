console.log('HI, I am java and I am working fine'); //Verifica javascript funzioni correttamente;

// Creazione Array per contenere i num. generati randomicamente e assegnati come valore bomba:

/*Lavora su funzione js: 169 */ let easyBombs = []; // 16 bombe generate su 49 num - modalità facilce 
/*Lavora su funzione js: 199 */ let mediumBombs = []; // 16 bombe generate su 81 num - modalità media
/*Lavora su funzione js: 228 */ let hardBombs = []; // 16 bombe generate su 100 num - modalità difficile


// Manipolato il dom per selezionare il button play dell'HTML:

const play = document.getElementById('play');


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

                    // console.log('ArrayNumGenerati:', numGenerati)
                    // console.log('numero selezionat:', newCell.innerHTML)
                    // console.log('numero selezionato', allNumbers)

                    // // SE nell'array numeri generati è incluso il valore i
                    // if (numGenerati.includes(i)) {
                    
                    // this.classList.remove('clicked');// RIMUOVI la classe clicked (background aqua)
                    // this.classList.add('bombed');// AGGIUNGI la classe bombed (background red)
                    // alert('You lost the game');
                    // gridContainer.classList.add('hidden'); //Per aggiungere l'elemento display:none
            
            
            
                    // } else {  // ALTRIMENTI
            
                    // this.classList.add('clicked')
                    // let operation = [];
                    // operation.push('0');
                    // console.log('Numero di iterazioni:', operation.length)

                    // oppure

                    result(i)
                                
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


// A))) funzione per la crezione di bombe in modalità EASY

//Logica per la creazione di una funzione che:

function easyBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 100;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 100

    let randomNum = getRandomNumber(1,100);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(numGenerati.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 100); // generare un numero random compreso tra 1 e 100;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    numGenerati.push(randomNum);

    console.log('Numero generato:', randomNum,)
    console.log('Array numeri generati', numGenerati)

    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array numGenerati; riga 5
}

}

// B))) funzione per la crezione di bombe in modalità MEDIUM


function mediumBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 100;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 100

    let randomNum = getRandomNumber(1,81);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(numGenerati.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 81); // generare un numero random compreso tra 1 e 100;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    numGenerati.push(randomNum);

    console.log('Numero generato:', randomNum,)
    console.log('Array numeri generati', numGenerati)

    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array numGenerati; riga 5
}

}

// C))) funzione per la crezione di bombe in modalità HARD

function hardBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 100;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 100

    let randomNum = getRandomNumber(1,49);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(numGenerati.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 49); // generare un numero random compreso tra 1 e 100;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    numGenerati.push(randomNum);

    console.log('Numero generato:', randomNum,)
    console.log('Array numeri generati', numGenerati)

    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array numGenerati; riga 5
}

}



//____________________________________________________________________
// Creazione di una logica di controllo: selezionato un elemento bomba

function result(num) { // num è l'argomento - non ha nessun valore al momento --> avrà un valore quando, applicata la funzione, sostituiamo num con un valore


    if (numGenerati.includes(num)) { // il valore che verrà assegnato a num verrà sostituito qui
                    
        this.classList.remove('clicked');// RIMUOVI la classe clicked (background aqua)
        this.classList.add('bombed');// AGGIUNGI la classe bombed (background red)
        alert('You lost the game');
        gridContainer.classList.add('hidden'); //Per aggiungere l'elemento display:none



    } else {  // ALTRIMENTI

        this.classList.add('clicked')
        let operation = [];
        operation.push('0');
        console.log('Numero di iterazioni:', operation.length)
                    
    }
}
