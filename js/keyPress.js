var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var primeiro = true

function verificarNumero(char){
    for(i in numbers){
        if(char == numbers[i]){
            return true
        }
    }
}
function adicionarNumero(numero, number){
    if(number == true){
        if(primeiro == true){
            display.innerHTML = ''
        }
        display.innerHTML = display.innerHTML + numero
        primeiro = false      
    }    
}

document.addEventListener('keypress', function(e){
    adicionarNumero(e.key, verificarNumero(e.key))
}, false)