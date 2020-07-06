//Eventos del mouse

const boton = document.querySelector('.boton');

boton.addEventListener('click', ()=>{
    console.log(this);
    console.log('Se ha pulsado el botón');
    stopChangeColor()
})

boton.addEventListener('click', function(){
    console.log(this);
    console.log('Se ha pulsado el botón');
})
boton.addEventListener('mouseover', ()=>{
    console.log('sobre el botón el botón');
})

boton.addEventListener('mouseover', function(){
    console.log('sobre el botón el botón');
})
boton.addEventListener('mouseout', ()=>{
    console.log('el mouse está fuera del botón');
})

boton.addEventListener('mouseout', function(){
    console.log('el mouse está fuera del botón');
})

//Eventos del teclado
window.addEventListener('keydown', (event)=>{
    console.log('Pulsando tecla');
    console.log(event.keyCode);
    console.log(String.fromCharCode(event.keyCode));
    
})
window.addEventListener('keypress', (event)=>{
    console.log('Tecla pulsada');
})
window.addEventListener('keyup', (event)=>{
    console.log('Tecla liberada');
})

//Carga de documento
window.addEventListener('load', (event)=>{
    console.log('El contenddio de la ventana se ha cargado');
})

//Eventos multimedia play, seeking (mover ubicación del control del vídeo), ended

//temporizarores, setInterval, ejecución infinita determinada de tiempo
//setTimeOut, una acción después del tiempo que le indico y se repite una vez.

let temporizador=setInterval(()=>{
    setColor();
},2000)
function setColor(){
    let pagina = document.body;
    pagina.style.backgroundColor=pagina.style.backgroundColor=='blue' ? 'green':'blue';
}

function stopChangeColor() {
    clearInterval(temporizador);
}

//learn press, 

//Búsqueda de caracteres en cadenas de texto
let mensaje='Estoy aprendiendo JavaScript y estoy aprendiendo';
//indexOf
console.log(mensaje.indexOf('aprendiendo'));
console.log(mensaje.lastIndexOf('aprendiendo'));
console.log(mensaje.search('aprendiendo'));
console.log(mensaje.search(/ja/i));
console.log(mensaje.match(/aprendiendo/gi));//g global, i incase sensitive, para que utilice mayúscula y minúscula
console.log(mensaje.substr(6,11));
console.log(mensaje.substring(6,11));
console.log(mensaje.charAt(3));
//Busqed de texto específicas
console.log('Comienza con: ', mensaje.startsWith('Es'));
console.log(mensaje.endsWith('aprendiendo'));
console.log(mensaje.includes('aprendiendo',6));
console.log(mensaje.includes('Estoy',6));
//Separación, reemplazo y separación
console.log(mensaje.repeat(5));
console.log(mensaje.replace('aprendiendo','practicando'));
console.log(mensaje.slice(6));
console.log(mensaje.slice(6,-6));
console.log(mensaje.split(' '));
console.log(mensaje.split(''));
console.log('       Holaaaa     '.trim());

//Arreglos

