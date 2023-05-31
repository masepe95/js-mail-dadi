console.log('JS OK') 

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