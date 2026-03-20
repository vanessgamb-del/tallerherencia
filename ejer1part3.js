class Empleado {
    constructor(nombre, salario, cargo) {
        this.nombre = nombre;
        this.salario = salario;
        this.cargo = cargo;
        this.activo = true;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }

    desactivar() {
        this.activo = false;
    }

    info() {
        return `Nombre: ${this.nombre}, Cargo: ${this.cargo}, Salario: ${this.salario}, Activo: ${this.activo}`;
    }
}


class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, salario, "Lider de equipo"); 
        this.equipo = equipo; 
    }

    presentarEquipo() {
        return `Mi equipo es: ${this.equipo.join(", ")}`;
    }

    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return `${nombre} fue agregado al equipo`;
    }

   
    info() {
        return `${super.info()}, Personas en el equipo: ${this.equipo.length}`;
    }
}

let lider1 = new Lider("Roberto", 2000, ["Carlos", "Luis"]);
let lider2 = new Lider("Cristian", 2100, ["Marta", "Sofia"]);

// Verificar métodos heredados
console.log(lider1.calcularSalarioAnual()); // hereda
lider1.desactivar(); // hereda
console.log(lider1.info());


console.log(lider1.agregarMiembro("Andres"));


console.log(lider1.presentarEquipo());


let empleado1 = new Empleado("Rodinson", 10000, "Desarrollador Senior");
let empleado2 = new Empleado("Maira", 1000, "Desarrollador Junior");
let empleado3 = new Empleado("Cesar", 10000, "Desarrollador Senior");
let empleado4 = new Empleado("Vanessa", 1000, "Desarrollador Junior");




let empleados = [empleado1, empleado2, empleado3, empleado4, lider1, lider2];


let totalMensual = 0;

for (let emple of empleados) {
    totalMensual += emple.salario;
}

console.log("Costo mensual total:", totalMensual);


let totalAnual = totalMensual * 12;
console.log("Costo anual total:", totalAnual);


empleado1.desactivar();
console.log(empleado1.info());


console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log(lider2.info());
console.log(lider2.presentarEquipo());