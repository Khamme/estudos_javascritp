function contar(){
    var i = document.getElementById('ninicio')
    var f = document.getElementById('nfim')
    var p = document.getElementById('npasso')
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)
    var res = document.querySelector('div#res')
    var result 

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML='Impossível fazer a contagem! Adicione valores!'

    }else {
        if(passo === 0){
            alert("Passo inválido! Considerando PASSO = 1")
            passo = 1;
        }

        res.innerHTML = 'Contando: '

        if(fim>inicio){
            for(var c = inicio;c<=fim; c+= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
            
        }else{
            for(var c = inicio;c>=fim; c-= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}