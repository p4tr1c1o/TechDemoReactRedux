class Producto {
    productoId: number;
    nombre: string;
    descripcion: string;
    id: number;

    Producto(init?: Partial<Producto>) {
        Object.assign(this, init);
    }
}

export default Producto;