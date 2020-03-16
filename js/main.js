
'use strict'

// let name = prompt ("enter name:");
// console.log (name+ "How are you today?");

// let age = prompt ('enter age')
// console.log (name + " is one hot" + age + "year old!")

// let message = "hava a lovely day"
// console.log(message); 

// let number = Number (prompt("enter a number"));
// if (number > 0) {
//     console.log ( number + "is positive")
// }
// else {
//     console.log ( number + " is negative or zero")
// }
// else if ( number < 0); {
//     console.log ( number + " is negative ")

// sunny, windy, rainy, snowy. write a program that tells people what to wear based on the weather. using the if and nested if statement. use a switch and break statement to create the same programe. 

// boolean expressions
//  === equal to
//  !== Not equal to
//  <   less than
//  <= less than equal to
//  > greater than 
//  >= greater than equal to

let weather = prompt ('enter the current weather')
if (weather == "sunny") {
    console.log ("Its sunny Why arent you at the beach yet!?");
}
else if (weather == 'windy') {
    console.log ('Might be a good day to fly a kite');
}
else if (weather == 'rainy') {
console.log ('i am singing in the rain, bring an umbrella');
} 

else if (weather == 'snowy') {

    console.log ('how the hell can it be snowing in cape town, you liar!!!');
}

else {
    console.log ('please enter either sunny, windy, rainy, or snowy');
}


