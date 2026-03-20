
class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    
        
    }

    ficha() {
        return `Título: ${this.titulo}, Género: ${this.genero}, Año: ${this.anio}`;
    }

    retirar() {
        this.disponible = false;
        return `El contenido "${this.titulo}" ha sido retirado con éxito.`;
    }

    estado() {
        if (this.disponible) {
            return "El contenido está disponible.";
        } else {
            return "El contenido está retirado.";
        }
    }
}


const miPelicula = new Contenido("Inception", "Sci-Fi", 2010);

console.log(miPelicula.ficha());   
console.log(miPelicula.estado());  

console.log(miPelicula.retirar()); 
console.log(miPelicula.estado());  