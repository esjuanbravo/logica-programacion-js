// Código para invertir cualquier cadena de texto.
// Retorno: Cadena invertida.

function cadenaInvertida(string){
    let ultiCaracter = string.length - 1
    let cadena = ''

    for(let i = ultiCaracter; i > -1 ; i--){
        cadena += string[i] 
    }
    console.log(cadena);
}
cadenaInvertida('esto es una prueba la cual tengo que hacer')