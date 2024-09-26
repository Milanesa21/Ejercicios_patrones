abstract class Dispositivos {
    protected tipos: string;
    protected marca: string;
    protected modelo: string;

    constructor(tipos: string, marca: string, modelo: string) {
        this.tipos = tipos;
        this.marca = marca;
        this.modelo = modelo;
    }

    public abstract mostrarDispositivo(): string;
}

class Monitor extends Dispositivos{
    private pulgadas: number;

    constructor(marca: string, modelo: string, pulgadas: number) {
        super("Monitor", marca, modelo);
        this.pulgadas = pulgadas;
    }

    public mostrarDispositivo(): string {
        return `Monitor - Marca: ${this.marca}, Modelo: ${this.modelo}, Pulgadas: ${this.pulgadas}`;
    }
}

class Impresiora extends Dispositivos{
    private ImprimeAColor: boolean;

    constructor(marca: string, modelo: string, ImprimeAColor: boolean) {
        super("Impresora", marca, modelo);
        this.ImprimeAColor = ImprimeAColor;
    }

    public mostrarDispositivo(): string {
        return `Impresora - Marca: ${this.marca}, Modelo: ${this.modelo}, Imprime a color: ${this.ImprimeAColor}`;
    }
}

class Proyector extends Dispositivos {
    private Resolucion: string;

    constructor(marca: string, modelo: string, Resolucion: string) {
        super("Proyector", marca, modelo);
        this.Resolucion = Resolucion;
    }

    public mostrarDispositivo(): string {
        return `Proyector - Marca: ${this.marca}, Modelo: ${this.modelo}, Resolución: ${this.Resolucion}`;
    }
}   

class PerifericoSalidaFacthory{
    public crearDispositivo(tipo: string, marca: string, modelo: string, especificacion: any): Dispositivos | undefined {
        switch (tipo) {
            case "Monitor":
                return new Monitor(marca, modelo, especificacion);
            case "Impresora":
                return new Impresiora(marca, modelo, especificacion);
            case "Proyector":
                return new Proyector(marca, modelo, especificacion);
            default:
                console.log("Dispositivo de salida no válido");
        }
    }
}

const factoryy = new PerifericoSalidaFacthory();

const Monitorr = factoryy.crearDispositivo("Monitor", "LG", "E2341", 23);
if (Monitorr) {
    console.log(Monitorr.mostrarDispositivo());
}

const Impresora = factoryy.crearDispositivo("Impresora", "HP", "LaserJet", true);
if (Impresora) {
    console.log(Impresora.mostrarDispositivo());
}

const Proyectorr = factoryy.crearDispositivo("Proyector", "Epson", "PowerLite", "1080p");
if (Proyectorr) {
    console.log(Proyectorr.mostrarDispositivo());
}