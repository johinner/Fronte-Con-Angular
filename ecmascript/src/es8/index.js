//devolder una matris
const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length + ' elementos');

const data2 = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
}
// devolver values
const values = Object.values(data);
console.log(values);

//pad
const string = 'hello'
console.log(string.padStart(8,'hi '))
console.log(string.padEnd(10,' ---'))


// Async Await
 const helloWorld = () => {
     return new Promise((resolve, reject) => {
        (true)//false
            ? setTimeout(() => resolve('Hello World'),3000)
            : reject(new Error('Test Error'))
     })
 };

 const HelloAsync = async () => {
     const hello = await helloWorld();
     console.log(hello);
 }

 HelloAsync();
//manejar errores
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
}
anotherFunction()