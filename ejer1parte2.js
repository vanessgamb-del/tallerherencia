
class Empleado {
  constructor(nombre, salario, cargo) {
    this.nombre = nombre;
    this.salario = salario;
    this.cargo = cargo;
  }

  info() {
    return `Nombre: ${this.nombre}, Cargo: ${this.cargo}, Salario: ${this.salario}`;
  }
}

// Clase Lider que hereda de Empleado
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
    return `${nombre} ha sido agregado al equipo.`;
  }

  info() {
    return `${super.info()}, Personas a cargo: ${this.equipo.length}`;
  }
}

// Ejemplo de uso
const lider1 = new Lider("Vanessa", 200000, ["Maira", "Fabian"]);

console.log(lider1.info());
console.log(lider1.presentarEquipo());
console.log(lider1.agregarMiembro("Cesar"));
console.log(lider1.presentarEquipo());