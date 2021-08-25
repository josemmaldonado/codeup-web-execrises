console.log("Playing pool with the planets.")

var planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']


console.log('Adding "The Sun" to the beginning of the planets array.');
console.log(planets.unshift('Sun'));

console.log('Adding "Pluto" to the end of the planets array.');
console.log(planets.push('Pluto'));

console.log('Removing "The Sun" from the beginning of the planets array.');
console.log(planets.shift());

console.log('Removing "Pluto" from the end of the planets array.');
console.log(planets.pop());

console.log('Finding and logging the index of "Earth" in the planets array.');
console.log(planets.indexOf('Earth'))
console.log("Reversing the order of the planets array.");
console.log(planets.reverse());

console.log("Sorting the planets array.");
console.log(planets.sort());

