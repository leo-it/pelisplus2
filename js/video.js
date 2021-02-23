//clase padre de pelis y episodios

//import {VideoPlayer} from './videoplayer'

export class Video {
    constructor(url,nombre,duracion, genero, descripcion,id){
        this.url=url
        this.nombre=nombre
        this.duracion=duracion
        this.genero=genero
        this.descripcion=descripcion 
        this.id=id
    }
    
adelantar(){}
activarsubtitulos(){}
cambiarIdioma(){}
sonidoBajarSubir(){}
pantallaCompleta(){}
SalirPantallaCompleta(){}
guardarFavoritos(){}
guardarHistoricoUsuario(){}
velocidadDeReproduccion(){}
calificar(){}
notificarError(){}
}