import fetch from "node-fetch";
const API = 'https://json-projects.up.railway.app/';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    monstrar(data)
    return data;
}
fetchData(API)

const monstrar = (data) => {
console.log(data)
}
/*const anotheFn = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    }catch (error){
        console.error(error);
    }
}*/

//anotheFn(API);