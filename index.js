#!/usr/bin/env node
import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let chances = 10;
let vitoria = false;
let attempts = 0;
const number = Math.floor(Math.random() * 100 + 1)
const text = [
    'Welcome to the Number Guessing Game!',
    "I'm thinking of a number between 1 and 100",
    "You have 3 to 10 chances to guess the correct number",
    "Please select the difficulty level: ",
    "1. Easy (10 chances)",
    "2. Medium (5 chances)",
    "3. Hard (3 chances)"
]


text.forEach(log => console.log(log))
rl.question("Enter your choice:", (difficulty) => {
    switch (difficulty) {
        case "1":
            console.log('Great! You have selected the Easy difficulty level.')
            console.log("Let's start the game!")
            question();
            break;

        case "2":
            chances = 5;
            console.log('Great! You have chosen the medium difficulty')
            console.log("Let's start the game!")
            question();
            break;

        case "3":
            chances = 3;
            console.log('Great! You have chosen the hard difficulty')
            console.log("Let's start the game!")
            question();
            break;
    }
})

function question() {
    if (vitoria == true) {
        console.log(`Congratulations! You guessed the correct number in ${attempts} attempts`)
        rl.close()
        return
    }
    if (chances == 0) {
        console.log('Game over! You have run out of chances.')
        rl.close()
        return
    }
    rl.question('Enter your guess:', (guess) => {
        if (guess < number) {
            console.log(`Incorrect! The number is greater than ${guess}`)
            attempts++
            chances--
            question();

        }
        else if (guess > number) {
            console.log(`Incorrect! The number is lesser than ${guess}`)
            attempts++
            chances--
            question();
        }
        else {
            vitoria = true;
            question();
        }
    })



}



