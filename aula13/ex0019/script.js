function verificar(){
     var data = new Date
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if (fano.value.length == 0 || fano.value > ano){
        window.alert('Ano invalido, verificar a informação')
     } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano-Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.marginTop='10px'
        img.style.width='300px'
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade>=0 && idade <=10){
                img.setAttribute('src', 'bebeM.png')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoM.png')
            }else{
                img.setAttribute('src', 'idosoM.png')
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade>=0 && idade <=10){
                img.setAttribute('src', 'bebeF.png')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemF.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoF.png')
            }else{
                img.setAttribute('src', 'idosoF.png')
            }
        }
        res.computedStyleMap.textAlign= 'center'
        res.innerHTML= `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}