import {Video} from './video.js'
export class Peliculas extends Video{
    constructor(url,nombre,duracion, genero, descripcion,img,id){
    super(url,nombre,duracion, genero, descripcion,id)
    this.img=img
        }
  recomendarPelicula(){}

  

  
  
  
    

}

const peli1 = new Peliculas("https://www.youtube.com/embed/3XgLK9-NnR4","Greenland",1.22,"accion","Basada en la historia de un sobrevi En 1984, en plena Guerra Fría, Diana Prince, conocida como Wonder Woman, se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas....","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeizoIxCTN4F3jLHVZoK7SzbIlsOsSCOJyu39Dt5Ee1xS704if","pp1")
const peli2 = new Peliculas("https://www.youtube.com/embed/vON5kiGf1TI","Los otros",1.22,"accion","Basada en la historia de un sobrevi En 1984, en plena Guerra Fría, Diana Prince, conocida como Wonder Woman, se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas....","https://images-na.ssl-images-amazon.com/images/I/41UccU043aL._SY445_.jpg","pp2")
const peli3 = new Peliculas("https://www.youtube.com/embed/APlQGc9NCbI","Mohana",1.22,"accion","Basada en la historia de un sobrevi En 1984, en plena Guerra Fría, Diana Prince, conocida como Wonder Woman, se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas....","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0I_NLZX7ywKTPOE6dP5IORzdjWJvBLz7ZLeyVR0HHuXieSF6l://images-na.ssl-images-amazon.com/images/I/41UccU043aL._SY445_.jpg","pp3")


export let arrayPeliculas= [peli1,peli2,peli3]