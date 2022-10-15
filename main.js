
let nombre = "";
let ingreso = "";
let salida = "";
let adultos = "";
let ninios = "";
pedirDatos();
comenzarReservacion();


function pedirDatos() { //pido datos al cliente para comenzar su reserva
    do {
        nombre = prompt("ingrese su nombre");
        ingreso = prompt("Ingrese su fecha de ingreso");
        salida = prompt("ingrese su fecha de salida");
        adultos = prompt("cuantos adultos?");
        ninios = prompt("cuantos niños?");
    } while (!datosValidos(nombre, ingreso, salida, adultos, ninios));





}

function datosValidos(nombre, ingreso, salida, adultos, ninios) {
    if ((nombre !== "" && ingreso !== "" && salida !== "" && adultos !== "" && ninios !== "")

        &&

        (nombre !== null && ingreso !== null && salida !== null && adultos !== null && ninios !== null)) {
        return true;
    }
    else {
        alert("revise los datos ingresados, por favor e intente nuevamente PERRITO");
    }





}

function comenzarReservacion() {
    alert("Su reserva fue realizada con exito " + nombre + "\n"
        + "Reserva con fecha de ingreso para el: " + ingreso + "\n"
        + "Con fecha de salida para el: " + salida + "\n"
        + "Cantidad adultos: " + adultos + "\n"
        + "Cantidad de niños: " + ninios
    );

    let resp = confirm("Desea concretar la compra de sus pasajes?:");

    if (resp) {

        alert("Gracias por reservar en hoteljs, la pagina se redireccionara al sector de pagos.");

    }

    else {

        alert("Aguardamos su futura compra" + "\n" +
            "No dude en contacarse con nosotros via redes sociales o al 0800-521-4567, gracias.");
    }





}

