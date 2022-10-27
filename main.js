// Class
class Paquete {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}

let lista_compra = [];

//  array de paquetes vacío
const paquetes = [];
paquetes.push(new Paquete("- Transporte redondo y entrada a Six Flags ($450)", 450, 1));
paquetes.push(new Paquete("- Chevallier . ($200)", 200, 2));
paquetes.push(new Paquete("- Flechabus Premium. ($300)", 300, 3));
paquetes.push(new Paquete("- Transporte Clasico el jujeño (ida o vuelta).  ($120)", 120, 4));

//  mostrar la lista
const mostrarLista = () => {
    let texto = "";
    paquetes.forEach((item) => {
        texto += `${item.id}) ${item.nombre}\n`;
    });

    //  Capturo las entradas 
    let seleccion = parseInt(prompt(`Selecciona el paquete deseado.\n${texto}`));
    return seleccion;
};

//  Función búsqueda del paquete y agregarlo a mi lista de compra.
const paqueteElegido = (id) => {
    console.log(id);
    let paqueteFind = paquetes.find((item) => item.id === id);
    lista_compra.push(paqueteFind);
    let continuar = confirm("¿Desea agregar otro paquete? \n(Aceptar = Si) (Cancelar = No)");
    if (continuar === true) {
        iniciaVenta();
    }
};

//  inicio la venta.
const iniciaVenta = () => {
    paqueteId = mostrarLista();
    paqueteElegido(paqueteId);
};


iniciaVenta();


let total = lista_compra.reduce((acc, item) => acc + item.precio, 0);
//  contar paquetes array
let numeroPaquetes = lista_compra.length;


alert("Resúmen de compra:\n\n" + "Total de paquetes: " + numeroPaquetes + "\n Total a pagar: " + total);
alert("Gracias por su compra, ¡Buen Viaje");