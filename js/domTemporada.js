/*import {arraySeries} from './series.js'

class domTemporada {
    

    renderizarTemporada(){
        const seriesRend = document.querySelector(".series");
   if(arraySeries.length){
     let htmlSeries="";
     let i = 0;
     for(let serie of arraySeries){
       const divSeries = `
       <div class="accordion-item">
       <h2 class="accordion-header" id="flush-headingOne">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           Accordion temporada
         </button>
       </h2>
       <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
         <div class="accordion-body">
           Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
         </div>
       </div>
     </div>
       `;
       htmlSeries += divSeries;
       i++
     };
   seriesRend.innerHTML=htmlSeries;
   } else{
     seriesRend.innerHTML='';
       }
      }     
  
      





      renderizarAcordeon(){
  



        const temporadasRend = document.querySelector("#temporadasAcordeon");
       if(arraySeries.length){
    
        let htmlAcordeon="";
        let i = 0;
        //console.log(arraySeries[0].imprimirTemporada[0]);
    
        for(let serie of arraySeries){
          let tempo =serie.imprimirTemporada
         //console.log(tempo[0].nombreTemporada);
        // console.log(serie);
    
    console.log("funciona el for");
       let divAcordeon =  `
       <!-- acordeon -->
       <div class="accordion accordion-flush" >
    
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    ${tempo[1].nombreTemporada}
    </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
    </div>
    </div>
    
    
      <!-- fin Acordeon -->
    `
    htmlAcordeon += divAcordeon;
    
    }//fin for
    //temporadasRend.innerHTML=htmlAcordeon;
       }else{
        temporadasRend.innerHTML="";
       }
    }//fin metodo





  
}

let dos =new domTemporada()
dos.renderizarTemporada()

*/