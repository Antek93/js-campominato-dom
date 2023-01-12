
console.log('HI, I am java and I am working fine'); //Verifica javascript funzioni correttamente;

// Creazione Array per contenere i num. generati randomicamente e assegnati come valore bomba:

/*Lavora su funzione js: 169 */ let easyBombs = []; // 16 bombe generate su 49 num - modalità facilce 
/*Lavora su funzione js: 199 */ let mediumBombs = []; // 16 bombe generate su 81 num - modalità media
/*Lavora su funzione js: 228 */ let hardBombs = []; // 16 bombe generate su 100 num - modalità difficile


// Manipolato il dom per selezionare il button play dell'HTML:

const play = document.getElementById('play');

// Manipolato il dom per selezioanare il box immagini:

const imgBox = document.getElementById('img-box');

// Aggiunta la classe hidden per nascondere la scritta sconfitta:

imgBox.classList.add('hidden');

// Manipolato il dom per selezionare il div Score

const score = document.getElementById('score-box');

// Aggiunta la classe hidden per nascondere la scritta sconfitta:

score.classList.add('hidden');

// Manipolato il dom per selezioanare il box layer invisibile:

const layer = document.getElementById('layerInvisibile')

// Aggiunta la classe hidden per nascondere il box layer invisibile:

layer.classList.add('hidden');

// Manipolato il dom per selezioanare il box layer invisibile:

const scored = document.getElementById('scored')

// Aggiunta la classe hidden per nascondere il box layer invisibile:

scored.classList.add('hidden');

//__________________________________// Creazione logiche: //___________________________________//

play.addEventListener('click', //Se clicco sul tasto play
    function () {
        
       score.classList.remove('hidden');
       scored.classList.remove('hidden');
       let selection = document.getElementById('difficulty').value; //Ottengo il valore di selection: difficulty: easy/medium/hard - selezionato dall'utente.
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

                    if (easyBombs.includes(i)) {
                        
                        
                        this.classList.add('bombed'); // AGGIUNGI la classe bombed (background red)
                        alert('You lost the game');
                        imgBox.classList.remove('hidden'); //Per mostrare la scritta YOU LOST
                        layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click            
                
                
                
                    } else {  // ALTRIMENTI
                
                        this.classList.add('clicked')
                        operation.push('0');
                        console.log('Numero di iterazioni:', operation.length, operation)
                        score.innerHTML = operation.length;

                        if (operation.length == 84) { // EASY MODE = Totale numeri - totale bombe = 100 - 16 - punteggio max: 84

                            alert('You win')
                            layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click                   }
    
                
                        }
                                    
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

                if (mediumBombs.includes(i)) {
                        
                        
                    this.classList.add('bombed'); // AGGIUNGI la classe bombed (background red)
                    alert('You lost the game');
                    imgBox.classList.remove('hidden'); //Per mostrare la scritta YOU LOST
                    layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click            
            
            
                } else {  // ALTRIMENTI
            
                    this.classList.add('clicked')
                    operation.push('0');
                    console.log('Numero di iterazioni:', operation.length, operation)
                    score.innerHTML = operation.length;

                    if (operation.length == 65 ) { // MEDIUM MODE = Totale numeri - totale bombe = 81 -16 - punteggio max: 65

                        alert('You win')
                        layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click
                    }
                                
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

                    if (hardBombs.includes(i)) {
                        
                        
                        this.classList.add('bombed'); // AGGIUNGI la classe bombed (background red)
                        alert('You lost the game');
                        imgBox.classList.remove('hidden'); //Per mostrare la scritta YOU LOST
                        layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click
                                  
                
                
                
                    } else {  // ALTRIMENTI
                
                        this.classList.add('clicked')
                        operation.push('0');
                        console.log('Numero di iterazioni:', operation.length, operation)
                        score.innerHTML = operation.length;

                        if (operation.length == 33) { // HARD MODE = Totale numeri - totale bombe = 49 - 16 - punteggio max: 33

                            alert('You win')
                            layer.classList.remove('hidden'); //Per mostrare uno strato invisibile che blocca la griglia dai click

    
                       }
                                    
                    }                              

                }

                         
            );
       }
       }

    }
);


//__________________________________// FUNZIONI //_______________________________//

// Logica per generare un numero random compreso tra min e max 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// A))) funzione per la crezione di bombe in modalità EASY

//Logica per la creazione di una funzione che:

function easyBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 100;

    for (let i = 1; i <= 16; i++) {

    // Crea una variabile per generare numeri casuali compresi tra 1 e 100

    let randomNum = getRandomNumber(1,100);
    // Crea logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(easyBombs.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 100); // generare un numero random compreso tra 1 e 100;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    easyBombs.push(randomNum);

    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array easyBombs;
    }

}

let easybombing = easyBombsGenerator(); //CREATA VARIABILE easybombing per attivare la funzione easyBombsGenerator
console.log('Bombe per mod EASY', easyBombs) // STAMPA IN CONSOLE LE BOMBE COMPRESE TRA 1-100

// B))) funzione per la crezione di bombe in modalità MEDIUM

//Logica per la creazione di una funzione che:

function mediumBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 81;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 81

    let randomNum = getRandomNumber(1,81);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(mediumBombs.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 81); // generare un numero random compreso tra 1 e 81;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    mediumBombs.push(randomNum);


    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array numGenerati;
}

}

let mediumbombing = mediumBombsGenerator(); //CREATA VARIABILE mediumbombing per attivare la funzione mediumBombsGenerator
console.log('Bombe per mod MEDIUM', mediumBombs) // STAMPA IN CONSOLE LE BOMBE COMPRESE TRA 1-81

// C))) funzione per la crezione di bombe in modalità HARD

//Logica per la creazione di una funzione che:

function hardBombsGenerator() {

    // Crea un ciclo per operare 16 volte: la creazione di un numero randomico compreso tra 1 e 49;

    for (let i = 1; i <= 16; i++) {

    //Crea una variabile per generare numeri casuali compresi tra 1 e 49

    let randomNum = getRandomNumber(1,49);

    // Creare logica che rigenera il calcolo randomico se un numero generato è già presente nell'array

    while(hardBombs.includes(randomNum)){ // while ha funzione di controllo in stile IF = fintanto che (la condizione tra parentesi) è reale, continua a:
        randomNum = getRandomNumber(1, 49); // generare un numero random compreso tra 1 e 49;
    }

    // Spingere i numeri creati (e mai ripetuti) nell'array
    hardBombs.push(randomNum);


    // return xxx; //Return non viene specificato perché la funzione colloca direttamente i numeri generati nell'Array numGenerati;
}

}

let hardbombing = hardBombsGenerator(); //CREATA VARIABILE hardbombing per attivare la funzione hardBombsGenerator
console.log('Bombe per mod HARD', hardBombs); //STAMPA IN CONSOLE LE BOMBE COMPRESE TRA 1 e 49

// SCORE BOX

let operation = [];