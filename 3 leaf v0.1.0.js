

// 3 PLAYER 3 LEAF by 7OUL
// gets 3 random numbers and adds them up 
// this new random total gets given to a PLAYER
// Player with largest sum wins 

console.log("3 LEAF");

const player1 = "Thomas";
const player2 = "Chris";
const player3 = "Manu";

const max = 13;
const min = 1;

let num1 = Math.floor(Math.random() * (max - min)) + min;

let num2 = Math.floor(Math.random() * (max - min)) + min;

let num3 = Math.floor(Math.random() * (max - min)) + min;

let player1sum = num1 + num2 + num3;




console.log(player1 + ": " + player1sum);



num1 = Math.floor(Math.random() * (max - min)) + min;

num2 = Math.floor(Math.random() * (max - min)) + min;

num3 = Math.floor(Math.random() * (max - min)) + min;

let player2sum = num1 + num2 + num3;


console.log(player2 + ": " + player2sum);


num1 = Math.floor(Math.random() * (max - min)) + min;

num2 = Math.floor(Math.random() * (max - min)) + min;

num3 = Math.floor(Math.random() * (max - min)) + min;

let player3sum = num1 + num2 + num3;


let player3score = console.log(player3 + ": " + player3sum);
/*
//QUERIES

let firstQuery = player1sum > player2sum;

// First Query = True

let fristQueryTrue1 = player1sum > player3sum;

let firstQueryFalseA = player1sum === player3sum;

// First Query = False

let firstQueryFalse1 = player1sum === player2sum;

// FQF1 = False 

let firstQueryFalse2 = player2sum > player3sum;

// FQF2 = False

let firstQueryFalse3 = player2sum === player3sum;
*/
//FQF3 = false then player 3 wins

if(player1sum > player2sum) {
    fqt1Check();
} else {
    fqf1Check();
}

// FIRST QUERY IS TRUEA

function fqt1Check() {
    
    if(player1sum > player3sum) {
        console.log(player1 + " Wins !");
    } else {
        fqfaCheck();
    }
}

function fqfaCheck() {
    
    if(player1sum == player3sum) {
        console.log("DRAW between " + player1 + " and " + player3);
    } else {
        console.log(player3 + " Wins !");
    }
}

// FIRST QUERY IS FALSE

function fqf1Check() {
    if(player1sum == player2sum) {
        fqf1aCheck();
    } else {
        fqf2Check();
    }
}

function fqf1aCheck() {
    if(player1sum > player3sum) {
        console.log("DRAW between " + player1 + " and " + player2);
    } else {
        fqf1bCheck();
    }
}

function fqf1bCheck() {
    if(player1sum == player3sum) {
        console.log("TOTAL DRAW");
        
    } else {
        console.log(player3 + " Wins !");
    }
}

function fqf2Check() {
    if(player2sum > player3sum) {
        console.log(player2 + " Wins !");
    } else {
        fqf3Check();
    }
}

function fqf3Check() {
    if(player2sum == player3sum) {
        console.log("TOTAL DRAW !");
    } else {
        console.log(player3 + " Wins !");
    }
}

/* if(player1 == player2 == player3 ) {
    console.log("TOTAL DRAW");
} */