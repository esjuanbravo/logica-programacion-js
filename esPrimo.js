// Código en donde valida si es un número primo o no 
// Retorno: Lista de número primos 

function esPrimo(numero){
    if(numero<2){
        return false
    }
    for(let i = 2; i<numero; i++){
        if(numero%i==0){
            return false
        }
    }
    return true;
}
// Imprimir números primos entre 1 y 100
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }