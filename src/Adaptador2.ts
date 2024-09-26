interface IProveedor {
  obtenerProductos(): { id: number; nombre: string; cantidad: number }[];
  actualizarInventario(productoId: number, cantidad: number): void;
}

class ProveedorExternoAPI {
  private productos: {
    productoId: number;
    descripcion: string;
    stock: number;
  }[] = [
    { productoId: 1, descripcion: "Teclado", stock: 50 },
    { productoId: 2, descripcion: "Mouse", stock: 100 },
    { productoId: 3, descripcion: "Monitor", stock: 30 },
  ];

  fetchProductos(): {
    productoId: number;
    descripcion: string;
    stock: number;
  }[] {
    return this.productos;
  }

  updateStock(productoId: number, cantidad: number): void {
    const producto = this.productos.find((p) => p.productoId === productoId);
    if (producto) {
      producto.stock = cantidad;
      console.log(
        `Stock actualizado para ${producto.descripcion}: ${producto.stock} unidades`
      );
    }
  }
}

class AdaptadorProveedor implements IProveedor {
  private proveedorExternoAPI: ProveedorExternoAPI;

  constructor(proveedorExternoAPI: ProveedorExternoAPI) {
    this.proveedorExternoAPI = proveedorExternoAPI;
  }

  obtenerProductos(): { id: number; nombre: string; cantidad: number }[] {
    const productosExternos = this.proveedorExternoAPI.fetchProductos();
    return productosExternos.map((producto) => ({
      id: producto.productoId,
      nombre: producto.descripcion,
      cantidad: producto.stock,
    }));
  }

  actualizarInventario(productoId: number, cantidad: number): void {
    this.proveedorExternoAPI.updateStock(productoId, cantidad);
  }
}

const proveedorExternoAPI = new ProveedorExternoAPI();
const adaptadorProveedor = new AdaptadorProveedor(proveedorExternoAPI);

const productos = adaptadorProveedor.obtenerProductos();
console.log("Productos obtenidos del proveedor externo:", productos);

adaptadorProveedor.actualizarInventario(1, 45);
adaptadorProveedor.actualizarInventario(3, 25);
