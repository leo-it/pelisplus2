
export default function searchFilters(input, selector){
document.addEventListener("keyup", (e) =>{
    if(e.target.matches(input)){
        console.log(e.target.value);
        document.querySelectorAll(selector).forEach(el =>
         el.textContent.toLowerCase().includes(e.target.value)
        ?el.classList.remove("filter")
        :el.classList.add("filter")
    );
 }
})
}
//en el card-filter que es el imput va a buscar el contenido de todos los que tengan clase card1
searchFilters(".card-filter",".tarjeta");