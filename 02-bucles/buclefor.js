// bucles for y while
for (let i = 0; i < 5; i++) {
    console.log(`mensaje en el índice ${i}`);
}
// si quiero acceder al indice dentro de mi mensaje de consola debo de escribir comilla simple invertida --> `` no '' ni ""
// si pongo comillas dobles, no detecta la variable i @LuisPortilloPY
for(let i = 1; i<10; i++){
    // bucle 
    console.log("Cantidad")
    console.log(i)
} 
let lista =[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<10; i++){
    console.log(lista[i])
}
// Se puede realizar de esta forma o tambien usando un lenght para utlizar el tamaño especifico.
for(let i=0; i<lista.length; i++){
    console.log(lista[i])
}
// estructura for of
for(let valor of lista){
    console.log(valor)
}
// se declara la variable "valor" para poder listar 

//estructura foreach
lista.forEach(valor=>{
    console.log(valor)
})
// tambien para leer valores o hacer un listado.
let persona = {
    nombre: "Luis",
    apellido: "Portillo",
    edad: 27,
    isDeveloper:true
}

console.log(persona)
// estructura for in
let prop="edad"
for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona)
    console.log(persona[propiedad])
}

