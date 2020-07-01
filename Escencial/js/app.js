'use strict'
function mostrar() {
    Swal.fire({
        title: 'Bienvenido!',
        text: 'Esta es una prueba con Sweet Alert 2',
        icon: 'success'
    });
}

(async () => {
    const {value: pais} = await Swal.fire({
        title: 'País',
        text: 'Selecciona el País',
        icon: 'question',
        confirmButtonText: 'Seleccionar',
        footer: 'Ejemplo de prueba',
        padding: '1rem',
        backdrop: true,
        input: 'select',
        inputPlaceholder: 'País',
        inputOptions: {
            colombia: 'Colombia',
            mexico: 'México'
        }
    
    });

    if(pais) {
        Swal.fire({
            title: `Seleccionaste: ${pais}`
        });
    }
})()

//Operadores unarios
let num = 1;
console.log('Typeof: ', typeof num);
console.log('negación: ',  !num);

//Operador ternario expresion ? si es verdadero : si es falso
let age = prompt('Ingrese la edad');
let isAdult = age >= 18 
                ? 'Es mayor de Edad' 
                : 'Es menor de edad';
console.log(isAdult);


//Manipular string
let text = 'Hola mundo';
console.log('length ', text.length);
//trim quita los espacios al principio y al final
console.log('Trim ', '     Hola    '.toUpperCase().trim());

//indexOf permite encontrar caracteres o string
console.log('indexOf: ', text.indexOf('m'));
console.log('indexOf busca la segunda o ', text.indexOf('o',text.indexOf('o')+1));
//includes, pregunta si el texto se encuentra en un string
console.log('includes: tiene mundo? ', text.includes('mundo'));


console.log(text.replace('mundo', 'Alexander'));
//split separa o divide el string
console.log(text.split('m'));
console.log(text.split(' '));
console.log(text.split(' ')[0]);
console.log(text.split(' ')[1]);
console.log(text.split(''));

//substring
console.log(text.substring(4));
console.log(text.substring(2,5));

//substr
console.log(text.substr(2,5));

//slice, la diferencia con substr son los valores negativos
console.log('slice ',text.slice(2,5));


console.log(text.substring(2,-5));
console.log(text.substring(-2));
console.log(text.substr(-2));
console.log(text.slice(1, -2));



