function cityStateAddress(city,state){
    let address = city + ', ' + state.toUpperCase()
    return address
}

console.log (cityStateAddress('Minneapolis', 'mn' ))
let address = cityStateAddress ('Seattle', 'WA')
console.log (address)



function isMinnesotaZip(code){
    // condtions for the range between: 55001 and 56763

    if (code >=55001 && code <=56763) {
    return true
    
} else {
    return false

    }
}

function validGPA(gpa){
    if(gpa >=0 && gpa <=4){
    return true

    } else {

      return false
} 
}


console.log(validGPA(5))
console.log(validGPA(2))
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55423))
console.log(isMinnesotaZip(55008833))
console.log(isMinnesotaZip(8))

