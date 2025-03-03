// console.log("hola mundo")
const parrafos= document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// console.log(parrafos)
parrafos.forEach(parrafito=>{
    parrafito.addEventListener("dragstart",(e)=>{
        parrafito.classList.add("dragging")
        e.dataTransfer.setData("id",parrafito.id)
        // console.log("arrastrando el parrafo: "+parrafo.innerText)
        // console.log("hola"+parrafo.innerHTML)
    })
    parrafito.addEventListener("dragend",()=>{
        parrafito.classList.remove("dragging")
        // console.log("soltado el parrafo: "+parrafo.innerText)
    })
})

// console.log(secciones)
secciones.forEach(seccion=>{
    seccion.addEventListener("dragover",(e)=>{
        e.preventDefault()
        // const parrafoArrastrado = document.querySelector(".dragging")
        // seccion.appendChild(parrafoArrastrado)
    })
    seccion.addEventListener("drop" ,(e)=>{
        // console.log("soltado")
        const idparrafo=e.dataTransfer.getData("id")
        // console.log("id parrafo:"+idparrafo)
        const parrafoArrastrado=document.getElementById(idparrafo)
        seccion.appendChild(parrafoArrastrado)     
    })
})
// forma de open bootcamp para el drag and drop


// la difrencia entre innerText e innerHTML es que innerText solo devuelve el texto que se encuentra dentro de la etiqueta, 
// mientras que innerHTML devuelve el texto y las etiquetas html que se encuentran dentro de la etiqueta

// innerText: devuelve el texto que se encuentra dentro de la etiqueta
// innerHTML: devuelve el texto y las etiquetas html que se encuentran dentro de la etiqueta
const divisor=document.querySelectorAll(".img")
const parrafosimg=document.querySelectorAll(".parrafoimg")
console.log(parrafosimg)



parrafosimg.forEach(moviendo => {
    moviendo.addEventListener("dragstart", (e) => {
        moviendo.classList.add("dragging");
        console.log("moviendo")
    });
    moviendo.addEventListener("dragend", () => {
        moviendo.classList.remove("dragging");
        console.log("soltando")
    });
});
console.log(divisor)

divisor.forEach(contenedorimg=>{
    contenedorimg.addEventListener("dragover",(e)=>{
    e.preventDefault()
    })
    contenedorimg.addEventListener("drop",(e)=>{
        const imgarrastrada = document.querySelector(".dragging")
        contenedorimg.appendChild(imgarrastrada)
    })
})
