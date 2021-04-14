function calcular(){
    var n = document.getElementById('numero')
    var form = document.getElementById('seltab')
    

    if(n.value.length == 0){
        alert('Por favor digite um número')
    }else{
        var num = Number(n.value)
        form.innerHTML=" "
        
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.value = `tab${i}`
            let res = num * i

            item.text = `${num} x ${i} = ${res}`
            form.appendChild(item)
    
        }
    }
}