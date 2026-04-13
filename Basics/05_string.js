const name = "Prakhar";
const repoCount = 50;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const ganeName =new String('Prakhar-hc');

console.log(ganeName[0]);
console.log(ganeName.__proto__);

console.log(ganeName.indexOf('r'));

const newString=ganeName.substring(0,4);

console.log(newString);

const anotherString=ganeName.slice(-8,4);

console.log(anotherString);

const newStringone="       Prakhar      ";

console.log(newStringone);
console.log(newStringone.trim());
