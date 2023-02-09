class Articulo {
    constructor(codigo, descripcion, precio, cantidad, imagen) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

class Inventario {
    constructor() {
        this.articulos = [];
    }

    agregarArticulo(articulo) {
        let articuloClaveValor = {
            "Código": articulo.codigo,
            "Descripción": articulo.descripcion,
            "Precio": articulo.precio,
            "Cantidad": articulo.cantidad,
            "Imagen": articulo.imagen
        };
        this.articulos.push(articuloClaveValor);
    }

    mostrarArticulos() {
        let contenedor = document.querySelector('#contenedor');
        this.articulos.forEach(articulo => {
            let divArticulo = document.createElement('div');
            divArticulo.classList.add('articulo');
            divArticulo.className = "input-group input-group-sm mb-3";

            let pCodigo = document.createElement('p');
            pCodigo.className = "input-group-text";
            pCodigo.textContent = `${articulo['Código']}`;
            divArticulo.appendChild(pCodigo);
            

            let pDescripcion = document.createElement('p');
            pDescripcion.className = "input-group-text";
            pDescripcion.textContent = `${articulo['Descripción']}`;
            divArticulo.appendChild(pDescripcion);

            let pPrecio = document.createElement('p');
            pPrecio.className = "input-group-text";
            pPrecio.textContent = `${articulo['Precio']}`;
            divArticulo.appendChild(pPrecio);

            let pCantidad = document.createElement('p');
            pCantidad.className = "input-group-text";
            pCantidad.textContent = `${articulo['Cantidad']}`;
            divArticulo.appendChild(pCantidad);

            contenedor.appendChild(divArticulo);
        });
    }
}

const productos = document.getElementsByClassName("producto");
let boton = document.getElementById("mostrarPedido");

let inventario = new Inventario();

/*Store the "cantidad" value in the cookie*/
document.cookie = "cantidad=" + cantidad;

boton.addEventListener("click", function(){
    for (let i = 0; i < productos.length; i++) {
        let codigo = productos[i].getElementsByClassName("codigo")[0].innerHTML;
        let descripcion = productos[i].getElementsByClassName("descripcion")[0].innerHTML;
        let precio = productos[i].getElementsByClassName("precio")[0].innerHTML;
        let cantidad = productos[i].getElementsByClassName("cantidad")[0].value;
        let imagen = productos[i].getElementsByClassName("imagen")[0].getAttribute("src");
    
        let articulo = new Articulo(codigo, descripcion, precio, cantidad, imagen);
        inventario.agregarArticulo(articulo);
    }
    
    inventario.mostrarArticulos();    
});