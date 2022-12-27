function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let hora = new Date().getHours();
    // let hora = 22;

    msg.innerHTML = `<h2>Agora são <strong>${hora}</strong> horas.</h2>`

    if(hora >= 0 && hora < 12){
        img.src = './images/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.style.color = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = './images/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.style.color = '#b9846f'
    } else{
        img.src = './images/noite.jpg'
        document.body.style.background = '#515154'
        msg.style.color = '#515154'
    }
}


