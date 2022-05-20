function verificar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
        var hor = window.document.querySelector('input#txthor')
        var hora = Number(hor.value)
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {
        //Bom dia
        img.src='docs/manha.png'
        document.body.style.background = '#CDD372'
        txttitulo.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde
        img.src='docs/tarde.png'
        document.body.style.background = '#855B4B'
        txttitulo.innerHTML = 'Boa Tarde'
    } else {
        //Boa noite
        img.src='docs/noite.png'
        document.body.style.background = '#17374A'
        txttitulo.innerHTML = 'Boa Noite'
    }
}