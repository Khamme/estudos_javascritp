function carregar() {
    var msg = document.getElementById('txt')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora>=0 && hora < 12) {
        img.src = "Imagens/manha_250px.png"
        document.body.style.background = "#5B9CD6"
        //Boa tarde
    }else if (hora>=12 && hora < 18) {
        img.src = "Imagens/tarde_250px.png"
        document.body.style.background = "#D39774"
        //Boa tarde
    }else{
        img.src = "Imagens/noite_250px.png"
        document.body.style.background = "#0C2567"
        //Boa noite
    }
}
