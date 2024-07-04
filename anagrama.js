// Código para saber si es un anagrama.
// Retotorno: true o false.

function anagrama(string1, string2){
    let string1a = string1;
    let string2a = string2;

    let anagrama1 = string1a.split('').sort().join('');
    let anagrama2 = string2a.split('').sort().join('');
    if(anagrama1 == anagrama2){
        console.log(true);
    }else{
        console.log(false);
    }
}
anagrama('juan', 'papa')