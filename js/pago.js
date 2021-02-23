

export class Pago {
    constructor(nombre,mail,dni,costo,tarjeta){
        this.nombre=nombre
        this.mail=mail
        this.dni=dni
        this.costo=costo
        this.tarjeta=tarjeta
    }
    recibirPago(){}
    confirmarPagoCancelado(){}
    realizarDescuento(){}
    reintegro(){}
    editarPago(){}
    generarFactura(){}
    enviarFactura(){}
}