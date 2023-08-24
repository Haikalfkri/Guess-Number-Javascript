function GuessNumber() {

    // make a random number and user inpur
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    let userGuess = parseInt(prompt("Enter your guess: "));

    let guess = 1

    // while loop for check if user input === random number
    while ( userGuess !== randomNumber ) {
        // check if user input greater than random number
        if ( userGuess > randomNumber ) {
            alert("Too High!");
            // guess = guess + 1
            guess++;
        } 
        // check if user input less than random number
        else {
            alert("Too low!");
            guess++;
        }

        // show prompt again if user input not equal random number
        userGuess = parseInt(prompt("Guess again: "));
    }

    // show alert if user guess the number
    alert("Your guess is right! with "+ guess +" guess.");

}

GuessNumber();