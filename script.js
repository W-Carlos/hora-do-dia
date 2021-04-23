var intervald = window.setInterval(() => {carregar()
//relogio em tempo real
}, 1000)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `Agora são <strong>${hora}:${minuto}:${segundos}</strong> horas.`

    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = 'img/manha2.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //Noite
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}