
import {Pago} from './pago.js'



class Usuario extends Pago{
    constructor(nombre,mail, pass,premiun) {
        super(nombre, mail)
        this.pass=pass
        this.premiun=premiun
    }
    solicitarMembresia(){}
    pagarMesMembresia(){}
    pagarAñoMembresia(){}
    solicitarReintegro(){}
    pasarAPremiun(){}
    
    ingresar(){}
    salir(){}
    editarFotoPerfil(){}
    cambiarContraseña(){}
    publicarOpiniones(){}
    enviarSugerencias(){}
    solicitarAyuda(){}//soporte tecnico
    solicitarBaja(){}
    
    registrarse(){
        
    }
} 
