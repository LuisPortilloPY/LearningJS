
//declaraciones de strings... tipos 
let str="texto largo"
console.log(str)
// puede utilizarse comillas simples y dobles
let str_sng='TEXTO COMILLA SIMPLE'
console.log(str_sng)
let str_dbl="texto comilla doble"
console.log(str_dbl)

// entrecomillado
let str_comillas="este texto va entre \"comilla\""
console.log(str_comillas)
// se puede con la barra comillas o con comillas siemples y luego comillas dobles
let str_comillas_sng='OTRO TEXTO ENTRE "COMILLAS"'
console.log(str_comillas_sng)
let str_comillas_inverso="OTRO TEXTO ENTRE 'COMILLAS'"
console.log(str_comillas_inverso)
// del lado inverso sale o debe salir igual
let str_comillas_inverso_barras='OTRO TEXTO ENTRE \'COMILLAS\''
console.log(str_comillas_inverso_barras)


// comillas invertidas o backticks
let str_backticks=`HOLA QUE TAL`
console.log(str_backticks)
// esto es mejor utilizarlo para concatenar un texto a una varibale
let nombre = "Luis"
let apellido = "Portillo"
console.log(`Hola, ${nombre} ${apellido}`)


let plantilla = `
<html>
    <h1>Pagina Web de ${nombre} ${apellido} </h1>
    <p>Esto es un parrafo</p>
    </html>
    `
    console.log(plantilla)
    let libros = ["Empieza por el porque", "El monje que vendio su ferrari", "El poder del ahora"]
    console.log(libros)