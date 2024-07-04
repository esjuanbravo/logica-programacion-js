// Código que evalúa si los números de una lista dada son múltiplos de ciertos números para que retorne palabras.

function fizzBuzz(n) {
    let i = 0;
    
    for (i = 0; i < n; i++) {
        const mutiploDe5 = i%5 === 0;
        const mutiploDe3 = i%3 === 0;
        if(mutiploDe3 && mutiploDe5){
            console.log('fizz-buzz');
        }else if(mutiploDe3){
            console.log('fizz');
        }else if(mutiploDe5){
            console.log('buzz');
        }else{
            console.log(i); 
        }
        
    }
}

fizzBuzz(101)
