// estructuras de control
// bifurcaciones o if
if (false){
    console.log("verdadero")
}else{
console.log("false")
}
// ejemplos
let saldo=50
let sacar=60
if(saldo>sacar){
console.log("Adelante")
}else{
    console.log("No cuenta con dinero suficiente")
}
// uso de de switch
let nota = ;
let resultado;
switch (true) {
    case nota>=9&&nota<=10:
        resultado="5"
        break;
    case nota>=7&&nota<=8:
        resultado="4"
        break;
    case nota>=5&&nota<=6:
        resultado="3"
        break;
    case nota>=4&&nota<=5:
        resultado="2"
        break;
    case nota<4:
        resultado="1"
        break;
    default:
        break
}
console.log(resultado)

