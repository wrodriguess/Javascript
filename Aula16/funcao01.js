function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

var res = parimpar(4) //Chamada da função
console.log(res) 
console.log(parimpar(3)) 