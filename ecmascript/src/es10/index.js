let array = [1,2,3, [4,5,6, [7,8,9]]];

console.log(array.flat(2))

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]))


//eliminar los espacion en blanco al inicio de un string

let hello = '      hello pello'

console.log(hello);
console.log(hello.trimStart());

//eliminar los espacion en blanco al final de un string

let hello2 = 'hello pello     '

console.log(hello2);
console.log(hello2.trimEnd());
 
// de arreglo a objeto
let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries));