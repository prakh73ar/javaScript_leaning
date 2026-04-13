//primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber=374328328328388329n
// console.log(typeof(bigNumber));


//reference (Non Primitve)

//Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

let Obj = {
    name: "Prakhar",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

//console.log(typeof myFunction);


let myName = "Prakhar";
let anotherName = myName;

anotherName = "chaiaurcode";

// console.log(myName);

// console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1;

user2.email = "hitesh@google.com"

console.log(user1.email);
console.log(user2.email);
