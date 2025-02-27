const texto = document.getElementById("prueba")
console.log(texto)

texto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    texto.innerText = evento.detail.texto
    texto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: color,
        }
    })
    texto.dispatchEvent(evento)
}
// evento personalizado
cambiarTexto("Hola mundo", "red")