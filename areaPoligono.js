// Código donde se ofrecen opciones para calcular el área de un polígono.
// Retorno: Área del polígono seleccionado.

function areaPoligono(opcion){
    switch (opcion) {

        case 1:
           let baseTri= Number(prompt('cual es la base del triangulo')); 
           let altutaTri= Number(prompt('cual es la altura del triangulo'));
           let areaTri= (baseTri*altutaTri)/2;
           alert(`El area del triangulo es de: ${areaTri}`);
            break;

        case 2:
           let baseCua= Number(prompt('cual es la base del cuadrado'));
           let areaCua= baseCua*baseCua;
           alert(`El area del cuadrado es de: ${areaCua}`);
            break;

        case 3:
           let baseRec= Number(prompt('cual es la base del rectangulo'));
           let altutaRec= Number(prompt('cual es la altura del rectangulo'));
           let areaRec = baseRec*altutaRec;
           alert(`El area del rectangulo es de: ${areaRec}`);
            break;
            
    
        default:
            break;
    }
}
areaPoligono(Number(prompt(
    "Seleccione con el numero correspondiente que area que quiere calcular:\n 1. triangulo \n 2. cuadrado \n 3. rectangulo"
)))