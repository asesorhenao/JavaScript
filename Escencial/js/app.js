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


