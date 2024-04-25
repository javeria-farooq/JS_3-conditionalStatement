/*///////////// conditional statements*/

/*/// if statement:    (age condition)*/

/*let age = +prompt("what's your age?")

if(age >= 18) {
    confirm("You can vote")
}

if(age < 18) {
    confirm("You can not vote")
}*/

/*if else statement:  even odd numbers:*/

/*let a = +prompt("Enter number")

let res = a % 2

if(res == 0) {
    alert(a+ " number is even")
}

else{
    alert(a+ " number is odd")
}*/

/*else if statement: themes:*/

/*let mode = prompt("Enter your theme color")
let color;

if(mode === "black") {
    color = "dark theme"
}

else if(mode === "blue") {
    color = "blue theme"
}

else if(mode === "pink") {
    color = "pink theme"
}

else{
    color = "light theme"
}

console.log(mode)*/

/*ternary operator: as if else statement:*/

/*let age = 21
let res = age >= 18 ? "adult" : "child"
console.log(res)

let res = age >= 18 ? console.log("adult") : console.log("child")*/

/*switch statement:*/

/*let age = 19
switch(age) {
    case 18:
    console.log("your age is less than 20");
    break
    case 19:
    console.log("your age is less than 20 but greater than 18");
    break
    default:
    console.log("your age is 20")
}

let score = 60
switch(score) {
    case 30:
        console.log("you are fail")
        break
    case 40:
        console.log("you are pass")
        break
    case 50:
        console.log("you get good marks")
        break
    default:
        console.log("perfect")
}

let fruits = "mangoes"
switch(fruits) {
    case "mangoes":
        console.log("price is 250 Rs")
        break
    case "papayas":
        console.log("price is 100 Rs")
        break
    case "pomegrenate":
        console.log("price is 500 Rs")
        break
    default:
        console.log("price is 50 Rs")
}*/


/*practice question:*/

/*qno: 1  multiple of 5*/

/*let num = +prompt('Enter number')
let res = num % 5

if(num > 1) {
    if(res === 0) {
        console.log(num, " is a multiple of 5")
    }
    
    else{
        console.log(num, " is NOT a multiple of 5")
    }
}*/

/*qno: 2  marks sheet*/

/*let marks = +prompt("Enter your marks")
let percent = marks / 100 * marks

if(marks > 100 || marks <= 0) {
    alert("your marks are invalid")
}

else if(marks <= 100 && marks >=80){
    confirm(`your percentage is ${percent} and your grade is A+`)
}

else if(marks < 80 && marks >=70) {
    confirm(`your percentage is ${percent} and your grade is A`)
}

else if(marks < 70 && marks >=60) {
    confirm(`your percentage is ${percent} and your grade is B`)
}

else if(marks < 60 && marks >=50) {
    confirm(`your percentage is ${percent} and your grade is C`)
}

else if(marks < 50 && marks >=40) {
    confirm(`your percentage is ${percent} and your grade is D`)
}

else if(marks < 40 && marks > 0){
    confirm(`your grade is F`)
}*/