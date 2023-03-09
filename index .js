// template string 
// let age = 22;
// let firstName = "Hamza"

// "my name is hamza and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

// let aboutMe = `my name is ${firstName} and my age is ${age}`

// console.log(aboutMe);




// undefined 
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Hamza";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "hamza";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error 

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);




// booleans & comparison operator 

// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);






// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0






// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }








// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);







// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
// let firstName = "arshit";
// let age = 16;

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }













// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}