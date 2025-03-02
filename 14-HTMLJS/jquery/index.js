// $(selector).accion()
// $(h1).hide();


// $(document).ready(()=>{

// }
// )
//  la version completa de como comenzar el js una vez que se cargue todo el documento
// y la version corta seria $(()=>{});
// ejemplo
$(()=>{
    // selectores
    // id="el-1"=>"#el-1" si quiero seleccionar un id con #
    // class="el-2"=>".el-2" si quiero seleccionar una clase con .
    // ejemplos
    // $("#el-1").hide();
    // $("#el-2").hide();
    // $("#el-3").hide();
    $(".hide-btn").click(()=>{
        console.log("ocultando...")
        // $("#el-1").hide();
        // $("#el-1").hide(1000); para hacer que desaparezca en un tiempo
        // $("#el-1").fadeOut(1000); similar al anterior pero con un efecto
        $("#el-1").slideUp(1000); 
        // similar al anterior pero con otro efecto
    })
    $(".show-btn").click(()=>{
        console.log("mostrando...")
        $("#el-1").show();
    })


    // tambien podemos hacer efectos personalizados utilizando css
    // por ejemplos
    
    // $("#el-2").click(()=>{
        
    //     // poner el background color en rojo y se pueden agregar varios... ejemplo=>
    //     $("#el-2").css("background-color","red").css("color","white").css("font-size","30px");

    // })
    // puede ser tambien con doble click
      $(".h1").click(()=>{
        console.log("haciendo doble click")
    //     // poner el background color en rojo y se pueden agregar varios... ejemplo=>
        $(".h1").css("background-color","red").css("color","white").css("font-size","30px");

   })
//    no me funciona el doble click


// para añadir nuevo elemento
// si queremos ponerlo al final es con .append y al principio con .prepend
$(".last-element").click(()=>{
    console.log("añadiendo nuevo elemento al final")    
    $("ul").append("<li>Elemento añadido al final</li>")
})
$(".first-element").click(()=>{
    console.log("añadiendo nuevo elemento al principio")    
    $("ul").prepend("<li>Elemento añadido al principio</li>")
})


$("li").mouseenter((elemento)=>{
    console.log("mouse enter")
    // la funcion mouseenter es para cuando el mouse entra en el elemento
    elemento.currentTarget.style.backgroundColor = "red";
})
$("li").mouseleave((elemento)=>{
    console.log("mouse leave")
    // la funcion mouseleave es para cuando el mouse sale del elemento
    elemento.currentTarget.style.backgroundColor = "white";
    elemento.currentTarget.style.color="cyan";
    elemento.currentTarget.style.fontSize="20px";
}
)

// $("li").hover((elemento)=>{
//     console.log("hover")
//     // la funcion hover es para cuando el mouse entra y sale del elemento
//     elemento.currentTarget.style.backgroundColor = "red";
// })
})