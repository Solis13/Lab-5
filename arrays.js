let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals[1])

animals.push('elephant')// to add into the array
console.log(animals)

let lastAnimal = animals.pop()// to remove of the array
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer')
console.log(animals)

let firtsAnimal = animals.shift()
console.log(firtsAnimal)
console.log(animals)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('walrus'))

if (animals.indexOf('walrus') == -1){
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')){
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})


// Your turn! Use a loop with your animals array,
// can you print the length of each animal name?

animals.forEach(function(animal){
    console.log(animal.length)
})

// Can you make a new array with the lenghts of each animal name?
// So for my example, ['cheetah', 'giraffe', 'zebra']
// Create an array [7,7,4,5]

animals.push('alligator')

let animalNameLength = []
animals.forEach(function(animal){
    let lenght = animal.length
    animalNameLength.push(lenght)
})

console.log(animalNameLength)