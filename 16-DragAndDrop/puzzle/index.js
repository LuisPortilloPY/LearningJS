const piezas = document.querySelectorAll(".pieza");
const zonaPuzle = document.querySelector(".zona-puzle");

piezas.forEach(pieza => {
    pieza.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("id", pieza.id);
        setTimeout(() => pieza.style.display = "none", 0);
    });

    pieza.addEventListener("dragend", (e) => {
        setTimeout(() => pieza.style.display = "block", 0);
    });
});

zonaPuzle.addEventListener("dragover", (e) => {
    e.preventDefault();
});

zonaPuzle.addEventListener("drop", (e) => {
    e.preventDefault();
    const idPieza = e.dataTransfer.getData("id");
    const pieza = document.getElementById(idPieza);
    zonaPuzle.appendChild(pieza);
});