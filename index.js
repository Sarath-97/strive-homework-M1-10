// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "john"
let y = "doe"

console.log(x, "<>", y)
// 22) Create an object with properties such name, surname, email

let person = {
    name:"sarath",
    surname: "kumar",
    email: "sarath559709@gmail.com"
}

console.log(person)
// 23) Delete Email from the previously created object

delete person.email
console.log(person)

// 24) Create an array with 10 strings in it

let myArray = []
for(i = 0; i <= 10;i++){
    myArray.push("this the text "+i)
}


// 25) Print in the console every string in the previous array
console.log(myArray)

// 26) Create an array with 100 random numbers in it
for(i = 0; i <= 100; i++){
    myArray.push(Math.floor(Math.random()*100))
  }
  console.log(myArray)
// 27) Write a function to get the MAX and the MIN from the previously created array


// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
