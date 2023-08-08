function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = '/aula13/img/manhã.png'
        document.body.style.background = '#A29A8F'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '/aula13/img/tarde.png'
        document.body.style.background = '#7d4323d9'
    } else {
        img.src = '/aula13/img/noite.png'
        document.body.style.background = '#162B2A'
    }
}