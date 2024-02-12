let birds = ['Owl', 'Robbin', 'Eagle']
console.log(birds)

birds.forEach(function(bird) {
    // repeat once for each object in array
    console.log(bird.toUpperCase())

})

// for count 
for (let x = 0 ; x < birds.length ; x++){
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}