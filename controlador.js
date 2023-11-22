window.onload = () => {
    const addNoteButton = document.getElementById("addNote");

    addNoteButton.addEventListener("click", () => eventosNota(createStickyNote()));
};

function eventosNota(note) {

    let agarrado = false;
    let posX, posY;

    note.addEventListener("mousedown", (e) => {
        agarrado = true;
        posX = e.clientX - note.getBoundingClientRect().left;
        posY = e.clientY - note.getBoundingClientRect().top;
    });

    note.addEventListener("mousemove", (e) => {
        if (agarrado) {
            note.style.left = e.clientX - posX + 'px';
            note.style.top = e.clientY - posY + 'px';
        }
    });

    note.addEventListener("mouseup", () => {
        if (agarrado) {
            agarrado = false;
        }
    });
    // Editar titulo doble Click
    note.addEventListener("dblclick", () => editarTitulo(note));

    // Borrar nota
    const borrarButton = note.querySelector("#borrar");

    borrarButton.addEventListener("click",() => borrarNota(note));

    // Editar texto boton
    const editarButton = note.querySelector("#editar");

    editarButton.addEventListener("click",() => editarTexto(note));
}