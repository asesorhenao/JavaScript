//Los objetos son unos de los conceptos bases de javascript, todo js funciona basdo en objtos
//un objeto es una estructura de datos{propiedad:valor, propiedad2:valor2..., metodo(){código}}
//los objetos imitan el comportamiento de la vida real, tienes propiedades(caracteristica) y método(algo que puede hacer)
let perro={
    nombre:'perro',
    edad:3,
    color:'negro',
    sexo:'macho',
    vacunas:true,
    correr(){
        console.log(`${this.nombre} corre mucho`);
        
    }
}

console.log('objeto perro: ',perro);
console.log('método objeto: ',perro.correr());

//propiedades de los objetos
//puedo acceder a sus propuedades con notación punto o []
console.log(perro.nombre);
console.log(perro['color']);

//pueden recibir expresiones como propiedades
let a='hola', b='mundo'
let saludo = {
    [a+b]:'Mi primer hola mundo'
}
console.log(saludo);

let saludo2 = {
    a:a,
    b:b
}
console.log(saludo2);
let saludo3={a,b}
console.log(saludo3);

//Agregar y quitar propuedades 
delete perro.edad
console.log(perro);
perro.edad=5
console.log(perro);

//Prototipos: molde para crear otros objetos. los tipos de datos, realmente son objetos String, Number, Boolean, Object, son objetos constructores
let amigo='Alexander'
console.log(Object.getPrototypeOf(amigo)); //acceder al prototipo de un objeto y ver sus métodos y propiedades
let amigo2 = new String('Alexander Henao') // no se recomienda hacer esto por la cadena de prototipos
console.log(amigo2);
console.log(typeof amigo2);

//operador in, devuelve true o false si el objeto tiene esa propiedad
console.log('sexo' in perro);
console.log('vacuna' in perro);

//ciclo for in: es peligroso porque devuelve las propiedades heredadas.
Object.prototype.patas=5
console.log('Agrego una propiedad general llamada patas, con el ciclo for in trae todas las propiedades del objeto y las heredadas hay que tener cuidado con eso');

for(let property in perro){
    console.log(property);
}

//.hasOwnProperty: preguntar si la propiedad es realmente del objeto o la ha heredado
console.log('.hasOwnProperty, sólo trae las propiedades de ese objeto no las heredadas');

for(let property in perro){
    if(perro.hasOwnProperty(property)){
        console.log(property);
    }
}

//Mutabilidad: los objetos son mutables, hay datos inmutables, no pueden variar, eje: todos los valores primitivos son inmutables. 
//los objetos si son mutables, pueden ser transformados. son asignados por referencia, no por valor. 
//por referencia están encadenados, si la copia es cambiada cambia el original.
//Crear una copia del objeto pero que no cambie el original Object.assign({}, obejto)

let perro2 = Object.assign({}, perro)
perro2.orejas=2
console.log('Objeto perro: ', perro, ' perro2: ', perro2);

//Recorrer objetos: 
//for in: Devuelve los nombres de las propiedades de un objeto, pero también devuelve los objetos de la cadena de prototipos
//for of: no recorre un objeto, porque un objeto no tiene indíces o no es iterable. for of recorre un objeto que es iterable: string, array...
//Object.entries(): devuelve como arrays cada una de las entradas del objeto, la pareja propiedad: valor
console.log(Object.entries(perro));

//Object.keys(): devuelve las propiedades
console.log(Object.keys(perro));
//Object.value(): devuelve los valores
console.log(Object.values(perro));

//Estructurando datos con JSON
let personas = [
    {nombre: 'Persona 1', red:'red 1'},
    {nombre: 'Persona 2', red:'red 2'},
    {nombre: 'Persona 3', red:'red 3'},
    {nombre: 'Persona 4', red:'red 4'}
] 
console.log('Objto original: ', personas);

let personasJSON=JSON.stringify(personas);
console.log('Se convierte el objeto a JSON: ', personasJSON);

let nuevasPersonas = JSON.parse(personasJSON);
console.log('Se convierte JSON a objeto: ', nuevasPersonas);

//Ejercicio de objetos para la prueba
function replacingValues(data) {
    return data.map((company) => {
      company.users = company.users.map((user) => {
        Object.keys(user).map(function(key, index) {
          user[key] = user[key] || '';
        });
        return user;
      });
      company.name = company.name[0].toUpperCase() + company.name.slice(1);
      return company;
    });
  };
  