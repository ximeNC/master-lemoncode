console.log('----------------Ejercicio 1--------------------')

//Ejercicio 1.1

const head = ([x]) => x;

console.log('Ejercicio 1.1:', head(['pollo', 'perro', 'gato', 'pato']));

//Ejercicio 1.2

const tail = ([, , ...r]) => r;

console.log('Ejercicio 1.2:', tail([4, 5, 6, 7, 8]));

//Ejercicio 1.3

const init = (a) => a.slice(0, -1);

console.log('Ejercicio 1.3:', init([1, 2, 3, 4]));

//Ejercicio 1.4

const last = (a) => a.length > 0 ? a[a.length - 1] : undefined;

console.log('Ejercicio 1.4:', last(["a", "b", "c"]));