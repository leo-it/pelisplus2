export class Membresia {
    constructor(costo,descripcion,tipo, tiempo,cantPeliculas){
        this.costo=costo
        this.descripcion=descripcion
        this.tipo=tipo
        this.tiempo=tiempo
        this.cantPeliculas=cantPeliculas
    }
    //membresia prueba seria clase nueva
    otorgarContenidoPlateado(){
        return new Membresia(300,"lorem10","Plateado",1,500)
    }
    
    otorgarContenidoDorado(){
        return new Membresia(3000,"lorem10","Plateado",12,1100)

    }
    
    darDeAltaMembresia(){
        if (this.tipo==="dorado"){
            return this.otorgarContenidoDorado()
        }else{
            return this.otorgarContenidoPlateado()
        }
    }
    DarDeBaja(){}
    enviarPromociones(){}
    suscribirNoticiasParaMasBeneficios(){}
    enviarRecomendacion(){}
    cambiarDeMembresia(){}
    otorgarDescuento(){}
    
    
}