//primitive data types
//7 types
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. BigInt

const score = 100 //number
const scoreValue = 100.3 //string

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail;


const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol
console.log(id===anotherId); //false


const bigNumber = 123456789012345678901230n //BigInt
console.log(bigNumber); 
//non-primitive data type or reference data type
//1. object
//2.Array
//3. function

const heros = ["shaktiman","naagraj","doga"] //array

let myObj = {
    name: "shivani",
    age: 19,
};

const myfunction = function(){

    console.log("hello world");
}
console.log(typeof anotherId); 