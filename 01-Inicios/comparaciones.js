// comparaciones 
// igualdad
if (4==4) {
    console.log(true)
}
// hace una comparacion debil
let a="hola"
let b="HOLA"
if (a==b){
    console.log(true)

}else{
    console.log(false)
}
// con === compara hasta el tipo
let c=5
let d="5"
if(c = d){
    console.log(true)

}else{
    console.log(false)
}
// aca podemos observar que en simple igual compara los valores

if(c==d){
    console.log(true)

}else{
    console.log(false)
}
// aca podemos observar que siguen siendo iguales porque el contenido es estrictamente igual
const constante=0
let cons=0
if(cons===constante){
    console.log(true)

}else{
    console.log(false)
}
// aca se puede observar que ya no son iguales

