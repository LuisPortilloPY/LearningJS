// capturar errores
const miFuncion = val =>{
    if(typeof val==="number"){
        return 2*val;
    }   
    // se puede usar tambien  return false;
    throw new Error("el valor debe de ser de tipo numerico");

}
//console.log(miFuncion("21"))

const numero = 8;
try {
    // le doy un codigo que puede fallar y
    console.log("esta ejecutandose de manera correcta")
    const doble = miFuncion(numero);
    } catch (e) {
    // en caso de que falle, quiero que ejecutes este codigo
    console.error("ERROR!")
    console.error(`EL VALOR DE ERROR ES : ${e}`)
}finally{
    console.log("se ejecuta siempre")
}

// ERRORES COMUNES "InternalError, SyntaxError, ReferenceError, RangeError, TypeError, URIError"