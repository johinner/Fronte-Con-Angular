function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name , age , country);
}

// es6 
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('ricardo' ,'23' ,'col');

let hello = 'hello';
let world = 'world';
let epicphrase = hello + ' ' + world;
console.log(epicphrase);

// es6 templay literal
let epicphrase2 = `${hello} ${world}`
console.log(epicphrase2)

// es6 Desestructuración
let person = {
    name: 'oscar',
    age: '25',
    country: 'MX'
}

console.log(person.name, person.age)

let {name, age, country} = person;
console.log(age, country);


let team1 = ['oscar', 'julian', 'ricardo']
let team2 = ['vale', 'dany', 'cami']

let education = ['David', ...team1, ...team2]

// Parámetros en objetos

let nombre = 'oscar' 
let edad = '35'
//es5
obj = { name: nombre, age: edad}
//es6
obj2 = { nombre, edad }
console.log(obj2);


// Arrow Functions
const names = [
    {name: 'oscar', age: 32},
    {name: 'yesica', age: 20}
]
//es5
let listOfNames = names.map(function (item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => {console.log(item.name)})

const square = num => num * num;

// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    //metodo sumar
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//module importar funciones de otros documentos
import {hello} from './module'
hello();

//Generadores
function* helloWorld(){
    if (true){
        yield 'hello, ';
    }
    if (true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

