
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log('==================================')
console.log(`Agora são exatamente ${hora}:${minutos}`)
console.log('----------------------------------')
if (hora < 12){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa tade')
}else if (hora > 18){
    console.log('Boa noite')
}
