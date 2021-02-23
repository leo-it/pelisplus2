import {Pago} from './pago.js'
import {Membresia} from './membresia.js'


export class MembresiaDorada extends Pago,Membresia {
    constructor(nombre,mail,dni,costo,validez,descripcion,pago){
        super(nombre,mail,dni,costo,validez,descripcion,pago)
      
    }
  
}