console.log('----------------Ejercicio 2--------------------')

// Ejercicio 2.1
const concat = (x, y) => [...x, ...y];

console.log('Ejercicio 2.1:', concat([1, 2], [3, 4]));

// Opcional 
const concatMultiple = (...a) => a.reduce((acc, arr) => [...acc, ...arr], []);

// Ejemplo:
console.log('Ejercicio Opcional:', concatMultiple([1, 2], [], [3, 4]));
