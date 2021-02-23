import {Temporada} from './temporadas.js'
import {Episodios} from './episodios.js'
import {DomSerie} from './domSerie.js'


let htmlF="";



export class Serie{
    constructor(titulo, genero, temporadas, descripcion, img,imprimirTemporada ){
        this.titulo=titulo
        this.genero=genero
        this.temporadas=temporadas
        this.descripcion=descripcion
        this.img=img
        this.imprimirTemporada=imprimirTemporada

    }

get getTitulo(){
  return this.titulo;
}
set setTitulo(titulo){
  this.titulo= titulo;
}

get getGenero(){
  return this.genero
}
set setGenero(genero){
  this.gemerp=genero
}

get getDescripcion(){
  return this.descripcion
}

set setDescripcion(descripcion){
  this.descripcion=descripcion
}



accederTemporadas(){
  
}

calificar(){

}

//llevar a la clase favorito
 guardarfavoritos(element){
if(element.name === "verSerie"){
let favs=document.getElementById('favoritos')

let card=element.parentElement.parentElement.parentElement.innerHTML;
//console.log(element.parentElement.parentElement.parentElement);
htmlF+=card;
favs.innerHTML=htmlF;
}
}

eliminarUnaSerie(){}

  }//fin metodo render-------------------------
 //fin clase renderizarserie-------


export let uno;

// instancio series------
let serie1 = new Serie(
  "Lupin", "Accion",2 ,"años despues de una fatal injusticia", "https://i.blogs.es/3428e0/omar-sy-lupin/450_1000.jpeg",
    [
  uno= new Temporada(
      "Temporada 1 de lupin", [
        new Episodios(
          "url","No confies",45, "accion", "primera parte de este..", 1
        ),
        new Episodios(
          "url","Sigue adelante",45, "accion", "primera parte de este..", 2
        )
      ] 
    ),
    new Temporada(
      "Temporada 2de lupin", [
        new Episodios(
          "url","No confies",45, "accion", "primera parte de este..", 1
        ),
        new Episodios(
          "url","Sigue adelante",45, "accion", "primera parte de este..", 2
        )
      ] 
    )
  ] )

  let serie2 = new Serie(
    "Tres-Porciento", "Accion",1, "años despues de una fatal injusticia", "https://spoiler.bolavip.com/export/sites/bolavip/img/2020/08/13/netflix_3x.jpg_426505592.jpg",
    [
      new Temporada(
        "Teporada 1 de 3%", [
          new Episodios(
            "url","No confies",45, "accion", "primera parte de este..", 1
          ),
          new Episodios(
            "url","Sigue adelante",45, "accion", "primera parte de este..", 2
          )
        ]
      ),
      new Temporada(
        "Teporada 1 de 3%", [
          new Episodios(
            "url","No confies",45, "accion", "primera parte de este..", 1
          ),
          new Episodios(
            "url","Sigue adelante",45, "accion", "primera parte de este..", 2
          )
        ]
      )
    ])
//------fin de instanciado de objetos.....

export  let arraySeries=[serie1,serie2];
let arrayFavoritos=[]
//console.log(arrayFavoritos);
//------fin click boton favoritos.....


//arraySeries.push(serie2)

export let rendSerie=new DomSerie();
//rendSerie.renderizarSeries();


//------click boton favoritos.....
document.getElementById('series').addEventListener('click',function(e){
  const dom= new DomSerie();
  serie1.guardarfavoritos(e.target);
 // console.log(e.target); //comprueba con e.target si es el enlace al que le dio click el usuario
  })
  

  //renderiza Acordeon del modal de series
 /* let acordeon =new DomSerie()
acordeon.renderizarAcordeon() */