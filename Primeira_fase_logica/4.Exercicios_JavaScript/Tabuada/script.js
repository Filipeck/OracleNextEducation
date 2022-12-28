function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('select')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
        tab.innerHTML = ''
        tab.style.visibility = 'hidden'        
    } else{
        let n = Number(num.value)
        let c = 1
        tab.style.visibility = 'visible'
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}