function fatorial(n){
    let fat = 1 //Caso inicie com zero o resultado da multiplicação será sempre zero
    for (let c = n; c > 1; c--) {
        fat *= c     
    }
    return fat
}

console.log(fatorial(5))