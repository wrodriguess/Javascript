function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes() 
    msg.innerHTML = `Agora são ${hora}H${minutos}`

    if(hora >= 0 && hora <= 12){
        //Bom dia
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
        document.getElementById('rotulo').innerText = "BOM DIA"
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
        document.getElementById('rotulo').innerText = "BOA TARDE"
    }else{
        //Boa noite
        img.src = "noite.png"
        document.body.style.background = "#515154"
        document.getElementById('rotulo').innerText = "BOA NOITE"
    }
}



