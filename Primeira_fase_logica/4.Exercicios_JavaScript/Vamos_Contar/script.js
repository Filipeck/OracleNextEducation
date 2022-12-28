function contar(){
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('[ERRO!] Passo inválido, considerando PASSO como 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} 🖖`
            }            
        } else {
            //Contagem Decrescente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} 🖖`
            }
        }
        res.innerHTML += `🏁`
    }
}