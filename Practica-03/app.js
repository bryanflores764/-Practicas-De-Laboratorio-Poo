// Ejercicio de repaso parcial
class Libro {
    constructor(titulo, autor, añoPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
    }
}

class Bibloteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autor, añoPublicacion) {
        const nuevoLibro = new Libro(titulo, autor, añoPublicacion);
        this.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca`);
    }

    buscarPorTitulo(titulo) {
        const libroEncontrado = this.libros.filter(libro => libro.titulo.includes(titulo));
        if (libroEncontrado.length > 0) {
            console.log(`Libro encontrado`);
            libroEncontrado.forEach(libro => {
                console.log(`${libro.titulo} de ${libro.autor} publicado en ${libro.añoPublicacion}`);
            });
        } else {
            console.log(`No se encontró libro con dicho título`);
        }
    }

    mostrarLibros() {
        if (this.libros.length > 0) {
            console.log(`Libros disponibles:`);
            this.libros.forEach(libro => {
                console.log(`${libro.titulo} de ${libro.autor} publicado en ${libro.añoPublicacion}`);
            });
        } else {
            console.log(`Biblioteca vacía`);
        }
    }
}

const miBiblioteca = new Bibloteca();
miBiblioteca.mostrarLibros();
miBiblioteca.agregarLibro(`El patito Juan`, `Nayin Bukele`, `2025`);
miBiblioteca.mostrarLibros();
miBiblioteca.buscarPorTitulo(`El patito Juan`);
