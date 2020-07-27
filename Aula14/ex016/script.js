function contar(){
    var inicio = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('passo')
    if (passo.value == 0) { 
        passo.value = 1
        alert("[IMPOSSIVEL CONTAR] \n PASSO DEFINIDO COMO 0, O PASSO FOI ALTERADO PARA 1.")
    }
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados")
        res.innerHTML = 'Impossivel Contar'
    }else{
        res.innerHTML = 'Contando. . .<br>'
        var i = parseInt(inicio.value)
        var f = parseInt(fim.value)
        var p = parseInt(passo.value)

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`  
    }
}