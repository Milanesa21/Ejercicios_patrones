abstract class Dispositivo {
  protected tipo: string;
  protected marca: string;
  protected modelo: string;
  protected precio: number;

  constructor(tipo: string, marca: string, modelo: string, precio: number) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }


  public abstract mostrarDispositivo(): string;
}


class Teclado extends Dispositivo {
  private tipoConexion: string;

  constructor(
    marca: string,
    modelo: string,
    precio: number,
    tipoConexion: string
  ) {
    super("Teclado", marca, modelo, precio);
    this.tipoConexion = tipoConexion;
  }

  public mostrarDispositivo(): string {
    return `Teclado - Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}, Tipo de conexión: ${this.tipoConexion}`;
  }
}


class Raton extends Dispositivo {
  private dpi: number;

  constructor(marca: string, modelo: string, precio: number, dpi: number) {
    super("Ratón", marca, modelo, precio);
    this.dpi = dpi;
  }

  public mostrarDispositivo(): string {
    return `Ratón - Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}, DPI: ${this.dpi}`;
  }
}


class Scanner extends Dispositivo {
  private resolucion: string;

  constructor(
    marca: string,
    modelo: string,
    precio: number,
    resolucion: string
  ) {
    super("Scanner", marca, modelo, precio);
    this.resolucion = resolucion;
  }

  public mostrarDispositivo(): string {
    return `Scanner - Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}, Resolución: ${this.resolucion}`;
  }
}


class DispositivoEntradaFactory {
  public crearDispositivo(
    tipo: string,
    marca: string,
    modelo: string,
    precio: number,
    especificacion: any
  ): Dispositivo | undefined {
    switch (tipo) {
      case "Teclado":
        return new Teclado(marca, modelo, precio, especificacion);
      case "Ratón":
        return new Raton(marca, modelo, precio, especificacion);
      case "Scanner":
        return new Scanner(marca, modelo, precio, especificacion);
      default:
        console.log("Tipo de dispositivo no válido");
        return undefined;
    }
  }
}


const factory = new DispositivoEntradaFactory();

const teclado = factory.crearDispositivo(
  "Teclado",
  "Logitech",
  "G213",
  50,
  "USB"
);
if (teclado) {
  console.log(teclado.mostrarDispositivo());
}

const raton = factory.crearDispositivo(
  "Ratón",
  "Razer",
  "Deathadder",
  60,
  16000
);
if (raton) {
  console.log(raton.mostrarDispositivo());
}

const scanner = factory.crearDispositivo(
  "Scanner",
  "Epson",
  "L3150",
  200,
  "1200x2400 dpi"
);
if (scanner) {
  console.log(scanner.mostrarDispositivo());
}
