interface Observadoress {
  actualizar(equiposs: Equiposs[]): void;
}


class Equiposs {
  public nombre: string;
  public tipo: string;
  public estado: string;

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  public mostrarEquiposs(): string {
    return `Equiposs: ${this.nombre}, Tipo: ${this.tipo}, Estado: ${this.estado}`;
  }
}


class Inventario {
  private equiposs: Equiposs[] = [];
  private observadoress: Observadoress[] = [];


  public agregarObservadoress(observadoress: Observadoress): void {
    this.observadoress.push(observadoress);
  }

  public eliminarObservadoress(observadoress: Observadoress): void {
    this.observadoress = this.observadoress.filter(
      (obs) => obs !== observadoress
    );
  }


  private notificarObservadoress(): void {
    this.observadoress.forEach((observadoress) =>
      observadoress.actualizar(this.equiposs)
    );
  }


  public agregarEquiposs(equiposs: Equiposs): void {
    this.equiposs.push(equiposs);
    console.log(`Se ha agregado el equiposs: ${equiposs.mostrarEquiposs()}`);
    this.notificarObservadoress(); 
  }


  public eliminarEquiposs(nombre: string): void {
    this.equiposs = this.equiposs.filter(
      (equiposs) => equiposs.nombre !== nombre
    );
    console.log(`Se ha eliminado el equiposs con nombre: ${nombre}`);
    this.notificarObservadoress(); 
  }


  public actualizarEstadoEquiposs(nombre: string, nuevoEstado: string): void {
    const equiposs = this.equiposs.find(
      (equiposs) => equiposs.nombre === nombre
    );
    if (equiposs) {
      equiposs.estado = nuevoEstado;
      console.log(
        `Se ha actualizado el equiposs: ${equiposs.mostrarEquiposs()}`
      );
      this.notificarObservadoress(); 
    }
  }
}


class InterfazUsuario implements Observadoress {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }


  public actualizar(equiposs: Equiposs[]): void {
    console.log(`Interfaz ${this.nombre} - Actualización del Inventario:`);
    equiposs.forEach((equiposs) => {
      console.log(equiposs.mostrarEquiposs());
    });
    console.log("--- Fin de actualización ---\n");
  }
}


const inventario = new Inventario();


const interfaz1 = new InterfazUsuario("Interfaz 1");
const interfaz2 = new InterfazUsuario("Interfaz 2");


inventario.agregarObservadoress(interfaz1);
inventario.agregarObservadoress(interfaz2);


inventario.agregarEquiposs(new Equiposs("Laptop HP", "Laptop", "Operativo"));
inventario.agregarEquiposs(new Equiposs("Monitor LG", "Monitor", "Operativo"));


inventario.actualizarEstadoEquiposs("Laptop HP", "Mantenimiento");


inventario.eliminarEquiposs("Monitor LG");
