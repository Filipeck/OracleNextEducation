function verificar(){
    let ano = new Date().getFullYear();
    let formularioAno = document.getElementById('ano')
    let resultado = document.getElementById('res')

    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(formularioAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './images/menino_4')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './images/jovem_H')
            }else if(idade < 40){
                //jovem adulto
                img.setAttribute('src', './images/adulto_H')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', './images/adulto2_H')
            }else{
                //idoso
                img.setAttribute('src', './images/idoso_H')
            }
        } else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './images/menina_4')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './images/jovem_M')
            }else if(idade < 40){
                //jovem adulto
                img.setAttribute('src', './images/adulta_M')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', './images/adulta2_M')
            }else{
                //idoso
                img.setAttribute('src', './images/idosa_M')
            }
        }
        resultado.innerHTML = genero + idade
    }
}