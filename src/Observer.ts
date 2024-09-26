interface Observador {
    actualizar(equipo: Equipo): void;
}

class DepartamentoMantenimento implements Observador{
    public actualizar(equipo: Equipo): void {
        console.log(
          `Notificacion al departamento de Manteniemiento: El equipo ${equipo.nombre} (${equipo.tipo}) Ha alcanzado el tiempo de uso de  ${equipo.tiempoUso} horas y necesita mantenimiento.`);
    }
}

class Equipo {
    public nombre: string;
    public tipo: string;
    public estado: string;
    public tiempoUso: number;
    private umbralMantenimiento: number;
    private observadores: Observador[] = [];

    constructor (nombre: string, tipo: string, estado: string, tiempoUso: number, umbralMantenimiento: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.tiempoUso = tiempoUso;
        this.umbralMantenimiento = umbralMantenimiento;
    }

    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador)
    }

    public eliminarObservador(observador: Observador): void {
         this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    private notificarObservadores():void{
        this.observadores.forEach(observador => observador.actualizar(this));
    }


    public incrementarTiempoDeUso(horas: number): void {
        this.tiempoUso += horas;
         console.log(`El equipo ${this.nombre} ha incrementado su tiempo de uso a ${this.tiempoUso} horas.`);
        if (this.tiempoUso >= this.umbralMantenimiento) {
            this.notificarObservadores();
        }
    }

}


const departamentoMantenimento = new DepartamentoMantenimento();

const equipo1 = new Equipo(
  "Impresora Epson",
  "Impresora",
  "Operativo",
  900,
  1000
);
const equipo2 = new Equipo("Computadora Dell", "PC", "Operativo", 450, 500);


equipo1.agregarObservador(departamentoMantenimento);
equipo2.agregarObservador(departamentoMantenimento);


equipo1.incrementarTiempoDeUso(150); 
equipo2.incrementarTiempoDeUso(60);