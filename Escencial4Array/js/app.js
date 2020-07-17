//es una lista de valores separados por comas y encerrados en corchetes []
let array = ['hola',2,true,undefined,[1,2,3,4],{}]
console.log(array);

//Desestructuración de arrays
let arr=['Text1','Text2','Text3','Text4','Text5']
console.log(arr);
let[t1,t2,t3,t4,t5] = arr
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);

//Agregar y quitar valores de un arreglo
//push: agrega un nuevo elemento
arr.push('text6')
console.log('Se agrega con push: ', arr);

//pop: elimina el último elemento
arr.pop()
console.log('Elimini el último elemento con pop: ',arr);

//unshift: Añadir al inicio del arreglo
arr.unshift('nuevo')
console.log('Agrega al inicio con unshift: ',arr);

//shift: elimina el primer elemento del arreglo
arr.shift()
console.log('Elimina el primer elemento con shift: ',arr);

//Agregar o quitar en una posición personalizada

//splice(startIndex,quantity,values): Agregar elementos con una posición. El primer argumento muestra la posición donde los va a agregar, el segundo la cantidad que van a ser eliminados
arr.splice(2,0, 'Text6', 'Text7')
console.log('Agregar con splice: ',arr);

arr.splice(2,2, 'Text8')
console.log('Eliminar con splice: ',arr);

arr.splice(2,1)
console.log('Eliminar con splice: ',arr);

//slice(start,end): Estrae en un nuevo array los valores desde [start] hasta [end-1] No modifica el array original
let arr2 = arr.slice(2,5)
console.log(arr);
console.log(arr2);

//ordenar elementos de un array
//reverse()
console.log('Ordenado con reverse: ', arr.reverse());

const reverseText = string => string.split('').reverse().join('')
console.log('Mostar en reversa cualquier texto: Alexander =>',reverseText('Alexander'));

//sort(callback): ordenar un array
let arr3 = ['Text3', 'Text1', 'Text4', 'Text5', 'Text2']
console.log('Arreglo: ',arr3);

console.log('Ordenados con sort: ', arr3.sort());
console.log('Ordenados con sort y reverse: ', arr3.sort().reverse());

let numeros= [5,10,100,50,1000,4,3,6,7,2,1]
console.log('Arreglo de números: ',numeros);
console.log('Se ordena el arreglo con sort pero no ordena bien: ',numeros.sort());
console.log('Se ordena el arreglo con sort con callback: ',numeros.sort((a,b)=>a-b));


//Concatenar, Unir arrays
//join(separador), convierte un arreglo a un string
console.log('Separar el arreglo de números con join: ',numeros.join(' '));
console.log('Separar el arreglo de números con join: ',numeros.join(','));

//concat: recibe como parámetro un array o una lista
console.log('Agregar otro array con concat: ', numeros.concat(20,40,30,70,60));

//Encontrar elementos en un array
//indexOf(value)
console.log('Encontrar elemento con indexOf(100) ', numeros.indexOf(100));

//find(callback)
console.log('Encontrar elemento con find ', numeros.find(number => number === 50));
//findIndex(callback)
console.log('Encontrar elemento con find ', numeros.findIndex(number => number === 50));


//Elementos duplicados en un array. El método set: no permite valores duplicados, toma el primero, pero genera un objeto
//El spread operator (...), para que podamos utilizar el set
let nums = [20,10,40,50,20,10,40,50,60,70,70]
console.log('Eliminar los elementos repetidos del arreglo: ', [...new Set(nums)]);

//Creo una función para quitar los duplicados de cualquier array
const removeDuplicates = arreglo => [...new Set(arreglo)]
console.log('Funcion para remover los duplicados: ', removeDuplicates(nums));

//Objeto Math con arrays.
console.log('Menor de un arreglo con el objeto Math ', Math.min(...nums));
console.log('Mayor de un arreglo con el objeto Math ', Math.max(...nums));

//Recorrer un array

//for
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
}
//for of
for(let element of nums){
    console.log(element);
}
//.forEach(callback)
nums.forEach((el,i)=>{
    console.log(el,i);
})

//método .some(callback) y retorna un boolean, si al menos uno cumplen una condición
let some = nums.some(el => el===60)
console.log('Some: ',some);

//método .every(callback) y retorna un boolean, si todoscumplen una condición
let every = nums.every(el => el === 0)
console.log('Every: ',every);

//método .map(callback), transforma todos los elementos del array
let map = nums.map(el => el*el )
console.log('Map: ', map);
//Método .filter(callback), filtra los elementos que cumplan con la condición
let filter = nums.filter(el => el===50)
console.log(filter);
//Método .reduce(callback), Reduce todos los elementos a un único valor
let reduce = nums.reduce((a,b)=>a+b)
console.log(reduce);


console.log('Capitalized Names: ', isCapitalizeNames(valids));
function isCapitalizeNames(companies) {
  let capitalizeNames = true;
  companies.map((company) => {
    capitalizeNames = capitalizeNames && isCapitalize(company.name) && isCapitalizeNamesUsers(company.users);
    console.log('Valor: ', capitalizeNames);
    console.log(company.name.charAt(0), '  ', company.name.charAt(0).toUpperCase());
  });
  return capitalizeNames;
}

function isCapitalizeNamesUsers(users) {
  let capitalizeNamesUsers = true;
  console.log('users: ', users);
  users.map((user) => {
    capitalizeNamesUsers = capitalizeNamesUsers && isCapitalize(user.firstName) && isCapitalize(user.lastName);
  });
  return capitalizeNamesUsers;
}

function isCapitalize(str) {
  console.log(str);
  return str.charAt(0) === str.charAt(0).toUpperCase();
}

// forEach
import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(3, companies);

const functionExample1 = require('./example-1');

const valids = functionExample1.getValidCompanies(companies);

console.log('---- EXAMPLE 3 --- ', valids);
console.log('Capitalized Names: ', isCapitalizeNames(valids));
function isCapitalizeNames(companies) {
  let capitalizeNames = true;
  companies.forEach((company, i) => {
    capitalizeNames = capitalizeNames && isCapitalize(company.name) && isCapitalizeNamesUsers(company.users);
    console.log('Valor: ', capitalizeNames);
    console.log(company.name.charAt(0), '  ', company.name.charAt(0).toUpperCase());
  });
  return capitalizeNames;
}

function isCapitalizeNamesUsers(users) {
  let capitalizeNamesUsers = true;
  console.log('users: ', users);
  users.forEach((user, i) => {
    capitalizeNamesUsers = capitalizeNamesUsers && isCapitalize(user.firstName) && isCapitalize(user.lastName);
  });
  return capitalizeNamesUsers;
}

function isCapitalize(str) {
  console.log(str);
  return str.charAt(0) === str.charAt(0).toUpperCase();
}

//Ejercicio 4
import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', getCompanies(companies));

function getCompanies(companies) {
  return companies.map((comp) => getCompany(comp));
}

function getCompany(company) {
  return getNewTableUsers(company.users, company.name);
}

function getNewTableUsers(users, nameCompany) {
  return users
      .map((user) => ({...user, company: nameCompany}))
      .sort((a, b) => a.age - b.age)
      .reverse();
}



