class Dispositivo {
    private tipo: string;
    private marca: string;
    private modelo: string;
    private precio: number;
    cantidad!: number;

    constructor (tipo: string,marca: string, modelo: string, precio: number, cantidad: number) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
        public mostrarDispositivo(): string {
            return  `Tipo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`;
    }}

    class Dispositivos {
        public crearDispocitivo(tipo: string, marca: string, modelo: string, precio: number, cantidad: number): Dispositivo | undefined {
            if (tipo === 'Teclado') {
                return new Dispositivo(tipo, marca, modelo, precio +20, cantidad);
            }
            if (tipo === 'Mouse') {
                return new Dispositivo(tipo, marca, modelo, precio-5, cantidad);
            }
            if (tipo === 'Scanner') {
                return new Dispositivo(tipo, marca, modelo, precio*10, cantidad);
            }
            else {
                console.log('Tipo de dispositivo no válido');
            }
        }
    }
    const dispositivos = new Dispositivos();


    const dispositivo1 = dispositivos.crearDispocitivo('Teclado', 'Logitech', 'G213', 50, 10);
    if (dispositivo1) {
        console.log(dispositivo1.mostrarDispositivo());
    }
    

    const dispositivo2 = dispositivos.crearDispocitivo('Mouse', 'Razer', 'Deathadder', 60, 5);
    if (dispositivo2) {
        console.log(dispositivo2.mostrarDispositivo());
    }
    

    const dispositivo3 = dispositivos.crearDispocitivo('Scanner', 'Epson', 'L3150', 200, 3);
    if (dispositivo3) {
        console.log(dispositivo3.mostrarDispositivo());
    }
    

    const dispositivo4 = dispositivos.crearDispocitivo('Monitor', 'Samsung', 'S24F350', 150, 2);
    if (dispositivo4) {
        console.log(dispositivo4.mostrarDispositivo());
    }