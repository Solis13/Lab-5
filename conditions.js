// pre-requisites for Android programming
// C# or Java


let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava){
    console.log('You meet the pre-requisites for Andoroid')
} else {
    console.log('You must take C# or Java')
}


// Your turn! to be a senator, there are 3 requirements:
// you must be at least 30 years old 
// you have to have been a USs citizen for 9 or more years
// you must live in the state you want to represent


let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent ){
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible')
}