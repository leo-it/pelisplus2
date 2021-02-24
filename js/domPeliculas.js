import {Peliculas, arrayPeliculas} from './peliculas.js'
let arrayModal=[]
export class DomPeliculas{
  
    renderizarPeliculas(data){ //parametro lista de datos que guarda firestore
      let pelisList;
      if (data.length) { //si la lista tiene datos
        let html = "";
        for (let doc of data) {
         pelisList =document.querySelector(".pelis")
          //para acceder a los datos doc.data
          const pelicula = doc.data();
         // console.log(pelicula)
          const div = `
          <div class="col">
          <div class="card tarjeta">
            <img src="${pelicula.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pelicula.titulo}</h5>
              <p class="card-text" >Genero: ${pelicula.genero}</p>
              <p class="card-text">descripcion: ${pelicula.descripcion}</p>

        
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalPeli${pelicula.id}">
              ver
            </button>
    
            <!--  <a   class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalPeli${pelicula.id} id="" >VER</a> -->
               <button type="btnFavorito" id="fav" name="verPeli" class="btn btn-secondary">Favoritos</button>
               </div>
           </div>
           </div>

    
                    <!-- Modal -->
                    <div class="modal fade" id="modalPeli${pelicula.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${pelicula.titulo}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body ratio ratio-16x9" id="">
              
                              <iframe width="560" height="315" src="${pelicula.iframe}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              
              
              
                              </div>
                          <div class="modal-footer">
                          <p class="card-text text-center mx-auto">descripcion: ${pelicula.descripcion}</p>                            <button type="button" class="btn btn-primary"><i class="fas fa-thumbs-up"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
               </div>
            </div>
          </div>
        </div>
        `;
        html += div;
       
        };
        pelisList.innerHTML = html;
    
    
        
      } else {
        pelisList.innerHTML = [];
      }
      }    
      
      

      renderizarVacio(){
        let pelisList =document.querySelector(".pelis")

          let html = "";
          pelisList.innerHTML = html;

         
          };
      

           guardarfavoritos(element){
            if(element.name === "verPeli"){
            let favsP=document.getElementById('favoritos')
            
            let card=element.parentElement.parentElement.parentElement.innerHTML;
            //console.log(element.parentElement.parentElement.parentElement);
            htmlF+=card;
            favsP.innerHTML=htmlF;
            }
            }



            renderizarPelis2(){
              const pelisRend = document.querySelector("#peliculas2");
           if(arrayPeliculas.length){
             let htmlPeli2="";
             let i = 0;
        
             for(let peli of arrayPeliculas){
        //console.log(peli);
               const divPelis2 = `
               <div class="col card1">
               <div class="card tarjeta">
                 <img src="${peli.img}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${peli.nombre}</h5>
                   <p  class="card-text">Genero: ${peli.genero}</p>
                   <p class="card-text">Descripcion: ${peli.descripcion}</p>

                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalPeli${peli.id}">
                ver
              </button>
        
                <!--  <a   class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalPeli${peli.id} id="" >VER</a> -->
               <button type="btnFavorito" id="fav" name="verPeli" class="btn btn-secondary">Favoritos</button>
               </div>
           </div>
           </div>

    
                    <!-- Modal -->
                    <div class="modal fade" id="modalPeli${peli.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${peli.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body ratio ratio-16x9" id="">
              
                              <iframe width="560" height="315" src="${peli.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              
              
              
                              </div>
                          <div class="modal-footer">
                          
                          <p class="card-text text-center mx-auto">descripcion: ${peli.descripcion}</p>         
                          <button type="button" class="btn btn-primary"><i class="fas fa-thumbs-up"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
               
        
               `;
        
               htmlPeli2 += divPelis2;
               i++
             };
        
             pelisRend.innerHTML=htmlPeli2;
        
        
        
        
          
           } else{
            pelisRend.innerHTML='';
               }
              } 




              renderizarVacioPeli(){
                let pelisRend  =document.querySelector(".pelis2")
            
                  let htmlPeli2 = "";
                  pelisRend.innerHTML = htmlPeli2;
            
                 
                  };



      
    }

    
    export let peli1= new DomPeliculas()

/*

//------click boton favoritos.....
document.getElementById('peliculas').addEventListener('click',function(e){
  peli1.guardarfavoritos(e.target);
}; */