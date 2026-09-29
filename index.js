/*function greetUser(name){
  return ("Welcome, " + name + "!")
}
let name = prompt("What is your name? ")
let greeting = greetUser(name)
console.log(greeting)*/

let fullname = "Rahul"
let age = "23"
let student = "False"

document.getElementById("p1").textContent = `Your name is ${fullname}`
document.getElementById("p2").textContent = `You are ${age} years old` 
document.getElementById("p3").textContent = `Persuing studies: ${student}`