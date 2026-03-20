
class Empleado {
    constructor(nombre, cargo, salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    presentarse(){
        return "Hola" + this.nombre + "tu cargo es: " + this.cargo
    }
    estado(){
        return "El salario anual es: " + this.salario*12;
    }
    calcularSalarioAnual(){
        return "Hola" + this.nombre + "tu cargo es: " + this.cargo
    }
    info(){
        return `El usuario ${this.nombre} con cargo ${this.cargo} con salario de ${this.salario} USD , se encuentra con ${this.estado()}`    }
}
 
let empleadoUno = new Empleado("Fabián Salamanca","Desarrollador senior",10000)
let empleadoDos = new Empleado("Maira Pinilla","Desarrollador junior",1000)
let empleadoTres = new Empleado("Angie Gamboa","Desarrollador junior",800)
 
console.log((empleadoUno.presentarse)(),empleadoUno.calcularSalarioAnual(),empleadoUno.info());
console.log(empleadoDos.calcularSalarioAnual());
console.log(empleadoUno.info());

