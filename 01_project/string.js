const name ="nadir"
const repoCount = 50
//console.log(name+repoCount+"value");
// console.log(`Hello my name is ${name} and my repo is ${repoCount}`);
const gameName = new String('Nadir-Abbas-shah-ji')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('A'));
console.log(gameName.substring(0,5))
const  anotherGame = gameName.slice(0,10)
console.log(anotherGame);
const newStringOne ="      Nadir     ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="http://google.com/nadir20%abbasShah"
console.log(url.replace('20%','-'))
console.log(url.includes(''))
console.log(gameName.split('-',3));