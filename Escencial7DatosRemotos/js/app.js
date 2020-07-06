// https://jsonplaceholder.typicode.com/ 

let boton = document.getElementById('boton'),
    boton2 = document.getElementById('boton2'),
    contenedor = document.getElementById('contenedor'),
    contBanderas = document.getElementById('banderas'),
    mensajes = document.getElementById('mensajes'),
    post = null;

boton.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            post = data;
            mostrarDatos(post)
        })
});

function mostrarDatos (posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + ' - ' + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

// en este ejercicio nos conectamos a diferentes fuentes de datos
// utilizamos también restcountries.eu, los datos en https://restcountries.eu/rest/v2/all
boton2.addEventListener('click', function () {
 getPosts()
    .then(data => data.json())
    .then(posts => {
        mostrarDatos(posts);
        return getCountries();
    })
    .then(data => data.json())
    .then(countries => {
        mostrarBanderas(countries);
    })
    .catch(error => {
        mensajes.classList.toggle('hide');
        mensajes.innerHTML = error;
        setTimeout(() => {
            mensajes.classList.toggle('hide');
        }, 6000); //para probar este error, coloquemos mal la url de las api
    })   
});

function getPosts() {
 return fetch('https://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
 return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}


//POO

//Clases
class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    static get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }
    set garantia(value) {
        this.tiempoGarantia -= value;
    }
    get garantia() {
        return this.tiempoGarantia;
    }
}
class Pantalla extends Producto {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    encendido() {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }
    volumen() {
        console.log(`El volumen de ${this.marca} se ha modificado`);
    }
    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }
    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('001','Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('002','Samsung','lcd',80);