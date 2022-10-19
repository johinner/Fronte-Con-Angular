// operador de reposo
const obj = {
    name: 'oscar',
    age: '25',
    country: 'MX'
}

let {name, ...all} = obj;
console.log(name, all);

const obj2 = {
    ...obj,
    pais: 'COL'
}

console.log(obj2)

//PROMESA

const helloWorld = () => {
    return new Promise((resolve, reject) => {
       (true)//false
           ? setTimeout(() => resolve('Hello World'),3000) 
           : reject(new Error('Test Error'))
    })
};

helloWorld()
    .then(response => console.log(response))
    
    .catch(error => console.log(error))

    .finally(()=> console.log('finalizo'));

//regex acceder a bloques de regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year)