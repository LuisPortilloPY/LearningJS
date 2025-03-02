const boton=document.querySelector("#btn");
console.log(boton);
boton.addEventListener("click",()=>{
    // console.log("haciendo click")
    
    
    // esto sirve para mostrar un mensaje en la pantalla
    // alert("se ha hecho click")
    
    
    // esto sirve para confirmar.. pero solo se puede hacer click en aceptar o cancelar y no se puede hacer nada mas
    // confirm("estas de acuerdo=?") && console.log("OK")
    
    
    // esto sirve para gestionar los dialogos de confirmacion en caso de confirmacion y negacion
    // confirm("¿Estas de acuerdo?") 
    // ? console.log("Se ha hecho click en SI") 
    // : console.log("Se ha hecho click en NO")
    
    // TAMBIEN SE PUEDE REALIZAR DE ESTA OTRA FORMA LA CUAL SERIA LA MAS AANTIGUA Y LA ANTERIOR LA MAS NUEVA
    const respuesta = confirm("¿Estas de acuerdo?");
    if(respuesta){
        console.log("Se ha hecho click en SI")
    }else{
        console.log("Se ha hecho click en NO")
    }
})



const btninfor=document.querySelector("#btn-info");
btninfor.addEventListener("click",()=>{
    const nombre=prompt("¿Cual es tu nombre?");
    if(nombre){
        console.log("Ok, un gusto en saludarte :" +nombre)
    }else{
        console.log("No se ha introducido ningun nombre")
    }
})


const lista=[
    {
        nombre:"Juan",
        edad:20
    },
    {
        nombre:"Pedro",
        edad:30
    },
    {
        nombre:"Maria",
        edad:40
    }
]
console.log(lista)
console.table(lista)
// una forma mas facil de ver los datos en consola