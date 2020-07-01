let age = parseInt(prompt('Dime tu edad'),10);
if(age){
    if (age >= 18 ) {
        console.log('Es mayor de edad');
    }else{
        console.log('Es menor de edad');
    }
}else{
    let age = parseInt(prompt('Ingresa un dato válido'),10);
}