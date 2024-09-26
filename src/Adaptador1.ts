interface IFacturacion {
  generarFactura(id: number, monto: number): void;
  consultarFactura(id: number): string;
}

class FacturacionVieja {
  private facturas: Map<number, { monto: number; estado: string }> = new Map();

  crearFactura(id: number, monto: number): void {
    this.facturas.set(id, { monto, estado: "Generada" });
    console.log(
      `Factura ${id} creada en el sistema antiguo con monto: ${monto}`
    );
  }

  obtenerFactura(id: number): { monto: number; estado: string } | undefined {
    return this.facturas.get(id);
  }
}

class AdaptadorFacturacion implements IFacturacion {
  private facturacionVieja: FacturacionVieja;

  constructor(facturacionVieja: FacturacionVieja) {
    this.facturacionVieja = facturacionVieja;
  }

  generarFactura(id: number, monto: number): void {
    this.facturacionVieja.crearFactura(id, monto);
  }

  consultarFactura(id: number): string {
    const factura = this.facturacionVieja.obtenerFactura(id);
    if (factura) {
      return `Factura ${id}: Monto = ${factura.monto}, Estado = ${factura.estado}`;
    } else {
      return `Factura ${id} no encontrada.`;
    }
  }
}

const facturacionVieja = new FacturacionVieja();
const adaptadorFacturacion = new AdaptadorFacturacion(facturacionVieja);

adaptadorFacturacion.generarFactura(1, 100.5);
console.log(adaptadorFacturacion.consultarFactura(1));

adaptadorFacturacion.generarFactura(2, 250.0);
console.log(adaptadorFacturacion.consultarFactura(2));

console.log(adaptadorFacturacion.consultarFactura(3));
