class Articulo {
    constructor(codigo, descripcion, precio, cantidad, imagen) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.cantidad = cantidad;
      this.imagen = imagen;
    }
  
    mostrar() {
      return `${this.cantidad} uds. ${this.descripcion} a ${this.precio} €`;
    }
  }
  
  const articulos = [
    new Articulo("A001", "Ordenador PIV", 650.5, 0, "ORDENADOR1"),
    new Articulo("A002", "Ordenador PIV mod. 2", 683.5, 0, "ORDENADOR2"),
    new Articulo("B001", "Impresora HP", 150.9, 0, "IMPRESORA"),
    new Articulo("B002", "Escáner HP", 95.5, 0, "SCANNER"),
    new Articulo("C001", "Altavoces Sony", 110.5, 0, "ALTAVOCES"),
    new Articulo("D001", "Teclado Logitech", 65.8, 0, "TECLADO"),
    new Articulo("D002", "Ratón Logitech", 35.5, 0, "RATON"),
    new Articulo("E001", "Micrófono Shure", 50.2, 0, "MICRO"),
    new Articulo("E002", "Webcam Logitech", 65.8, 0, "WEBCAM"),
  ];
  