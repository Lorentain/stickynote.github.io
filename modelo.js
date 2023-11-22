// Modelo
class nota {
    constructor(titulo,texto, id) {
        this.titulo = titulo;
        this.text = texto;
        this.fechaCreacion = Date.now();
        this.id = id;
    }
}

class listaNotas {
    idNota = 0;
    constructor() {
        this.listaNotas = [];
    }

    añadirNota(titulo, texto) {
        this.listaNotas.push(new nota(titulo,texto,this.idNota++));
    }

    editarNota(id, nuevoTitulo, nuevoTexto) {
        posicion = this.localizarNota(id);

        if(posicion >= 0) {
            this.listaNotas[posicion-1].titulo = nuevoTitulo;
            this.listaNotas[posicion-1].text = nuevoTexto;
        }
    }

    //- Devuelve
    //- La posición en la que esta la nota con id o -1 en caso contrario

    localizarNota(id) {
        let i, encontrado;
        for(i = 0, encontrado = false; !encontrado && i<this.listaNotas.length;i++) {
            if(this.listaNotas[i].id == id) {
                encontrado = true;
            }

            if(encontrado) {
                return i;
            }
        }
    }

    eliminarNota(id) {
        posicion = this.localizarNota(id);

        if(posicion >= 0) {
            this.listaNotas.splice(posicion-1,id);
        }
    }
}
