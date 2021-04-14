let n = document.getElementById('num')
let form = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []
let valores_ord = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    if(isNumero(n.value) && !inLista(n.value, valores)){
        let num = Number(n.value)
        let item = document.createElement('option')
        valores.push(num)
        
        for(var i in valores){
        item.text = `Número ${valores[i]} adicionado`
        form.appendChild(item)
        res.innerHTML = " " 
        }

    }else{
        alert('Valor inválido ou já encontrado na lista. ')
    }
       
}


function calcular(){
    valores_ord = valores.sort()
    var total = valores_ord.reduce((total, valores_ord) => total + valores_ord, 0);
    var media = total / valores.length
    
    res.innerHTML = `Foram adicionados ${valores.length} números <br>`
    res.innerHTML += `O valor mais alto é ${valores_ord[valores.length - 1]} <br>`
    res.innerHTML += `O valor mais baixo é ${valores_ord[0]} <br>`
    res.innerHTML += `O valor da soma é ${total} <br>`
    res.innerHTML += `O valor da média é ${media}`
}