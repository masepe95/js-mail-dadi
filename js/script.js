console.log('JS OK') 

//! MAIL VALIDATOR 

//RECUPERO BOTTONE DAL DOM
const loginButton = document.getElementById('button');
//RECUPERO CAMPO DI INPUT
const emailInput = document.getElementById("email");

//CREO ARRAY CON LISTA DI MAIL
const emailList = ["marco@sepe.it", "sepe@boolean.com", "sepemarco@gmail.com", "forzanapoli@gmail.com"];

// AL CLICK DEL BOTTONE
loginButton.addEventListener("click",
    function(){
        // RECUPERO IL VALUE DELL'INPUT
        const valueEmail = emailInput.value;
        // COSTITUSICO VARIABILE D'APPOGGIO
        let correctEmail = false;

        //CONTROLLO SE VALUE DELL'INPUT CORRISPONDE AD UNO DEGLI ELEMENTI IN ARRAY 
        for (let i = 0; i < emailList.length; i++){
            // SE CORRISPONDE CAMBIO LA VARIABILE D'APPOGGIO
            if(valueEmail === emailList[i]){
                correctEmail = true;
            }
        }
        // ESITO
        if(correctEmail){
            alert("Welcome, your mail is valid!");
        }
        else{
            alert("Your e-mail is not registered. Please try again.");
        }
    }
)

//! DADI 

// RECUPER ELEMENTI DOM
const playButton = document.getElementById('play-button');
const userNumber = document.getElementById('user-number');
const CPUNumber = document.getElementById('cpu-number');
const GameWinner = document.getElementById('winner');

// AL CLICK DEL BOTTONE INIZIO IL GIOCO
playButton.addEventListener("click",
    function(){

        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const CPURandomNumber = Math.floor(Math.random() * 6) + 1;

        
        userNumber.innerText = ` ${CPURandomNumber}`;
        CPUNumber.innerText = ` ${randomNumber}`;
        
        if(randomNumber > CPURandomNumber){
            GameWinner.innerText = ` Ha vinto il PC con ${randomNumber}`
        }
        else if(randomNumber < CPURandomNumber){
            GameWinner.innerText = ` Ha vinto il Giocatore con ${CPURandomNumber}`
        }
        else if(randomNumber == CPURandomNumber){
            GameWinner.innerText = ` PAREGGIO`
        }
    }

)