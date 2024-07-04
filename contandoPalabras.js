// Código que cuenta todas las palabras dentro de un string.
// Retorno: Objeto con el número de palabras totales dentro de la cadena de texto dada.

let texto = 'uno uno, dos. (Tres),';


function conteoPalabras(texto) {
  let textoLimpio = texto.replace(/[().,!?]/g, '').toLowerCase();
  let array = textoLimpio.split(' ')

  let conteoPalabras = {}

  for (const palabra of array) {
    conteoPalabras[palabra] = (conteoPalabras[palabra] || 0) + 1 // parecido a un condicional 
  }

console.log(conteoPalabras);
}
conteoPalabras(texto)