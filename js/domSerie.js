import {Serie,  arraySeries,} from './series.js'
import {Temporada} from './temporadas.js'

let arrayModal=[]
export class DomSerie{
     
 

    renderizarSeries(){
      const seriesRend = document.querySelector(".series");
   if(arraySeries.length){
     let htmlSeries="";
     let i = 0;
     //console.log(arraySeries[0].imprimirTemporada[0]);

     for(let serie of arraySeries){
       let tempo =serie.imprimirTemporada
     // console.log(tempo[0].nombreTemporada);
     // console.log(serie);

       const divSeries = `
       <div class="col">
       <div class="card tarjeta">
         <img src="${serie.img}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${serie.titulo}</h5>
           <p  class="card-text">Genero: ${serie.genero}</p>
           <p class="card-text">Descripcion: ${serie.descripcion}</p>
           <p class="card-text">Temaporadas: ${tempo.length}</p>
         

           <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalSerie${serie.titulo}">
          modal ver
        </button>

        <!--  <a   class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalSerie${serie.titulo} id="" >VER</a> -->
           <button type="btnFavorito" id="fav" name="verSerie" class="btn btn-secondary">Favoritos</button>
           </div>
       </div>
       </div>
-->

       <!-- Modal -->
       <div class="modal fade" id="modalSerie${serie.titulo}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">${serie.titulo}</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="temporadasAcordeon">

                  <ul class="ulTempo">
                  
                  </ul>

        


                </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
             </div>
           </div>
         </div>
       </div>
       
       

       `;

  /*+++++++++++++++++++*/
 const serieString = Object.keys(serie).map(i=> serie[i])

   const temporadaUl = JSON.stringify(document.querySelector(".ulTempo"))
   console.log(typeof(serieString));
   console.log(serieString[5]);
/*console.log(temporadaUl[0]);
temporadaUl.innerHTML=`
${serieString[5]}
`*/

        /*  serieString.forEach(([key,value]) => {
            
          console.log(value.descripcion);         
      
       });
*/
       htmlSeries += divSeries;
       i++
     };

     



   seriesRend.innerHTML=htmlSeries;




  
   } else{
     seriesRend.innerHTML='';
       }
      }     

      renderizarVacio(){
        let pelisList =document.querySelector(".series")

          let html = "";
          pelisList.innerHTML = html;

         
          };
      
          renderTemporada(){
         
          }

}//fin clase
//acordeon.renderizarAcordeon()
