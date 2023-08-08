var now = new Date()
var hora = now.getHours()
console.log(`agora são exatamente ${hora}`)
if(hora<12){
    console.log('bom dia!!!')
}else if( hora>12 && hora<18){
    console.log('boa tarde!!!')
} else{
    console.log('boa noite!!!')
}
