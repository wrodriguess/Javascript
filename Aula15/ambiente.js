 //Criando array 
 let num = [5, 8, 2, 9, 3]

num.push(0)  //Adicionando mais um elemento no FINAL do array
console.log("Tamanho do array: " + num.length) //Tamanho do array
num.sort() //Ordena os valores do vetor (em ordem crescente)

//console.log(`Nosso vetor é o: ${num}`)
//console.log(num)

//Exibir o array utlizando laço de repetição
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
console.log('#############################')
//Especie de foreach - para cada posição em um, mostrar num[pos]
for(let pos in num){
    console.log(num[pos])
}

console.log("O valor foi encontrado na posição: " + num.indexOf(9)) //Retorna a posição do array onde o número passado como parametro foi encontrado, caso não encontre retorna -1