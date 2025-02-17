console.log('----------------Ejercicio 3--------------------')

//Ejercicio 3.1
function clone(x) {
  return { ...x };
}

// Ejemplo:
const obj = { name: 'Ximena', city: 'Madrid' };
const newObj = clone(obj);


console.log('Ejercicio 3.1:', newObj);


//Ejercicio 3.2
function merge(source, target) {
  return { ...target, ...source };
}

// Ejemplo:
const a = { name: 'Ximena', surname: 'Novoa', city: 'Madrid' };
const b = { name: 'Ximena', age: 34};

console.log('Ejercicio 3.2:', merge(a, b));


