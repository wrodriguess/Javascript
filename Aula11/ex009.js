var velocidade = 29
var velocidadeMaxima = 60
var velocidadeMinima = 30

if (velocidade > velocidadeMaxima) {
    console.log("Você está acima da velocidade permitida")
} else if (velocidade >= velocidadeMinima && velocidade <= velocidadeMaxima){
    console.log("Você está na faixa de velocidade recomendada")
}else{
    console.log("Você está abaixo da velocidade recomendada")
}