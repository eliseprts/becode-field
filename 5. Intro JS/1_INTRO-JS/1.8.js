const readlineSync = require("readline-sync");
let userName = readlineSync.question("What is your name ? ");
let fruit = readlineSync.question("What is your favorite fruit or vegetable ? ");
let job = readlineSync.question("What job did you want to do when you were a child ? ");
let color = readlineSync.question("What is your favorite color ? ");
let number = new Number(readlineSync.question("Give me a number between 1 and 10: "));
let shape = readlineSync.question("Give me a shape (square, circle, triangle...): ");
let age = new Number(readlineSync.question("What is your age ? "));
let brotherSister = new Number(readlineSync.question("How many brothers and sisters do you have ? "));
let kilometers = age / brotherSister;
let gift = readlineSync.question("What was the last thing you bought ? ");
let food = readlineSync.question("What is your favorite food ? " );
let happy = readlineSync.question("Happy or not happy ? ");
console.log("Far far away there is a country where everyone was called " + userName + " and where we only eat " + fruit + ". In this country lives a little guy. He looks like a/an " + job + " and has " + color + " skin. One day he decided to go on an adventure with his bike. His bike was very special because it has " + number + " " + shape + " wheels. The purpose of his adventure was to find a gift for his girlfriend called " + userName + " (remind you : everybody in the country was called " + userName + "). After " + kilometers + " km, he found the perfect gift : " + gift + ". On his way back, he stopped at his girlfriend’s house. She was cooking " + food + ": their favorite food (and yours too). He gave her his gift and she was " + happy + ". No watter what he still loved her and she still loved him.");