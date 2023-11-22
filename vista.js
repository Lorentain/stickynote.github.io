// Vista

    function createStickyNote() {
        const body = document.body;
        const note = document.createElement("div");
        const editar = document.createElement("img");
        const borrar = document.createElement("img");
        const titulo = document.createElement("h1");
        const texto = document.createElement("p");
        note.style.left = "680px";
        note.style.top = "90px";
        note.className = "sticky-note";
        editar.id = "editar";
        editar.src = "./img/editar.png";
        borrar.src = "./img/borrar.png";
        borrar.id = "borrar";
        titulo.id = "titulo";
        texto.id = "texto";
        body.appendChild(note);
        note.appendChild(editar);
        note.appendChild(borrar);
        note.appendChild(titulo);
        note.appendChild(texto);
        titulo.textContent = "Doble click para editar titulo";
        texto.textContent = "Pulsa icono editar";
        /*
        localStorage.setItem(tituloStorage, titulo.textContent);
        localStorage.setItem(textoStorage, texto.textContent);
        contador++;
        */

        return note;
    }

    function editarTitulo(note) {
        const inputText = document.createElement("input");
        const titulo = note.querySelector("#titulo");
        titulo.replaceWith(inputText);

        inputText.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                titulo.textContent = inputText.value;
                localStorage.setItem("titulo1", titulo.textContent);
                inputText.replaceWith(titulo);
            }
        });
    }

    function editarTexto(note){
        const inputText = document.createElement("input");
        const texto = note.querySelector("#texto");
        texto.replaceWith(inputText);

        inputText.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
            texto.textContent = inputText.value;
            localStorage.setItem("texto1", texto.textContent);
            inputText.replaceWith(texto);
            }
        });
    }

    function borrarNota(note) {
        note.style.display = "none";
    }

    /*
    function localStorageNotes() {
        if(localStorage.getItem("titulo1") != null) {
            var x = localStorage.getItem("titulo1");
            var y = localStorage.getItem("texto1");

            const body = document.body;
            const note = document.createElement("div");
            const editar = document.createElement("img");
            const borrar = document.createElement("img");
            const titulo = document.createElement("h1");
            const texto = document.createElement("p");
            note.style.left = "680px";
            note.style.top = "90px";
            note.className = "sticky-note";
            editar.id = "editar";
            editar.src = "./img/editar.png";
            borrar.src = "./img/borrar.png";
            borrar.id = "borrar";
            titulo.id = "titulo";
            texto.id = "texto";
            body.appendChild(note);
            note.appendChild(editar);
            note.appendChild(borrar);
            note.appendChild(titulo);
            note.appendChild(texto);
            titulo.textContent = x;
            texto.textContent = y;
    
            return note;
        }
    }
    */
