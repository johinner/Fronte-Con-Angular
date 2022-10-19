// dinami impor
const btn = document.getElementById('btn');

btn.addEventListener('click', async function (){
    const module = await import('./file.js');
    module.hello();
})

//Nullish coalescing operator (??)
const foo = null ?? 'default string'
console.log(foo)
//Optional chaining (?.)
const user = {};
console.log(user?.profile?.email)