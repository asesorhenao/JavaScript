//Una función es un trozo de código reutilizable e
//en el que hay un conjunto de instrucciones.

//Formas de declarar una función

////Declaración
function nombreFuncion(parametros){
    //instrucciones de la función
    return valor
}
function saludar(persona, sexo){
    return sexo === 'm'
            ?`Bienvenido ${persona}`
            :`Bienvenida ${persona}`
}
console.log(saludar('Alexander', 'm'));
console.log(saludar('Natalia', 'f'));

////Mejorar el ejemplo anterior


function saludar2(persona, sexo) {
    let saludo = sexo === 'm'
                    ? 'Bienvenido'
                    : 'Bienvenida'
    return `${saludo}, ${persona}`
}

console.log(saludar2('Sergio', 'm'));
console.log(saludar2('Valeria', 'f'));


////Expresión Perp ya no utilizar var
var nombreFuncion = function() {
    //instrucciones de la funcion
    return valor
}


//Funcion flecha ES6
//const nombreFuncion = (parametros) => {
    //instrucciones de la funcion
    //return valor
//}

//Ejemplo
const saludar3 = (persona, sexo) => {
    let saludo = sexo === 'm'
                    ? 'Bienvenido'
                    : 'Bienvenida'
    return `${saludo}, ${persona}`

}
console.log(saludar3('Santiago','m'));
console.log(saludar3('Ana','f'));

//Si la función de flecha retorna directamente un valor, sin instrucciones adicionales, la sintaxis se reduce
const sumar = (a,b) => a + b
console.log(sumar(30,20));

//Parámetros rest (spred operator), ES6 mandar cualquier cantidad de argumentos, 

const sumarTodos = (...numeros) => {
    let resultado = 0
    for (let i=0; i<numeros.length;i++) {
        resultado+=numeros[i]
    }
    return resultado
}
console.log(sumarTodos(30,20,40,10));

//Las funciones pueden ser almacenadads en variables o constantes
const c = console.log //log no tiene parentesis, se asigna a c como expresión y este queda como método.
const multiplicar = (a,b) => a * b
c(multiplicar(3,4))

// Callbacks pueden ser pasadas como argumentos de otra funcion
let multi = multiplicar(multiplicar(2,5),5)
c(multi)

//closures pueden ser retornadasz por otra funcion
function sumarF(x) {
    return function(y) {
        return x + y
    }
}

//En función flecha
c(sumarF(20)(60))

const sumarF2 = x => y => x + y
c(sumarF2(3)(1))


//Ejercicio con funciones retornadas

const doSomething = x => y => x * y
const a = doSomething(2)(2) // 4
const b = doSomething(3) // y = x * y
c(doSomething(a)(b(3))) //doSomething(4)(9) 36

// Tipos de funciones

//Funcion pura: aquella que no causa un efecto secundario y siempre devuelve los mismos valores para los mismos parámetros
let aa = 'Hola'
const saludo = persona => {
    aa = aa + ' ' + persona
    return aa
}

c(saludo('Alex'))
c(aa)

//Hcemos que sea pura para que no modifique a aa
let aaa = 'Hola'
const saludarPura = (saludo, persona) => `${saludo} ${persona}`
c(saludarPura(aaa, 'Alexander'))
c(aaa)

//Funciones autoinvocadas: No necesitan invocarse, ejecutar con paréntesis
const saludarAutoinvocada = ((saludo, persona) => `${saludo} ${persona}`)(aaa,'Valeria')
c(saludarAutoinvocada)
//YA NO SE USAN TANTO

//Funciones nombradas y anónimas: Nombrada ejemplo saludar.

//Ejemplo anónima
setTimeout(() => { //No tiene nombre la funcion que está dentro del timeout
    console.log('Función anonima');
},2000)


//closures: A traves de funciones internas podemos llegar a valores externos

function aumentar () {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}
const incrementar = aumentar()

incrementar()
incrementar()
incrementar()
incrementar()


//this: Representa el objeto del cual se ejecuta la función
let user = {
    nombre: 'Alexander',
    edad: 43,
    getEdad(){
        c(this.edad)
    }
}

user.getEdad()