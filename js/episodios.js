import {Video} from './video.js'

export class Episodios extends Video{
constructor(url,nombre,duracion, genero, descripcion, epNumero){
    super(url,nombre,duracion, genero, descripcion)
  this.epNumero=epNumero
}

irAEpisodioSiguiente(){}
irAEpisodioAnterior(){}
}